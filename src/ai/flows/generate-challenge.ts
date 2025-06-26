'use server';
/**
 * @fileOverview An AI-powered tool to generate programming challenges.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateChallengeInputSchema = z.object({
  language: z.string().describe('The programming language for the challenge.'),
  topic: z.string().describe("The specific programming topic or concept for the challenge."),
  difficulty: z.string().describe("The difficulty level ('Easy', 'Medium', 'Hard')."),
});
export type GenerateChallengeInput = z.infer<typeof GenerateChallengeInputSchema>;

const GenerateChallengeOutputSchema = z.object({
  title: z.string().describe("A concise title for the challenge."),
  description: z.string().describe("A detailed description of the challenge, explaining the task, inputs, and expected outputs. Should be in Markdown format."),
});
export type GenerateChallengeOutput = z.infer<typeof GenerateChallengeOutputSchema>;

export async function generateChallenge(input: GenerateChallengeInput): Promise<GenerateChallengeOutput> {
  return generateChallengeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateChallengePrompt',
  input: {schema: GenerateChallengeInputSchema},
  output: {schema: GenerateChallengeOutputSchema},
  prompt: `You are an expert programming instructor who creates educational code challenges.
Your task is to generate a programming challenge for the language '{{language}}' on the topic of '{{topic}}' with a difficulty of '{{difficulty}}'.

The challenge should be a well-defined problem that a learner can solve.

Provide a concise title and a detailed description for the challenge.
The description should clearly explain:
1. The task to be accomplished.
2. The expected inputs.
3. The expected outputs.
4. Any constraints or edge cases.
Format the description in Markdown. Do not include boilerplate code or a solution.`,
});

const generateChallengeFlow = ai.defineFlow(
  {
    name: 'generateChallengeFlow',
    inputSchema: GenerateChallengeInputSchema,
    outputSchema: GenerateChallengeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
