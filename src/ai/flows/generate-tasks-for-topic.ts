'use server';
/**
 * @fileOverview An AI-powered tool to generate a learning plan for a specific topic.
 *
 * - generateTasksForTopic - A function that takes a topic and returns a list of tasks.
 * - GenerateTasksForTopicInput - The input type for the generateTasksForTopic function.
 * - GenerateTasksForTopicOutput - The return type for the generateTasksForTopic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTasksForTopicInputSchema = z.object({
  topic: z.string().describe('The learning topic to generate tasks for.'),
});
export type GenerateTasksForTopicInput = z.infer<typeof GenerateTasksForTopicInputSchema>;

const TaskSchema = z.object({
    title: z.string().describe("A concise title for the task."),
    description: z.string().describe("A brief, one-sentence description of the task."),
    tags: z.array(z.string()).describe("A list of relevant tags for the task (e.g., Learning, Project, Reading)."),
});

const GenerateTasksForTopicOutputSchema = z.object({
    tasks: z.array(TaskSchema).describe("An array of tasks for a learning plan."),
});
export type GenerateTasksForTopicOutput = z.infer<typeof GenerateTasksForTopicOutputSchema>;

export async function generateTasksForTopic(input: GenerateTasksForTopicInput): Promise<GenerateTasksForTopicOutput> {
  return generateTasksForTopicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTasksForTopicPrompt',
  input: {schema: GenerateTasksForTopicInputSchema},
  output: {schema: GenerateTasksForTopicOutputSchema},
  prompt: `You are an expert curriculum designer who creates actionable learning plans.
A user wants to learn about the following topic: "{{topic}}".

Your task is to break this topic down into a series of 3-5 manageable tasks that could be put on a Kanban board.
For each task, provide a clear title, a short description, and a few relevant tags.
The tags should be simple, like 'Learning', 'Project', 'Reading', 'Practice', etc.
The tasks should be structured to guide a beginner through the topic logically.
`,
});

const generateTasksForTopicFlow = ai.defineFlow(
  {
    name: 'generateTasksForTopicFlow',
    inputSchema: GenerateTasksForTopicInputSchema,
    outputSchema: GenerateTasksForTopicOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
