
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import { getLanguageCurriculum } from "@/services/languageService";
import type { Lesson } from "@/lib/mock-data";
import { useLanguage } from "@/context/language-provider";
import { cn } from "@/lib/utils";
import { explainCode } from "@/ai/flows/explain-code";
import { useToast } from "@/hooks/use-toast";

import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, Code, Play, Loader2, CheckCircle, XCircle, BrainCircuit, Copy, RefreshCw } from "lucide-react";

type LessonData = {
  lesson: Lesson;
  topicTitle: string;
};

export default function LessonPage({ params }: { params: { langId: string, lessonId: string } }) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [lessonData, setLessonData] = useState<LessonData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Editor state
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [editorError, setEditorError] = useState<{ message: string, lineNumber: number | null } | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [activeTab, setActiveTab] = useState("output");
  const workerRef = useRef<Worker | null>(null);

  // Worker setup
  useEffect(() => {
    workerRef.current = new Worker('/code-runner.js');

    const parseLineNumber = (stack: string): number | null => {
        const match = /<anonymous>:(\d+):/.exec(stack);
        if (match && match[1]) {
            return parseInt(match[1], 10);
        }
        return null;
    }

    workerRef.current.onmessage = (e) => {
        const { output: workerOutput, error: workerError } = e.data;
        if (workerError) {
            const lineNumber = parseLineNumber(workerError.stack);
            setOutput('Error: ' + workerError.message);
            setEditorError({ message: workerError.message, lineNumber });
        } else {
            setOutput(workerOutput || "Code executed successfully with no output.");
            setEditorError(null);
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
  
  useEffect(() => {
    async function fetchLesson() {
      setIsLoading(true);
      try {
        const curriculum = await getLanguageCurriculum(params.langId);
        if (!curriculum) {
          setError(t('lesson_not_found_desc'));
          setIsLoading(false);
          return;
        }

        let foundLesson: Lesson | undefined;
        let foundTopicTitle: string | undefined;

        for (const topic of curriculum.topics) {
          const l = topic.lessons.find(l => l.id === params.lessonId);
          if (l) {
            foundLesson = l;
            foundTopicTitle = topic.title;
            break;
          }
        }

        if (foundLesson && foundTopicTitle) {
          setLessonData({ lesson: foundLesson, topicTitle: foundTopicTitle });
           if(foundLesson.codeSnippet) {
              setCode(foundLesson.codeSnippet);
              setOutput("");
              setEditorError(null);
              setExplanation("");
              setActiveTab("output");
          }
        } else {
          setError(t('lesson_not_found_desc'));
        }
      } catch (e) {
        setError(t('lesson_not_found_desc'));
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchLesson();
  }, [params.langId, params.lessonId, t]);

  const handleRunCode = () => {
    if (!workerRef.current) return;
    
    setIsRunning(true);
    setOutput("Running code...");
    setEditorError(null);
    setActiveTab("output");
    workerRef.current.postMessage({ code });
  };
  
  const handleResetCode = () => {
    if (lessonData) {
      setCode(lessonData.lesson.codeSnippet || "");
      toast({ title: t('reset_code') });
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast({ title: t('code_copied_title') });
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

  if (isLoading) {
    return (
      <>
        <PageHeader title="Loading Lesson..." />
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </CardHeader>
          <CardContent className="space-y-2 pt-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </>
    );
  }

  if (error || !lessonData) {
    return (
      <div>
        <PageHeader title={t('lesson_not_found_title')}>
          <Button asChild variant="outline">
            <Link href={`/languages/${params.langId}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('back_to_curriculum')}
            </Link>
          </Button>
        </PageHeader>
        <p>{error}</p>
      </div>
    );
  }

  const { lesson, topicTitle } = lessonData;

  return (
    <>
      <PageHeader title={lesson.title}>
        <Button asChild variant="outline">
          <Link href={`/languages/${params.langId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back_to_curriculum')}
          </Link>
        </Button>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span>{lesson.title}</span>
          </CardTitle>
          <CardDescription>
            {t('from_topic')}: {topicTitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{lesson.content || t('lesson_content_coming_soon')}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>
      
      {lesson.codeSnippet && (
        <Card className="mt-8">
            <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1">
                        <CardTitle className="flex items-center gap-2">
                            <Code className="h-6 w-6 text-primary" />
                            <span>{t('try_it_yourself')}</span>
                        </CardTitle>
                        <CardDescription>{t('try_it_yourself_desc')}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 text-white">
                            {isRunning ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
                            {isRunning ? t('running') : t('run')}
                        </Button>
                    </div>
                </div>
                 <div className="flex items-center gap-2 pt-4 mt-4 border-t -mx-6 px-6">
                    <Button variant="ghost" size="sm" onClick={handleExplainCode} disabled={isExplaining}>
                        <BrainCircuit /> {isExplaining ? t('ai_explaining') : t('explain_code')}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleCopyCode}><Copy /> {t('copy_code')}</Button>
                    <Button variant="ghost" size="sm" onClick={handleResetCode}><RefreshCw /> {t('reset_code')}</Button>
                 </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="font-mono h-64 bg-muted/50 dark:bg-zinc-900 rounded-md border"
                />
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="output">{t('output')}</TabsTrigger>
                        <TabsTrigger value="explanation">{t('ai_explanation')}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="output">
                        <div className={cn(
                            "font-mono h-48 rounded-md border p-4 overflow-auto transition-colors text-sm",
                            !output && "bg-muted",
                            output && editorError && "bg-red-50 dark:bg-destructive/10 border-destructive/30",
                            output && !editorError && "bg-green-50 dark:bg-green-950/30 border-green-500/30"
                        )}>
                            {isRunning ? (
                                <div className="flex items-center justify-center h-full text-muted-foreground">
                                    <Loader2 className="h-6 w-6 animate-spin" />
                                    <p className="ml-3">{t('running')}</p>
                                </div>
                            ) : editorError ? (
                                <div className="flex items-start gap-4 text-destructive">
                                    <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold mb-2">Error on line {editorError.lineNumber || 'N/A'}</h3>
                                        <pre className="font-mono text-sm whitespace-pre-wrap">{editorError.message}</pre>
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
                       <div className="font-sans h-48 bg-muted rounded-md border p-4 overflow-auto">
                            {isExplaining && (
                                <div className="flex items-center justify-center h-full">
                                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                    <p className="ml-4 text-muted-foreground">{t('ai_explaining')}</p>
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
                                    <p>{t('code_explanation_placeholder')}</p>
                                </div>
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
      )}
    </>
  )
}
