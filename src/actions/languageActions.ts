
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { generateLanguageTopics } from '@/ai/flows/generate-language-topics';
import { generateQuickQuestions } from '@/ai/flows/generate-quick-questions';
import { generateLessonsForTopic } from '@/ai/flows/generate-lessons-for-topic';
import { 
    addLanguageSummary, 
    addLanguageCurriculum,
    deleteLanguageSummary,
    deleteLanguageCurriculum,
    addTopic,
    addQuickQuestions,
} from '@/services/languageService';
import type { LanguageSummary, LanguageCurriculum, Lesson } from '@/lib/mock-data';

const languageSchema = z.object({
    name: z.string().min(1, "Name is required."),
    icon: z.string().url("Must be a valid URL."),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    topicCount: z.coerce.number().min(10).max(20),
    lessonCount: z.coerce.number().min(10).max(100),
    quickQuestionsCount: z.coerce.number().min(10).max(100),
});

export async function addLanguageAction(formData: FormData) {
    const validatedFields = languageSchema.safeParse({
        name: formData.get('name'),
        icon: formData.get('icon'),
        difficulty: formData.get('difficulty'),
        topicCount: formData.get('topicCount'),
        lessonCount: formData.get('lessonCount'),
        quickQuestionsCount: formData.get('quickQuestionsCount'),
    });

    if (!validatedFields.success) {
        const fieldErrors = validatedFields.error.flatten().fieldErrors;
        const firstError = Object.values(fieldErrors)[0]?.[0] || "Invalid input. Please check the form.";
        return {
            error: firstError,
        };
    }

    const { name, icon, difficulty, topicCount, lessonCount, quickQuestionsCount } = validatedFields.data;
    const languageId = name.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '');

    try {
        const [topicResults, quickQuestionResults] = await Promise.all([
            generateLanguageTopics({ languageName: name, topicCount }),
            generateQuickQuestions({ languageName: name, count: quickQuestionsCount })
        ]);

        if (!topicResults || !topicResults.topics) {
            throw new Error("AI topic generation failed.");
        }

        if (!quickQuestionResults || !quickQuestionResults.questions) {
            throw new Error("AI quick question generation failed.");
        }
        
        const topicsWithLessons = await Promise.all(
            topicResults.topics.map(async (topic, topicIndex) => {
                const lessonResults = await generateLessonsForTopic({
                    languageName: name,
                    topicTitle: topic.title,
                    lessonCount: lessonCount,
                });

                if (!lessonResults || !lessonResults.lessons) {
                    throw new Error(`AI lesson generation failed for topic: "${topic.title}".`);
                }

                const lessons: Lesson[] = lessonResults.lessons.map((l, lessonIndex) => ({
                    id: `l-${languageId}-${topicIndex}-${lessonIndex}`,
                    title: l.title,
                    difficulty: l.difficulty,
                    content: l.content,
                    codeSnippet: l.codeSnippet,
                    attachments: [],
                }));

                return {
                    id: `t-${languageId}-${topicIndex}`,
                    title: topic.title,
                    lessons: lessons,
                };
            })
        );
        
        const totalLessons = topicsWithLessons.reduce((sum, topic) => sum + topic.lessons.length, 0);

        const newLanguageSummary: LanguageSummary = {
            id: languageId,
            name,
            icon,
            difficulty,
            topics: topicsWithLessons.length,
            lessons: totalLessons,
            popularity: 0,
            description: `A ${difficulty}-level programming language.`,
            progress: 0,
        };
        
        const newLanguageCurriculum: LanguageCurriculum = {
            name: newLanguageSummary.name,
            topics: topicsWithLessons
        };
        
        await addLanguageSummary(newLanguageSummary);
        await addLanguageCurriculum(languageId, newLanguageCurriculum);
        await addQuickQuestions(languageId, quickQuestionResults.questions);

        revalidatePath('/admin/languages');
        revalidatePath('/languages');
        revalidatePath('/dashboard');
        revalidatePath('/ai-assistant');
        
        return {
            success: true,
            message: `${name} was added with ${topicsWithLessons.length} topics, ${totalLessons} lessons, and ${quickQuestionResults.questions.length} quick questions.`,
        }

    } catch (error) {
        console.error("Failed to add language:", error);
        const errorMessage = error instanceof Error ? error.message : "AI generation failed.";
        return {
            error: `Could not save the language. ${errorMessage}`,
        };
    }
}

export async function deleteLanguageAction(langId: string) {
    if (!langId) {
        return { error: "Language ID is required." };
    }

    try {
        await deleteLanguageSummary(langId);
        await deleteLanguageCurriculum(langId);
        revalidatePath('/admin/languages');
        revalidatePath('/languages');
        revalidatePath('/dashboard');
        return { success: true };
    } catch (error) {
        console.error("Failed to delete language:", error);
        return { error: "An unexpected error occurred." };
    }
}

const generateTopicsSchema = z.object({
    langId: z.string(),
    languageName: z.string(),
    topicCount: z.coerce.number().min(10).max(20),
});

export async function generateTopicsAction(formData: FormData) {
    const validatedFields = generateTopicsSchema.safeParse({
        langId: formData.get('langId'),
        languageName: formData.get('languageName'),
        topicCount: formData.get('topicCount'),
    });

    if (!validatedFields.success) {
        return { error: "Invalid input." };
    }

    const { langId, languageName, topicCount } = validatedFields.data;

    try {
        const aiResult = await generateLanguageTopics({ 
            languageName,
            topicCount,
        });

        if (!aiResult || !aiResult.topics) {
            throw new Error("AI topic generation failed.");
        }

        for (const topic of aiResult.topics) {
            await addTopic(langId, { title: topic.title });
        }

        revalidatePath(`/admin/languages/${langId}`);
        revalidatePath('/admin/languages');
        revalidatePath('/dashboard');
        
        return {
            success: true,
            message: `${aiResult.topics.length} topics were generated for ${languageName}.`,
        }

    } catch (error) {
        console.error("Failed to generate topics:", error);
        return {
            error: "Could not generate topics for the language.",
        };
    }
}
