'use server';
/**
 * @fileOverview A Genkit tool to fetch the curriculum for a given language.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {getLanguageCurriculum} from '@/services/languageService';
import {languageNameMap} from '@/lib/language-map';

export const getCurriculumForLanguage = ai.defineTool(
  {
    name: 'getCurriculumForLanguage',
    description:
      'Gets the available curriculum (a list of topic titles) for a given programming language. Use this tool to answer questions about what to learn, what topics are available, or to suggest a learning path for a specific language.',
    inputSchema: z.object({
      language: z
        .string()
        .describe(
          'The programming language to get the curriculum for. This should be the full name, e.g., "JavaScript", "Python".'
        ),
    }),
    outputSchema: z.object({
      topics: z
        .array(z.string())
        .describe(
          'A list of topic titles available for the language. Returns an empty array if the language or curriculum is not found.'
        ),
    }),
  },
  async ({language}) => {
    const langId = Object.keys(languageNameMap).find(
      key => languageNameMap[key].toLowerCase() === language.toLowerCase()
    );

    if (!langId) {
      return {topics: []};
    }
    const curriculum = await getLanguageCurriculum(langId);
    if (!curriculum) {
      return {topics: []};
    }
    return {
      topics: curriculum.topics.map(t => t.title),
    };
  }
);
