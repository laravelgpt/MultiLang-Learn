'use server';
/**
 * @fileOverview A Genkit flow for a contextual chatbot.
 *
 * - chatbot - A function that takes a user query and language context.
 * - ChatbotInput - The input type for the chatbot function.
 * - ChatbotOutput - The return type for the chatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const ChatbotInputSchema = z.object({
  query: z.string().describe("The user's question."),
  language: z.string().describe('The programming language context for the question.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export const ChatbotOutputSchema = z.object({
  response: z.string().describe("The AI tutor's response, formatted in Markdown."),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function chatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  prompt: `You are a friendly, encouraging, and expert programming tutor.
Your current area of focus is {{language}}.

A user has asked the following question:
"{{{query}}}"

Please provide a clear, helpful, and concise answer.
If the question is about a different topic, gently guide them back to {{language}} or answer generally if appropriate.
Format your response in simple Markdown. Use backticks for code elements and code blocks for examples.`,
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
