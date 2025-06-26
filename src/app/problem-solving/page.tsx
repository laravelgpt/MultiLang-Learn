
"use client";

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/context/language-provider';
import { decomposeProblem, type DecomposeProblemOutput } from '@/ai/flows/decompose-problem';
import { explainCode } from '@/ai/flows/explain-code';
import { generateCodeExample, type GenerateCodeExampleOutput } from '@/ai/flows/generate-code-example';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, BrainCircuit, Lightbulb, ListChecks, Goal, CheckCircle, Boxes, Loader2, FileCode, Code, Play } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';


const decomposerFormSchema = z.object({
  problemStatement: z.string().min(10, { message: "Problem statement must be at least 10 characters." }),
});

const ProblemDecomposer = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<DecomposeProblemOutput | null>(null);

  const form = useForm<z.infer<typeof decomposerFormSchema>>({
    resolver: zodResolver(decomposerFormSchema),
    defaultValues: {
      problemStatement: "",
    },
  });

  async function onSubmit(values: z.infer<typeof decomposerFormSchema>) {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await decomposeProblem({ problemStatement: values.problemStatement });
      setAnalysis(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  
  const AnalysisSection = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string | string[] }) => (
    <div>
        <div className="flex items-center gap-3 mb-2">
            {icon}
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        {Array.isArray(content) ? (
            <ul className="space-y-2 pl-6">
                {content.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-1 text-green-500 shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p className="text-muted-foreground pl-9">{content}</p>
        )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-6">
        <Card>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>{t('problem_statement')}</CardTitle>
                <CardDescription>{t('describe_the_problem')}</CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="problemStatement"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          rows={8}
                          placeholder={t('enter_problem_statement')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardContent>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <BrainCircuit className="mr-2 h-4 w-4" />}
                  {isLoading ? t('decomposing') : t('decompose_problem')}
                </Button>
              </CardContent>
            </form>
          </Form>
        </Card>

        <Card className="min-h-[400px]">
          <CardHeader>
            <CardTitle>{t('ai_breakdown')}</CardTitle>
            <CardDescription>{t('ai_generated_plan')}</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="mt-4">{t('decomposing')}</p>
              </div>
            )}
            {analysis && !isLoading && (
                <div className="space-y-6">
                    <AnalysisSection icon={<Goal className="h-6 w-6 text-primary"/>} title={t('inputs')} content={analysis.inputs} />
                    <Separator />
                    <AnalysisSection icon={<ListChecks className="h-6 w-6 text-green-500"/>} title={t('outputs')} content={analysis.outputs} />
                    <Separator />
                    <AnalysisSection icon={<Lightbulb className="h-6 w-6 text-yellow-500"/>} title={t('constraints')} content={analysis.constraints} />
                    <Separator />
                    <AnalysisSection icon={<Boxes className="h-6 w-6 text-purple-500"/>} title={t('suggested_data_structures')} content={analysis.dataStructures} />
                    <Separator />
                    <AnalysisSection icon={<ListChecks className="h-6 w-6 text-blue-500"/>} title={t('step_by_step_plan')} content={analysis.stepByStepPlan} />
                </div>
            )}
            {!analysis && !isLoading && (
              <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
                <BrainCircuit className="h-16 w-16 mb-4" />
                <p>{t('get_started_by_entering_problem')}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
  );
}


const CodeExplainer = () => {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [code, setCode] = useState('// Select a difficulty and click "Generate Example" to start');
    const [output, setOutput] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const [exampleDetails, setExampleDetails] = useState<GenerateCodeExampleOutput | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [isExplaining, setIsExplaining] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [activeTab, setActiveTab] = useState("editor");
    const workerRef = useRef<Worker | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | '' >('');

    type Difficulty = "Easy" | "Medium" | "Hard" | "Heavy Hard";
    const difficulties: Difficulty[] = ["Easy", "Medium", "Hard", "Heavy Hard"];

    useEffect(() => {
        workerRef.current = new Worker('/code-runner.js');
        workerRef.current.onmessage = (e) => {
            const { output: workerOutput, error } = e.data;
            if (error) {
                setOutput('Error: ' + String(error));
            } else {
                setOutput(workerOutput || "Code executed successfully with no output.");
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
        setActiveTab("output");
        workerRef.current.postMessage({ code });
    };

    const handleGenerateExample = async (difficulty: Difficulty) => {
      setIsGenerating(true);
      setSelectedDifficulty(difficulty);
      setExampleDetails(null);
      setCode("");
      setOutput("");
      setSuggestion("");
      setActiveTab("editor");
      try {
        const result = await generateCodeExample({ language: selectedLanguage, difficulty: difficulty });
        setExampleDetails(result);
        setCode(result.code);
      } catch (error) {
        console.error("Failed to generate code example:", error);
        toast({
          title: "Generation Failed",
          description: "Could not generate a new code example. Please try again.",
          variant: "destructive",
        });
        setCode(`// Failed to generate example for ${difficulty} ${selectedLanguage}.`);
      } finally {
        setIsGenerating(false);
      }
    };

    const handleGetSuggestion = async () => {
        if (!code.trim()) {
            toast({ title: t('cannot_explain_empty_title'), description: t('cannot_explain_empty_desc'), variant: 'destructive' });
            return;
        }
        setIsExplaining(true);
        setSuggestion("");
        setActiveTab("suggestion");
        try {
            const result = await explainCode({ code });
            setSuggestion(result.explanation);
        } catch (error) {
            console.error(error);
            setSuggestion("Sorry, I had trouble explaining that code. Please check the console for details.");
            toast({ title: t('ai_explanation_failed_title'), description: t('ai_explanation_failed_desc'), variant: 'destructive' });
        } finally {
            setIsExplaining(false);
        }
    };

    return (
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-6">
            <div className="lg:col-span-1 space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('error_examples')}</CardTitle>
                        <CardDescription>{t('generate_new_error_example_from_card')}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {difficulties.map((difficulty) => (
                            <Button
                                key={difficulty}
                                variant="outline"
                                className="p-4 h-20 text-base"
                                onClick={() => handleGenerateExample(difficulty)}
                                disabled={isGenerating}
                            >
                                {isGenerating && selectedDifficulty === difficulty ? (
                                    <Loader2 className="h-6 w-6 animate-spin" />
                                ) : (
                                    difficulty
                                )}
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <CardTitle className="text-xl flex items-center gap-2"><Code className="h-5 w-5" /> {t('interactive_code_editor')}</CardTitle>
                             <div className="flex items-center gap-2">
                                <Select value={selectedLanguage} onValueChange={(val) => setSelectedLanguage(val)}>
                                    <SelectTrigger className="w-auto">
                                        <div className='flex items-center gap-2'>
                                            <Image src="https://placehold.co/16x16.png" width={16} height={16} alt="JS" data-ai-hint="javascript logo" />
                                            <SelectValue placeholder={t('language')} />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="javascript">JavaScript</SelectItem>
                                        <SelectItem value="python" disabled>Python</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 text-white w-[90px]">
                                    {isRunning ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
                                    {isRunning ? t('running') : t('run')}
                                </Button>
                                <Button onClick={handleGetSuggestion} disabled={isExplaining} className="bg-purple-600 hover:bg-purple-700 text-white w-[180px]">
                                    {isExplaining ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <BrainCircuit className="mr-2 h-4 w-4" />}
                                    {isExplaining ? t('ai_suggesting') : t('get_ai_suggestion')}
                                </Button>
                            </div>
                        </div>
                        {exampleDetails && (
                          <div className='pt-4'>
                            <h3 className="font-bold">{exampleDetails.title}</h3>
                            <p className="text-sm text-muted-foreground">{exampleDetails.description}</p>
                          </div>
                        )}
                    </CardHeader>
                    <CardContent>
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="editor">{t('editor')}</TabsTrigger>
                                <TabsTrigger value="output">{t('output')}</TabsTrigger>
                                <TabsTrigger value="suggestion">{t('ai_suggestion')}</TabsTrigger>
                            </TabsList>
                            <TabsContent value="editor">
                                <Textarea 
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className="font-mono h-96 bg-muted rounded-md border" 
                                    placeholder="Write your code here..."
                                />
                            </TabsContent>
                            <TabsContent value="output">
                                <div className="font-mono h-96 bg-muted rounded-md border p-4 overflow-auto">
                                    <pre className="text-sm whitespace-pre-wrap">{output || t('run_to_see_output')}</pre>
                                </div>
                            </TabsContent>
                             <TabsContent value="suggestion">
                                <div className="font-sans h-96 bg-muted rounded-md border p-4 overflow-auto">
                                    {isExplaining && (
                                        <div className="flex items-center justify-center h-full">
                                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                            <p className="ml-4 text-muted-foreground">{t('ai_is_thinking')}</p>
                                        </div>
                                    )}
                                    {suggestion && !isExplaining && (
                                        <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: suggestion.replace(/\n/g, '<br />') }} />
                                    )}
                                    {!suggestion && !isExplaining && (
                                        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                                            <BrainCircuit className="h-12 w-12 mb-4" />
                                            <p>{t('ai_suggestion_placeholder')}</p>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default function ProblemSolvingPage() {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Zap className="h-10 w-10 text-primary shrink-0" />
        <div>
          <h1 className="font-headline text-3xl font-bold text-primary">{t('problem_solving_title')}</h1>
          <p className="text-lg text-muted-foreground">{t('problem_solving_desc')}</p>
        </div>
      </div>

      <Tabs defaultValue="decomposer" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="decomposer">{t('problem_decomposer')}</TabsTrigger>
          <TabsTrigger value="explainer">{t('code_explainer')}</TabsTrigger>
        </TabsList>
        <TabsContent value="decomposer">
          <ProblemDecomposer />
        </TabsContent>
        <TabsContent value="explainer">
          <CodeExplainer />
        </TabsContent>
      </Tabs>
    </div>
  );
}
