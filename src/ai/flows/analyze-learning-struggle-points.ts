'use server';
/**
 * @fileOverview AI-powered analysis of user learning struggle points.
 *
 * - analyzeLearningStrugglePoints - Analyzes user completion rates to identify common struggle points in learning materials.
 * - AnalyzeLearningStrugglePointsInput - The input type for the analyzeLearningStrugglePoints function.
 * - AnalyzeLearningStrugglePointsOutput - The return type for the analyzeLearningStrugglePoints function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeLearningStrugglePointsInputSchema = z.object({
  completionRateData: z
    .string()
    .describe(
      'A CSV string containing user completion rates for each lesson, with columns lessonId and completionRate.'
    ),
  lessonContentData: z
    .string()
    .describe(
      'A CSV string containing lesson content for each lesson, with columns lessonId and content.'
    ),
});
export type AnalyzeLearningStrugglePointsInput = z.infer<
  typeof AnalyzeLearningStrugglePointsInputSchema
>;

const AnalyzeLearningStrugglePointsOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A summary of the analysis, highlighting the most common struggle points and suggesting areas for content improvement.'
    ),
  detailedAnalysis: z
    .string()
    .describe(
      'A detailed analysis of each lesson, identifying specific issues and providing recommendations.'
    ),
});
export type AnalyzeLearningStrugglePointsOutput = z.infer<
  typeof AnalyzeLearningStrugglePointsOutputSchema
>;

export async function analyzeLearningStrugglePoints(
  input: AnalyzeLearningStrugglePointsInput
): Promise<AnalyzeLearningStrugglePointsOutput> {
  return analyzeLearningStrugglePointsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeLearningStrugglePointsPrompt',
  input: {schema: AnalyzeLearningStrugglePointsInputSchema},
  output: {schema: AnalyzeLearningStrugglePointsOutputSchema},
  prompt: `You are an AI assistant that analyzes user learning data to identify struggle points in educational content.

You will receive two CSV strings: completionRateData and lessonContentData.
completionRateData contains lessonId and completionRate for each lesson.
lessonContentData contains lessonId and content for each lesson.

Your task is to analyze this data and identify lessons with low completion rates, and then analyze the content of those lessons to identify common themes or issues that may be causing users to struggle.  Explain why the completion rates may be low based on the content.

Provide a summary of the analysis, highlighting the most common struggle points and suggesting areas for content improvement.
Also provide a detailed analysis of each lesson, identifying specific issues and providing recommendations.

Here is the completion rate data:
{{{completionRateData}}}

Here is the lesson content data:
{{{lessonContentData}}}
`,
});

const analyzeLearningStrugglePointsFlow = ai.defineFlow(
  {
    name: 'analyzeLearningStrugglePointsFlow',
    inputSchema: AnalyzeLearningStrugglePointsInputSchema,
    outputSchema: AnalyzeLearningStrugglePointsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
