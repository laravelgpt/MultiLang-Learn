
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Code, FileCode, Play, RefreshCw, Copy, Save, BrainCircuit, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { explainCode } from '@/ai/flows/explain-code';
import { useLanguage } from '@/context/language-provider';
import { cn } from '@/lib/utils';
import { generateCodeExample } from '@/ai/flows/generate-code-example';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const initialCode = `// Welcome to the Practice Zone!
// Try writing some code and run it to see the output

function greetUser(name) {
  return 'Hello, ' + name + '! Welcome to LearnCode.';
}

// Test the function
console.log(greetUser("Programmer"));

// Try modifying the code and run it again!`;

export default function PracticePage() {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState("");
    const [error, setError] = useState<{ message: string, lineNumber: number | null } | null>(null);
    const [explanation, setExplanation] = useState("");
    const { toast } = useToast();
    const { t } = useLanguage();
    const [isRunning, setIsRunning] = useState(false);
    const [isExplaining, setIsExplaining] = useState(false);
    const [activeTab, setActiveTab] = useState("editor");
    const workerRef = useRef<Worker | null>(null);
    
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState("Medium");
    const [generatedTitle, setGeneratedTitle] = useState("");
    const [generatedDescription, setGeneratedDescription] = useState("");

    const parseLineNumber = (stack: string): number | null => {
        const match = /<anonymous>:(\d+):/.exec(stack);
        if (match && match[1]) {
            return parseInt(match[1], 10);
        }
        return null;
    }

    useEffect(() => {
        workerRef.current = new Worker('/code-runner.js');

        workerRef.current.onmessage = (e) => {
            const { output: workerOutput, error: workerError } = e.data;
            if (workerError) {
                const lineNumber = parseLineNumber(workerError.stack);
                setOutput('Error: ' + workerError.message);
                setError({ message: workerError.message, lineNumber });
            } else {
                setOutput(workerOutput || "Code executed successfully with no output.");
                setError(null);
            }
            setIsRunning(false);
        };
        
        workerRef.current.onerror = (e) => {
            setOutput('An error occurred in the code runner: ' + e.message);
            setIsRunning(false);
        };

        return () => {
            workerRef.current?.terminate();
        };
    }, []);

    const handleRunCode = () => {
        if (!workerRef.current) return;
        
        setIsRunning(true);
        setOutput("Running code...");
        setError(null);
        setActiveTab("output");
        workerRef.current.postMessage({ code });
    };
    
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        toast({ title: t('code_copied_title'), description: t('code_copied_desc') });
    };

    const handleExplainCode = async () => {
        if (!code.trim()) {
            toast({ title: t('cannot_explain_empty_title'), description: t('cannot_explain_empty_desc'), variant: 'destructive' });
            return;
        }
        setIsExplaining(true);
        setExplanation("");
        setActiveTab("explanation");
        try {
            const result = await explainCode({ code });
            setExplanation(result.explanation);
        } catch (error) {
            console.error(error);
            setExplanation("Sorry, I had trouble explaining that code. Please check the console for details.");
            toast({ title: t('ai_explanation_failed_title'), description: t('ai_explanation_failed_desc'), variant: 'destructive' });
        } finally {
            setIsExplaining(false);
        }
    };
    
    const handleGenerateExample = async () => {
        if (!topic) {
            toast({ title: "Topic is required", description: "Please enter a topic to generate an example.", variant: "destructive" });
            return;
        }
        setIsGenerating(true);
        setCode("// Generating example...");
        setGeneratedTitle("");
        setGeneratedDescription("");
        setExplanation("");
        setOutput("");
        setError(null);

        try {
            const result = await generateCodeExample({
                language: selectedLanguage,
                topic,
                difficulty
            });
            setCode(result.code);
            setGeneratedTitle(result.title);
            setGeneratedDescription(result.description);
            setActiveTab("editor");
        } catch (error) {
            console.error("Failed to generate code example:", error);
            toast({ title: "Generation Failed", description: "Could not generate an example. Please try again.", variant: "destructive" });
            setCode("// Failed to generate example. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };


    return (
        <>
            <div className="flex items-center gap-4 mb-8">
                <FileCode size={40} className="text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">{t('practice_and_examples')}</h1>
                    <p className="text-lg text-muted-foreground">{t('practice_skills_interactive')}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Left Column: Code Examples */}
                <div className="lg:col-span-1 space-y-4">
                     <Card>
                        <CardHeader>
                            <CardTitle>Generate Error Example</CardTitle>
                            <CardDescription>Create a custom code challenge with a hidden error.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="topic">Topic</Label>
                                <Input id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g., JavaScript closures" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="difficulty">Difficulty</Label>
                                <Select value={difficulty} onValueChange={(value) => setDifficulty(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select difficulty" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Easy">Easy</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="Hard">Hard</SelectItem>
                                        <SelectItem value="Heavy Hard">Heavy Hard</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button onClick={handleGenerateExample} disabled={isGenerating} className="w-full">
                                {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <BrainCircuit className="mr-2 h-4 w-4" />}
                                {isGenerating ? "Generating..." : "Generate Example"}
                            </Button>
                        </CardContent>
                    </Card>
                    {generatedTitle && (
                        <Card>
                            <CardHeader>
                                <CardTitle>{generatedTitle}</CardTitle>
                                <CardDescription>{generatedDescription}</CardDescription>
                            </CardHeader>
                        </Card>
                    )}
                </div>

                {/* Right Column: Interactive Code Editor */}
                <div className="lg:col-span-2">
                    <Card>
                         <CardHeader>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <CardTitle className="text-xl flex items-center gap-2"><Code className="h-5 w-5" /> {t('interactive_code_editor')}</CardTitle>
                                <div className="flex items-center gap-2">
                                    <Select value={selectedLanguage} onValueChange={(val) => setSelectedLanguage(val)}>
                                        <SelectTrigger className="w-[180px]">
                                            <div className='flex items-center gap-2'>
                                                <Image src="https://placehold.co/16x16.png" width={16} height={16} alt="JS" data-ai-hint="javascript logo" />
                                                <SelectValue placeholder={t('language')} />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="javascript">JavaScript</SelectItem>
                                            <SelectItem value="python">Python</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 text-white w-[90px]">
                                        {isRunning ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
                                        {isRunning ? t('running') : t('run')}
                                    </Button>
                                </div>
                            </div>
                             <div className="flex items-center gap-2 pt-4 mt-4 border-t -mx-6 px-6">
                                <Button variant="ghost" size="sm" onClick={handleExplainCode} disabled={isExplaining}>
                                    <BrainCircuit /> {isExplaining ? t('ai_explaining') : t('explain_code')}
                                </Button>
                                <Button variant="ghost" size="sm" onClick={handleCopy}><Copy /> {t('copy_code')}</Button>
                                <Button variant="ghost" size="sm" onClick={() => setCode(initialCode)}><RefreshCw /> {t('reset_code')}</Button>
                                <Button variant="ghost" size="sm" onClick={() => toast({ title: t('save_feature_soon_title'), description: t('save_feature_soon_desc')})}><Save /> {t('save_feature')}</Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Tabs value={activeTab} onValueChange={setActiveTab}>
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="editor">{t('editor')}</TabsTrigger>
                                    <TabsTrigger value="output">{t('output')}</TabsTrigger>
                                    <TabsTrigger value="explanation">{t('ai_explanation')}</TabsTrigger>
                                </TabsList>
                                <TabsContent value="editor">
                                    <Textarea 
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        className="font-mono h-96 bg-muted/50 dark:bg-zinc-900 rounded-md border" 
                                        placeholder="Write your code here..."
                                    />
                                </TabsContent>
                                <TabsContent value="output">
                                    <div className={cn(
                                        "font-mono h-96 rounded-md border p-4 overflow-auto transition-colors text-sm",
                                        !output && "bg-muted",
                                        output && error && "bg-red-50 dark:bg-destructive/10 border-destructive/30",
                                        output && !error && "bg-green-50 dark:bg-green-950/30 border-green-500/30"
                                    )}>
                                        {isRunning ? (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                <Loader2 className="h-6 w-6 animate-spin" />
                                                <p className="ml-3">{t('running')}</p>
                                            </div>
                                        ) : error ? (
                                            <div className="flex items-start gap-4 text-destructive">
                                                <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h3 className="font-bold mb-2">Error on line {error.lineNumber || 'N/A'}</h3>
                                                    <pre className="font-mono text-sm whitespace-pre-wrap">{error.message}</pre>
                                                </div>
                                            </div>
                                        ) : output ? (
                                            <div className="flex items-start gap-4 text-green-700 dark:text-green-300">
                                                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h3 className="font-bold mb-2">Success!</h3>
                                                    <pre className="whitespace-pre-wrap">{output}</pre>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                <p>{t('run_to_see_output')}</p>
                                            </div>
                                        )}
                                    </div>
                                </TabsContent>
                                 <TabsContent value="explanation">
                                    <div className="font-sans h-96 bg-muted rounded-md border p-4 overflow-auto">
                                        {isExplaining && (
                                            <div className="flex items-center justify-center h-full">
                                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                                <p className="ml-4 text-muted-foreground">{t('ai_is_thinking')}</p>
                                            </div>
                                        )}
                                        {explanation && !isExplaining && (
                                            <p className="text-sm whitespace-pre-wrap">{explanation}</p>
                                        )}
                                        {!explanation && !isExplaining && (
                                            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                                                <BrainCircuit className="h-12 w-12 mb-4" />
                                                <p>{t('click_ai_button_for_explanation')}</p>
                                            </div>
                                        )}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
