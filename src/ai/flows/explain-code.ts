'use server';
/**
 * @fileOverview A Genkit flow for explaining code snippets.
 *
 * - explainCode - A function that takes a code snippet and returns an explanation.
 * - ExplainCodeInput - The input type for the explainCode function.
 * - ExplainCodeOutput - The return type for the explainCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainCodeInputSchema = z.object({
  code: z.string().describe('The code snippet to be explained.'),
});
export type ExplainCodeInput = z.infer<typeof ExplainCodeInputSchema>;

const ExplainCodeOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of the code, formatted in Markdown.'),
});
export type ExplainCodeOutput = z.infer<typeof ExplainCodeOutputSchema>;

export async function explainCode(input: ExplainCodeInput): Promise<ExplainCodeOutput> {
  return explainCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainCodePrompt',
  input: {schema: ExplainCodeInputSchema},
  output: {schema: ExplainCodeOutputSchema},
  prompt: `You are an expert programming tutor who is friendly and encouraging.
Your task is to explain the provided code snippet to a beginner.

Follow these steps:
1.  **High-Level Summary:** Start with a one-sentence summary of what the code does.
2.  **Line-by-Line or Block-by-Block Explanation:** Break down the code into logical parts and explain each one. Use simple language.
3.  **Key Concepts:** Briefly explain any important programming concepts demonstrated in the code (e.g., variables, functions, loops, scope).
4.  **Potential Improvements (Optional):** If applicable, gently suggest one or two ways the code could be improved or written differently, explaining the benefits.
5.  **Output:** Explain what the expected output of the code will be when it's run.

Format your entire response in simple Markdown. Use bullet points for lists and backticks for code elements.

Code to explain:
\`\`\`javascript
{{{code}}}
\`\`\`
`,
});

const explainCodeFlow = ai.defineFlow(
  {
    name: 'explainCodeFlow',
    inputSchema: ExplainCodeInputSchema,
    outputSchema: ExplainCodeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
