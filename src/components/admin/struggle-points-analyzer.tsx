"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { analyzeLearningStrugglePoints } from '@/ai/flows/analyze-learning-struggle-points';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  completionRateData: z.string().min(1, "Completion rate data is required."),
  lessonContentData: z.string().min(1, "Lesson content data is required."),
});

const defaultCompletionData = `lessonId,completionRate
1,0.95
2,0.92
3,0.88
4,0.82
5,0.75
6,0.70
7,0.60
8,0.45`;
const defaultContentData = `lessonId,content
1,"Introduction to Variables"
2,"Understanding Data Types"
3,"Working with Operators"
4,"Conditional Statements: if-else"
5,"Mastering Loops: for, while"
6,"Creating and using Functions"
7,"Basics of Object-Oriented Programming"
8,"Introduction to Data Structures and Algorithms"`;

export function StrugglePointsAnalyzer() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<{ summary: string; detailedAnalysis: string } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      completionRateData: defaultCompletionData,
      lessonContentData: defaultContentData,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzeLearningStrugglePoints(values);
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      setAnalysis({ summary: "Analysis Failed", detailedAnalysis: "Could not analyze data. Please check the console for errors." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="col-span-1 lg:col-span-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Struggle Points Analysis</CardTitle>
            <CardDescription>
              Analyze learning data to find where users struggle most. Provide data as CSV.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="completionRateData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Completion Rate Data</FormLabel>
                    <FormControl>
                      <Textarea rows={8} placeholder="lessonId,completionRate..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lessonContentData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lesson Content Data</FormLabel>
                    <FormControl>
                      <Textarea rows={8} placeholder="lessonId,content..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {analysis && (
              <div className="space-y-4 pt-4">
                <div className="p-4 bg-muted rounded-md border">
                    <h4 className="font-headline text-lg font-semibold mb-2">Analysis Summary</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">{analysis.summary}</p>
                </div>
                 <div className="p-4 bg-muted rounded-md border">
                    <h4 className="font-headline text-lg font-semibold mb-2">Detailed Analysis</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">{analysis.detailedAnalysis}</p>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Analyze Struggle Points
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
