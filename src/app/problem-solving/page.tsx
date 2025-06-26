
"use client";

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/context/language-provider';
import { decomposeProblem, type DecomposeProblemOutput } from '@/ai/flows/decompose-problem';
import { explainCode } from '@/ai/flows/explain-code';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, BrainCircuit, Lightbulb, ListChecks, Goal, CheckCircle, Boxes, Loader2, FileCode, Code, Play, RefreshCw } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';


const decomposerFormSchema = z.object({
  problemStatement: z.string().min(10, { message: "Problem statement must be at least 10 characters." }),
});

const buggyCodeExamples = [
    // Easy
    {
        title: "Missing Parenthesis",
        description: "A simple syntax error where a closing parenthesis is missing.",
        tag: "javascript",
        difficulty: "Easy",
        code: `function greet(name) {
  console.log("Hello, " + name;
}
greet("World");`
    },
    {
        title: "Incorrect Loop Condition",
        description: "A classic off-by-one error that attempts to access an index out of bounds.",
        tag: "javascript",
        difficulty: "Easy",
        code: `const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}`
    },
    // Medium
    {
        title: "Misunderstanding 'this'",
        description: "Incorrect usage of 'this' inside a callback function, leading to lost context.",
        tag: "javascript",
        difficulty: "Medium",
        code: `const person = {
  name: "John",
  greet: function() {
    console.log("Hi, I am " + this.name);
    setTimeout(function() {
      // 'this' here refers to the global object (or is undefined in strict mode), not 'person'.
      console.log("After 1 second, my name is " + this.name);
    }, 1000);
  }
};
person.greet();`
    },
    {
        title: "Forgetting to Await",
        description: "Calling an async function without 'await' can lead to race conditions or incorrect data.",
        tag: "javascript",
        difficulty: "Medium",
        code: `async function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve("Data fetched!"), 500));
}

async function process() {
    const data = fetchData(); // Forgot to await the promise
    console.log(data); // This will log the Promise object, not the resolved value "Data fetched!"
}

process();`
    },
    // Hard
    {
        title: "Uncontrolled Recursion",
        description: "A recursive function without a proper base case, leading to a stack overflow.",
        tag: "javascript",
        difficulty: "Hard",
        code: `function countDown(number) {
  console.log(number);
  // The base case is missing, so it will count down indefinitely.
  countDown(number - 1);
}

countDown(5);`
    },
    {
        title: "State Mutation in React",
        description: "Directly mutating state in React doesn't trigger re-renders and is an anti-pattern.",
        tag: "react",
        difficulty: "Hard",
        code: `import { useState } from 'react';

function Counter() {
  const [user, setUser] = useState({ name: 'Bob', age: 30 });

  function handleAgeIncrease() {
    // This is a direct mutation. React won't detect this change.
    user.age += 1;
    setUser(user); // The object reference is the same, so no re-render
    console.log(user.age);
  }

  return (
    <div>
      <p>{user.name} is {user.age} years old.</p>
      <button onClick={handleAgeIncrease}>Get Older</button>
    </div>
  );
}`
    },
    // Heavy Hard
    {
        title: "Race Condition with Closures",
        description: "A subtle race condition where multiple async operations close over the same loop variable.",
        tag: "javascript",
        difficulty: "Heavy Hard",
        code: `// Goal: Log 0, 1, 2, 3, 4 each after a delay.
// Problem: By the time setTimeout callbacks run, the loop has finished and 'i' is 5.
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // Logs '5' five times.
  }, i * 100);
}

// How would you fix this to log 0, 1, 2, 3, 4?`
    },
    {
        title: "Floating Point Imprecision",
        description: "A classic computer science problem where floating point math leads to unexpected results.",
        tag: "javascript",
        difficulty: "Heavy Hard",
        code: `const value1 = 0.1;
const value2 = 0.2;
const result = value1 + value2;

console.log(result); // Outputs 0.30000000000000004
console.log(result === 0.3); // Outputs false

// Why does this happen and how can you reliably compare floating point numbers?`
    }
];


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
    const [code, setCode] = useState('// Click an example on the left to load it here');
    const [output, setOutput] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [isExplaining, setIsExplaining] = useState(false);
    const [activeTab, setActiveTab] = useState("editor");
    const workerRef = useRef<Worker | null>(null);

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

    const handleExampleClick = (exampleCode: string) => {
        setCode(exampleCode);
        setOutput("");
        setSuggestion("");
        setActiveTab("editor");
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
                <h2 className="text-xl font-bold flex items-center gap-2"><FileCode className="h-5 w-5" /> {t('error_examples')}</h2>
                {buggyCodeExamples.map((example, index) => (
                    <Card key={index} className="cursor-pointer hover:border-primary" onClick={() => handleExampleClick(example.code)}>
                        <CardHeader>
                            <div className="flex justify-between items-start gap-2">
                                <CardTitle className="text-lg">{example.title}</CardTitle>
                                <Badge variant={
                                    example.difficulty === 'Easy' ? 'secondary' :
                                    example.difficulty === 'Medium' ? 'outline' :
                                    example.difficulty === 'Hard' ? 'default' :
                                    'destructive'
                                }>{example.difficulty}</Badge>
                            </div>
                            <CardDescription>{example.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Badge variant="outline">{example.tag}</Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <CardTitle className="text-xl flex items-center gap-2"><Code className="h-5 w-5" /> {t('interactive_code_editor')}</CardTitle>
                             <div className="flex items-center gap-2">
                                <Select defaultValue="javascript">
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
