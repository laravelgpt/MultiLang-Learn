'use server';
/**
 * @fileOverview An AI-powered tool to decompose complex problems into manageable steps.
 *
 * - decomposeProblem - A function that takes a problem statement and returns a structured breakdown.
 * - DecomposeProblemInput - The input type for the decomposeProblem function.
 * - DecomposeProblemOutput - The return type for the decomposeProblem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DecomposeProblemInputSchema = z.object({
  problemStatement: z.string().describe('The problem statement to be decomposed.'),
});
export type DecomposeProblemInput = z.infer<typeof DecomposeProblemInputSchema>;

const DecomposeProblemOutputSchema = z.object({
  inputs: z.string().describe('What are the expected inputs for the problem?'),
  outputs: z.string().describe('What is the expected output after solving the problem?'),
  constraints: z.string().describe('What are the constraints or edge cases to consider?'),
  stepByStepPlan: z.array(z.string()).describe('A step-by-step plan to solve the problem, as a list of strings.'),
  dataStructures: z.string().describe('What data structures would be suitable for solving this problem and why?'),
});
export type DecomposeProblemOutput = z.infer<typeof DecomposeProblemOutputSchema>;

export async function decomposeProblem(input: DecomposeProblemInput): Promise<DecomposeProblemOutput> {
  return decomposeProblemFlow(input);
}

const prompt = ai.definePrompt({
  name: 'decomposeProblemPrompt',
  input: {schema: DecomposeProblemInputSchema},
  output: {schema: DecomposeProblemOutputSchema},
  prompt: `You are an expert software engineer who excels at breaking down complex problems for beginners.
A user has provided the following problem statement. Your task is to decompose it into a structured plan.

Problem Statement:
"{{{problemStatement}}}"

Please provide a clear and concise breakdown of this problem by filling out the following fields:
- **inputs**: Describe the expected inputs.
- **outputs**: Describe the desired output.
- **constraints**: List any constraints, assumptions, or edge cases.
- **stepByStepPlan**: Provide a step-by-step, high-level plan to solve the problem. Each step should be a clear action.
- **dataStructures**: Suggest appropriate data structures and briefly explain why they are suitable.
`,
});

const decomposeProblemFlow = ai.defineFlow(
  {
    name: 'decomposeProblemFlow',
    inputSchema: DecomposeProblemInputSchema,
    outputSchema: DecomposeProblemOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
