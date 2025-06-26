
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { Code, Play, RefreshCw, Copy, Save, BrainCircuit, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { explainCode } from '@/ai/flows/explain-code';
import { useLanguage } from '@/context/language-provider';
import { cn } from '@/lib/utils';

const initialCode = `// Welcome to the Practice Zone!
// Select an example from the left or write your own code.

function greet(name) {
  return 'Hello, ' + name + '! Welcome to the Practice Zone.';
}

console.log(greet("Learner"));`;

const practiceTopics = [
    {
        title: "JavaScript: Hello World",
        description: "A simple 'Hello World' to get started.",
        language: "javascript",
        code: `console.log("Hello, World!");`,
    },
    {
        title: "JavaScript: Variables",
        description: "Learn how to declare and use variables.",
        language: "javascript",
        code: `let name = "Alice";\nconst score = 95;\n\nconsole.log(name + " scored " + score + " points.");`,
    },
    {
        title: "JavaScript: Functions",
        description: "Define and call a simple function.",
        language: "javascript",
        code: `function add(a, b) {\n  return a + b;\n}\n\nconsole.log("The sum is:", add(5, 3));`,
    },
    {
        title: "Python: User Input",
        description: "A simple example of how to take input from a user.",
        language: "python",
        code: `name = input("Enter your name: ")\nprint("Hello, " + name)`,
    },
    {
        title: "Python: List Iteration",
        description: "Learn how to loop through a list of items.",
        language: "python",
        code: `fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n  print(fruit)`,
    },
];

export default function PracticePage() {
    const { toast } = useToast();
    const { t } = useLanguage();
    
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState("");
    const [error, setError] = useState<{ message: string, lineNumber: number | null } | null>(null);
    const [explanation, setExplanation] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [isExplaining, setIsExplaining] = useState(false);
    const [activeTab, setActiveTab] = useState("editor");
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [currentTopic, setCurrentTopic] = useState({
        title: "Interactive Code Editor",
        description: "Select an example from the left or write your own code."
    });
    const workerRef = useRef<Worker | null>(null);

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
    
    const handleLoadExample = (example: typeof practiceTopics[0]) => {
        setCode(example.code);
        setSelectedLanguage(example.language);
        setCurrentTopic({ title: example.title, description: example.description });
        setOutput("");
        setError(null);
        setExplanation("");
        setActiveTab("editor");
        toast({
            title: `Loaded: ${example.title}`,
            description: "The example code is ready in the editor.",
        });
    };

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
    
    const handleReset = () => {
        setCode(initialCode);
        setCurrentTopic({
            title: "Interactive Code Editor",
            description: "Select an example from the left or write your own code."
        });
        setSelectedLanguage("javascript");
        setOutput("");
        setError(null);
        setExplanation("");
        setActiveTab("editor");
        toast({ title: "Editor Reset", description: "The editor has been reset to the default state." });
    };

    return (
        <>
            <div className="flex items-center gap-4 mb-8">
                <Code size={40} className="text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">{t('practice_and_examples')}</h1>
                    <p className="text-lg text-muted-foreground">{t('practice_skills_interactive')}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-1 space-y-4">
                     <Card>
                        <CardHeader>
                            <CardTitle>Practice Topics</CardTitle>
                            <CardDescription>Select a topic to load it into the editor and try it yourself.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                            {practiceTopics.map((example) => (
                                <button
                                    key={example.title}
                                    onClick={() => handleLoadExample(example)}
                                    className="p-3 rounded-md border text-left hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <p className="font-semibold">{example.title}</p>
                                    <p className="text-sm text-muted-foreground">{example.description}</p>
                                </button>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2">
                    <Card>
                         <CardHeader>
                            <CardTitle>{currentTopic.title}</CardTitle>
                            <CardDescription>{currentTopic.description}</CardDescription>
                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-4 border-t -mx-6 px-6">
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm" onClick={handleExplainCode} disabled={isExplaining}>
                                        <BrainCircuit /> {isExplaining ? t('ai_explaining') : t('explain_code')}
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={handleCopy}><Copy /> {t('copy_code')}</Button>
                                    <Button variant="ghost" size="sm" onClick={handleReset}><RefreshCw /> {t('reset_code')}</Button>
                                    <Button variant="ghost" size="sm" onClick={() => toast({ title: t('save_feature_soon_title'), description: t('save_feature_soon_desc')})}><Save /> {t('save_feature')}</Button>
                                </div>
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
                                            <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: explanation.replace(/\\n/g, '<br />') }} />
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
