
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-provider";
import { getChallengeById } from "@/services/languageService";
import type { Challenge } from "@/lib/mock-data";
import { explainCode } from "@/ai/flows/explain-code";
import { cn } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BrainCircuit, CheckCircle, Code, Loader2, Play, Star, Trophy, XCircle } from "lucide-react";


const getBoilerplate = (lang: string) => {
    switch (lang) {
        case 'js':
            return 'function solve() {\n  // Your code here\n}\n\nsolve();';
        case 'py':
            return 'def solve():\n  # Your code here\n  pass\n\nsolve()';
        default:
            return '// Start your solution here';
    }
};

export default function SolveChallengePage({ params }: { params: { challengeId: string } }) {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState<{ message: string, lineNumber: number | null } | null>(null);
    const [explanation, setExplanation] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isExplaining, setIsExplaining] = useState(false);
    const [activeTab, setActiveTab] = useState("output");
    const workerRef = useRef<Worker | null>(null);

    // Worker setup
    useEffect(() => {
        workerRef.current = new Worker('/code-runner.js');
        const parseLineNumber = (stack: string): number | null => {
            const match = /<anonymous>:(\d+):/.exec(stack);
            return match?.[1] ? parseInt(match[1], 10) : null;
        }
        workerRef.current.onmessage = (e) => {
            const { output: workerOutput, error: workerError } = e.data;
            if (workerError) {
                setOutput('Error: ' + workerError.message);
                setError({ message: workerError.message, lineNumber: parseLineNumber(workerError.stack) });
            } else {
                setOutput(workerOutput || "Code executed successfully with no output.");
                setError(null);
            }
            setIsRunning(false);
        };
        workerRef.current.onerror = (e) => {
            setOutput('An error occurred: ' + e.message);
            setIsRunning(false);
        };
        return () => workerRef.current?.terminate();
    }, []);

    useEffect(() => {
        async function fetchChallenge() {
            setIsLoading(true);
            const challengeIdNum = parseInt(params.challengeId, 10);
            if (isNaN(challengeIdNum)) {
                return notFound();
            }
            const data = await getChallengeById(challengeIdNum);
            if (!data) {
                return notFound();
            }
            setChallenge(data);
            setCode(getBoilerplate(data.language));
            setIsLoading(false);
        }
        fetchChallenge();
    }, [params.challengeId]);
    
    const handleRunCode = () => {
        if (!workerRef.current) return;
        setIsRunning(true);
        setOutput("Running code...");
        setError(null);
        setActiveTab("output");
        workerRef.current.postMessage({ code });
    };

    const handleSubmitCode = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            const isSuccess = Math.random() > 0.3; // Mock submission result
            if(isSuccess) {
                toast({ title: t('submission_accepted'), description: `You earned ${challenge?.points} points!` });
            } else {
                toast({ title: t('submission_failed'), description: "One or more tests failed. Keep trying!", variant: "destructive" });
            }
            setIsSubmitting(false);
        }, 1500);
    };

    const handleDebugCode = async () => {
        if (!code.trim()) return;
        setIsExplaining(true);
        setExplanation("");
        setActiveTab("explanation");
        try {
            const result = await explainCode({ code });
            setExplanation(result.explanation);
        } catch (error) {
            console.error(error);
            setExplanation("Sorry, I had trouble explaining that code.");
            toast({ title: t('ai_explanation_failed_title'), variant: 'destructive' });
        } finally {
            setIsExplaining(false);
        }
    };


    if (isLoading || !challenge) {
        return <div className="p-8"><Skeleton className="h-96 w-full" /></div>;
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Trophy className="h-10 w-10 text-primary shrink-0" />
                    <div>
                        <h1 className="font-headline text-3xl font-bold text-primary">{challenge.title}</h1>
                        <p className="text-lg text-muted-foreground">{t('solve_challenge')}</p>
                    </div>
                </div>
                 <Button asChild variant="outline">
                    <Link href="/challenges">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t('back_to_challenges')}
                    </Link>
                </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <Card className="lg:sticky lg:top-6">
                    <CardHeader>
                        <CardTitle>Challenge Details</CardTitle>
                        <div className="flex items-center gap-4 pt-2">
                             <Badge variant={
                                challenge.difficulty === 'Easy' ? 'secondary' :
                                challenge.difficulty === 'Medium' ? 'outline' : 'default'
                            }>{challenge.difficulty}</Badge>
                            <div className="flex items-center gap-1.5 text-yellow-500">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="font-semibold text-sm text-muted-foreground">{challenge.points} pts</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ReactMarkdown className="prose prose-sm dark:prose-invert max-w-none">
                            {challenge.description}
                        </ReactMarkdown>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-4">
                        <CardTitle className="flex items-center gap-2">
                            <Code className="h-6 w-6" /> {t('your_solution')}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                            <Button variant="secondary" onClick={handleDebugCode} disabled={isExplaining}>
                                <BrainCircuit className="mr-2" />
                                {isExplaining ? t('ai_explaining') : t('debug_code')}
                            </Button>
                            <Button onClick={handleRunCode} disabled={isRunning}>
                                <Play className="mr-2" />
                                {isRunning ? t('running') : t('run_code')}
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                         <Textarea 
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="font-mono h-80 bg-muted/50 dark:bg-zinc-900 rounded-md border" 
                            placeholder="// Your code here..."
                        />
                         <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="output">{t('output')}</TabsTrigger>
                                <TabsTrigger value="explanation">{t('ai_explanation')}</TabsTrigger>
                            </TabsList>
                             <TabsContent value="output">
                                <div className={cn(
                                    "font-mono h-48 rounded-md border p-4 overflow-auto transition-colors text-sm",
                                    !output && "bg-muted",
                                    output && error && "bg-red-50 dark:bg-destructive/10 border-destructive/30",
                                    output && !error && "bg-green-50 dark:bg-green-950/30 border-green-500/30"
                                )}>
                                    {isRunning || isSubmitting ? (
                                        <div className="flex items-center justify-center h-full text-muted-foreground">
                                            <Loader2 className="h-6 w-6 animate-spin" />
                                            <p className="ml-3">{isRunning ? t('running') : t('submitting')}</p>
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
                                        <pre className="whitespace-pre-wrap">{output}</pre>
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-muted-foreground">
                                            <p>{t('run_to_see_output')}</p>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                             <TabsContent value="explanation">
                                <div className="font-sans h-48 bg-muted rounded-md border p-4 overflow-auto">
                                    {isExplaining && (
                                        <div className="flex items-center justify-center h-full text-muted-foreground">
                                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                            <p className="ml-4">{t('ai_is_thinking')}</p>
                                        </div>
                                    )}
                                    {explanation && !isExplaining && (
                                        <ReactMarkdown className="prose prose-sm dark:prose-invert max-w-none">
                                            {explanation}
                                        </ReactMarkdown>
                                    )}
                                    {!explanation && !isExplaining && (
                                        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                                            <BrainCircuit className="h-12 w-12 mb-4" />
                                            <p>{t('debugger_placeholder')}</p>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        </Tabs>
                        <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white" onClick={handleSubmitCode} disabled={isSubmitting || isRunning}>
                           {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle className="mr-2 h-4 w-4" />}
                           {isSubmitting ? t('submitting') : t('submit')}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
