
'use server';
/**
 * @fileOverview An AI-powered tool to generate lesson plans for a specific topic.
 *
 * - generateLessonsForTopic - A function that takes a topic and returns a list of lessons.
 * - GenerateLessonsForTopicInput - The input type for the generateLessonsForTopic function.
 * - GenerateLessonsForTopicOutput - The return type for the generateLessonsForTopic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLessonsForTopicInputSchema = z.object({
  languageName: z.string().describe('The programming language of the topic.'),
  topicTitle: z.string().describe('The learning topic to generate lessons for.'),
  lessonCount: z.number().describe('The number of lessons to generate for the topic.'),
});
export type GenerateLessonsForTopicInput = z.infer<typeof GenerateLessonsForTopicInputSchema>;

const LessonSchema = z.object({
    title: z.string().describe("A concise title for the lesson."),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).describe("The difficulty of the lesson."),
    content: z.string().describe("A short, introductory paragraph for the lesson content."),
    codeSnippet: z.string().optional().describe("A relevant code snippet for the lesson. Must be in the correct language.")
});

const GenerateLessonsForTopicOutputSchema = z.object({
    lessons: z.array(LessonSchema).describe("An array of lessons for the topic."),
});
export type GenerateLessonsForTopicOutput = z.infer<typeof GenerateLessonsForTopicOutputSchema>;

export async function generateLessonsForTopic(input: GenerateLessonsForTopicInput): Promise<GenerateLessonsForTopicOutput> {
  return generateLessonsForTopicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLessonsForTopicPrompt',
  input: {schema: GenerateLessonsForTopicInputSchema},
  output: {schema: GenerateLessonsForTopicOutputSchema},
  prompt: `You are an expert curriculum designer for software engineering.
A user wants to create a curriculum for the topic "{{topicTitle}}" in the programming language "{{languageName}}".

Your task is to generate exactly {{lessonCount}} lesson ideas for this topic.
For each lesson, provide a clear title, a difficulty level ('Beginner', 'Intermediate', or 'Advanced'), a short introductory paragraph for the lesson content, and a relevant code snippet in {{languageName}}.
The lessons should be structured to guide a learner through the topic logically, starting from easier concepts and moving to more complex ones.
`,
});

const generateLessonsForTopicFlow = ai.defineFlow(
  {
    name: 'generateLessonsForTopicFlow',
    inputSchema: GenerateLessonsForTopicInputSchema,
    outputSchema: GenerateLessonsForTopicOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
