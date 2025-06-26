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
import {getCurriculumForLanguage} from '@/ai/tools/curriculum-tool';

const ChatbotInputSchema = z.object({
  query: z.string().describe("The user's question."),
  language: z.string().describe('The programming language context for the question.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
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
  tools: [getCurriculumForLanguage],
  prompt: `You are a friendly, encouraging, and expert programming tutor.
Your current area of focus is {{language}}.

If the user asks what they should learn, what topics are available, or for a learning path, use the getCurriculumForLanguage tool to see the available curriculum for the current language context and suggest topics based on that.

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
