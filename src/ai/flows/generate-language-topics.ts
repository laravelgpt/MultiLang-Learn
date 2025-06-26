'use server';
/**
 * @fileOverview An AI-powered tool to generate starter topics for a new programming language.
 *
 * - generateLanguageTopics - A function that takes a language name and returns a list of topics.
 * - GenerateLanguageTopicsInput - The input type for the generateLanguageTopics function.
 * - GenerateLanguageTopicsOutput - The return type for the generateLanguageTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLanguageTopicsInputSchema = z.object({
  languageName: z.string().describe('The name of the programming language.'),
});
export type GenerateLanguageTopicsInput = z.infer<typeof GenerateLanguageTopicsInputSchema>;

const TopicSchema = z.object({
    title: z.string().describe("The title of the topic."),
});

const GenerateLanguageTopicsOutputSchema = z.object({
    topics: z.array(TopicSchema).describe("An array of 5 to 7 introductory topic titles for the language."),
});
export type GenerateLanguageTopicsOutput = z.infer<typeof GenerateLanguageTopicsOutputSchema>;

export async function generateLanguageTopics(input: GenerateLanguageTopicsInput): Promise<GenerateLanguageTopicsOutput> {
  return generateLanguageTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLanguageTopicsPrompt',
  input: {schema: GenerateLanguageTopicsInputSchema},
  output: {schema: GenerateLanguageTopicsOutputSchema},
  prompt: `You are an expert curriculum designer for software engineering.
A user wants to add a new programming language to the platform: "{{languageName}}".

Your task is to generate a list of 5 to 7 essential, introductory topic titles for a beginner's curriculum in this language.
Focus on fundamental concepts that a new learner would need to get started.

For example, for Python, you might suggest:
- Introduction to Python
- Python Basics (Variables, Data Types)
- Control Flow (If/Else, Loops)
- Functions and Modules
- Data Structures (Lists, Dictionaries)

Generate the topics for "{{languageName}}".
`,
});

const generateLanguageTopicsFlow = ai.defineFlow(
  {
    name: 'generateLanguageTopicsFlow',
    inputSchema: GenerateLanguageTopicsInputSchema,
    outputSchema: GenerateLanguageTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
