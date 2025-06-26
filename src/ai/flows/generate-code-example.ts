'use server';
/**
 * @fileOverview An AI-powered tool to generate code examples with common errors.
 *
 * - generateCodeExample - A function that takes a language and difficulty and returns a code example.
 * - GenerateCodeExampleInput - The input type for the generateCodeExample function.
 * - GenerateCodeExampleOutput - The return type for the generateCodeExample function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCodeExampleInputSchema = z.object({
  language: z.string().describe('The programming language for the code example (e.g., JavaScript, Python).'),
  difficulty: z.string().describe("The difficulty level of the error in the code ('Easy', 'Medium', 'Hard', 'Heavy Hard')."),
});
export type GenerateCodeExampleInput = z.infer<typeof GenerateCodeExampleInputSchema>;

const GenerateCodeExampleOutputSchema = z.object({
  title: z.string().describe("A concise title for the code example."),
  description: z.string().describe("A brief, one-sentence description of the concept or error demonstrated."),
  code: z.string().describe("The code snippet containing a deliberate error appropriate for the specified language and difficulty."),
});
export type GenerateCodeExampleOutput = z.infer<typeof GenerateCodeExampleOutputSchema>;

export async function generateCodeExample(input: GenerateCodeExampleInput): Promise<GenerateCodeExampleOutput> {
  return generateCodeExampleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCodeExamplePrompt',
  input: {schema: GenerateCodeExampleInputSchema},
  output: {schema: GenerateCodeExampleOutputSchema},
  prompt: `You are an expert programming instructor who creates educational code examples.
Your task is to generate a code snippet in '{{language}}' that contains a common, non-obvious error corresponding to a '{{difficulty}}' difficulty level.

The code must be runnable but produce an incorrect result or a runtime error.
Do not add comments explaining the error in the code itself. The purpose is for the user to find and fix it.

Difficulty Guide:
- Easy: Simple syntax errors (e.g., missing parenthesis, typo in a variable name).
- Medium: Common logical errors (e.g., off-by-one, incorrect loop condition, misunderstanding 'this' context).
- Hard: More complex logical errors (e.g., uncontrolled recursion, mutation of state in functional contexts).
- Heavy Hard: Subtle, advanced errors (e.g., race conditions, floating point imprecision, closure issues in loops).

Generate a code example for the language '{{language}}' with '{{difficulty}}' difficulty.
Provide a title and a one-sentence description for the example.`,
});

const generateCodeExampleFlow = ai.defineFlow(
  {
    name: 'generateCodeExampleFlow',
    inputSchema: GenerateCodeExampleInputSchema,
    outputSchema: GenerateCodeExampleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
