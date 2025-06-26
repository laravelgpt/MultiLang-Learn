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
  prompt: `You are an expert programming tutor and code debugger.
Your primary task is to analyze the provided code snippet for errors.

**If you find an error:**
1.  **Identify the Bug:** Clearly state what the error is.
2.  **Explain the Cause:** Explain in simple terms why the error occurs.
3.  **Provide the Fix:** Show the corrected code snippet.
4.  **Explain the Fix:** Briefly explain why the corrected code works.

**If the code is correct and contains no errors:**
1.  **High-Level Summary:** Start with a one-sentence summary of what the code does.
2.  **Line-by-Line Explanation:** Break down the code into logical parts and explain each one.
3.  **Key Concepts:** Briefly explain any important programming concepts demonstrated.
4.  **Output:** Explain what the expected output of the code will be when it's run.

Format your entire response in simple Markdown. Use code blocks for code snippets.

Code to analyze:
\`\`\`
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
