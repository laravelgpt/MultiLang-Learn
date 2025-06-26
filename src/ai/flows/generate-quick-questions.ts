
'use server';
/**
 * @fileOverview An AI-powered tool to generate quick questions for a programming language.
 *
 * - generateQuickQuestions - A function that takes a language name and returns a list of questions.
 * - GenerateQuickQuestionsInput - The input type for the generateQuickQuestions function.
 * - GenerateQuickQuestionsOutput - The return type for the generateQuickQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuickQuestionsInputSchema = z.object({
  languageName: z.string().describe('The name of the programming language.'),
  count: z.number().describe('The number of questions to generate.'),
});
export type GenerateQuickQuestionsInput = z.infer<typeof GenerateQuickQuestionsInputSchema>;

const GenerateQuickQuestionsOutputSchema = z.object({
  questions: z.array(z.string()).describe("An array of common questions about the specified programming language."),
});
export type GenerateQuickQuestionsOutput = z.infer<typeof GenerateQuickQuestionsOutputSchema>;

export async function generateQuickQuestions(input: GenerateQuickQuestionsInput): Promise<GenerateQuickQuestionsOutput> {
  return generateQuickQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateQuickQuestionsPrompt',
  input: {schema: GenerateQuickQuestionsInputSchema},
  output: {schema: GenerateQuickQuestionsOutputSchema},
  prompt: `You are an expert programming curriculum designer.
Generate exactly {{count}} common, insightful "quick questions" a beginner or intermediate learner might ask about the programming language "{{languageName}}".

The questions should be concise, under 15 words, and suitable for buttons in a chat interface. Do not add any introductory text or apologies. Just provide the questions.`,
});

const generateQuickQuestionsFlow = ai.defineFlow(
  {
    name: 'generateQuickQuestionsFlow',
    inputSchema: GenerateQuickQuestionsInputSchema,
    outputSchema: GenerateQuickQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
