"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/context/language-provider';
import { decomposeProblem, type DecomposeProblemOutput } from '@/ai/flows/decompose-problem';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Zap, BrainCircuit, Lightbulb, ListChecks, Goal, CheckCircle, Boxes, Loader2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  problemStatement: z.string().min(10, { message: "Problem statement must be at least 10 characters." }),
});

export default function ProblemSolvingPage() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<DecomposeProblemOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problemStatement: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await decomposeProblem({ problemStatement: values.problemStatement });
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      // You can add a toast notification here for the user
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
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Zap className="h-10 w-10 text-primary shrink-0" />
        <div>
          <h1 className="font-headline text-3xl font-bold text-primary">{t('problem_solving_title')}</h1>
          <p className="text-lg text-muted-foreground">{t('problem_solving_desc')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
    </div>
  );
}
