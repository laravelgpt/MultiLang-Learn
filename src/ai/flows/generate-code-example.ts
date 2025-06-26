'use server';
/**
 * @fileOverview An AI-powered tool to generate code examples with common errors.
 *
 * - generateCodeExample - A function that takes a language, topic, and difficulty and returns a code example.
 * - GenerateCodeExampleInput - The input type for the generateCodeExample function.
 * - GenerateCodeExampleOutput - The return type for the generateCodeExample function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCodeExampleInputSchema = z.object({
  language: z.string().describe('The programming language for the code example (e.g., JavaScript, Python).'),
  difficulty: z.string().describe("The difficulty level of the error in the code ('Easy', 'Medium', 'Hard', 'Heavy Hard')."),
  topic: z.string().describe("The specific programming topic or concept for the code example."),
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
  prompt: `You are an expert programming instructor who creates educational code examples with deliberate errors.
Your task is to generate a code snippet in '{{language}}' about the topic of '{{topic}}'.
The code **absolutely must contain one single, common, non-obvious error** corresponding to a '{{difficulty}}' difficulty level.

It is critical that the code has an error. The code should look correct at a glance but produce an incorrect result or a runtime error when executed.
Do not add any comments explaining the error in the code itself. The purpose is for the user to find and fix it.
The error should be something a learner at the specified difficulty level could reasonably be expected to identify and fix.

Difficulty Guide:
- Easy: Simple syntax errors (e.g., missing parenthesis, typo in a variable name, incorrect operator).
- Medium: Common logical errors (e.g., off-by-one, incorrect loop condition, misunderstanding 'this' context, scope issues).
- Hard: More complex logical errors (e.g., uncontrolled recursion, mutation of state in functional contexts, incorrect asynchronous logic).
- Heavy Hard: Subtle, advanced errors (e.g., race conditions, floating point imprecision, closure issues in loops, memory leaks).

Generate a code example for '{{language}}' on the topic '{{topic}}' with a '{{difficulty}}' level error.
Provide a concise title and a one-sentence description for the example that are relevant to the topic.`,
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
