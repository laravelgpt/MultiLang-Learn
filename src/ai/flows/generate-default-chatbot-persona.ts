'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a default chatbot persona from a prompt.
 *
 * The flow takes a prompt as input and returns a generated chatbot persona.
 * - generateDefaultChatbotPersona - A function that handles the chatbot persona generation process.
 * - GenerateDefaultChatbotPersonaInput - The input type for the generateDefaultChatbotPersona function.
 * - GenerateDefaultChatbotPersonaOutput - The return type for the generateDefaultChatbotPersona function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDefaultChatbotPersonaInputSchema = z.object({
  prompt: z.string().describe('The prompt to use to generate the chatbot persona.'),
});
export type GenerateDefaultChatbotPersonaInput = z.infer<typeof GenerateDefaultChatbotPersonaInputSchema>;

const GenerateDefaultChatbotPersonaOutputSchema = z.object({
  persona: z.string().describe('The generated chatbot persona.'),
});
export type GenerateDefaultChatbotPersonaOutput = z.infer<typeof GenerateDefaultChatbotPersonaOutputSchema>;

export async function generateDefaultChatbotPersona(input: GenerateDefaultChatbotPersonaInput): Promise<GenerateDefaultChatbotPersonaOutput> {
  return generateDefaultChatbotPersonaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDefaultChatbotPersonaPrompt',
  input: {schema: GenerateDefaultChatbotPersonaInputSchema},
  output: {schema: GenerateDefaultChatbotPersonaOutputSchema},
  prompt: `You are an expert chatbot persona generator. Please take the following prompt and generate a chatbot persona. Prompt: {{{prompt}}}`,
});

const generateDefaultChatbotPersonaFlow = ai.defineFlow(
  {
    name: 'generateDefaultChatbotPersonaFlow',
    inputSchema: GenerateDefaultChatbotPersonaInputSchema,
    outputSchema: GenerateDefaultChatbotPersonaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
