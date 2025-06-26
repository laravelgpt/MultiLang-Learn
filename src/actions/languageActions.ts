
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
    updateTopic,
    deleteTopic,
    addLesson,
    updateLesson,
    deleteLesson,
    addQuickQuestions,
} from '@/services/languageService';
import type { LanguageSummary, LanguageCurriculum, Lesson, Topic } from '@/lib/mock-data';

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
        revalidatePath('/languages');
        revalidatePath(`/languages/${langId}`);
        
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

// Topic Actions
const topicSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(1, "Title is required."),
    langId: z.string(),
});
export async function saveTopicAction(formData: FormData) {
    const validatedFields = topicSchema.safeParse({
        id: formData.get('id'),
        title: formData.get('title'),
        langId: formData.get('langId'),
    });

    if (!validatedFields.success) {
        return { error: "Invalid input." };
    }

    const { id, title, langId } = validatedFields.data;

    try {
        if (id) {
            await updateTopic(langId, id, { title });
        } else {
            await addTopic(langId, { title });
        }
        revalidatePath(`/admin/languages/${langId}`);
        revalidatePath('/admin/languages');
        revalidatePath(`/languages/${langId}`);
        revalidatePath('/languages');
        revalidatePath('/dashboard');
        return { success: true, message: `Topic "${title}" saved.` };
    } catch (error) {
        return { error: "Failed to save topic." };
    }
}

export async function deleteTopicAction(langId: string, topicId: string) {
    try {
        await deleteTopic(langId, topicId);
        revalidatePath(`/admin/languages/${langId}`);
        revalidatePath('/admin/languages');
        revalidatePath(`/languages/${langId}`);
        revalidatePath('/languages');
        revalidatePath('/dashboard');
        return { success: true, message: "Topic deleted." };
    } catch (error) {
        return { error: "Failed to delete topic." };
    }
}

// Lesson Actions
const lessonSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(1, "Title is required."),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    langId: z.string(),
    topicId: z.string(),
    content: z.string().optional(),
    codeSnippet: z.string().optional(),
});
export async function saveLessonAction(formData: FormData) {
    const validatedFields = lessonSchema.safeParse({
        id: formData.get('id'),
        title: formData.get('title'),
        difficulty: formData.get('difficulty'),
        langId: formData.get('langId'),
        topicId: formData.get('topicId'),
        content: formData.get('content'),
        codeSnippet: formData.get('codeSnippet'),
    });

    if (!validatedFields.success) {
        return { error: "Invalid input." };
    }

    const { id, langId, topicId, ...lessonData } = validatedFields.data;

    try {
        if (id) {
            await updateLesson(langId, topicId, id, lessonData);
        } else {
            await addLesson(langId, topicId, lessonData);
        }
        revalidatePath(`/admin/languages/${langId}`);
        revalidatePath(`/languages/${langId}`);
        revalidatePath('/admin/languages');
        revalidatePath('/dashboard');
        return { success: true, message: `Lesson "${lessonData.title}" saved.` };
    } catch (error) {
        return { error: "Failed to save lesson." };
    }
}

export async function deleteLessonAction(langId: string, topicId: string, lessonId: string) {
    try {
        await deleteLesson(langId, topicId, lessonId);
        revalidatePath(`/admin/languages/${langId}`);
        revalidatePath(`/languages/${langId}`);
        revalidatePath('/admin/languages');
        revalidatePath('/dashboard');
        return { success: true, message: "Lesson deleted." };
    } catch (error) {
        return { error: "Failed to delete lesson." };
    }
}

// Quick Questions Actions
const quickQuestionsSchema = z.object({
  langId: z.string(),
  questions: z.string(),
});
export async function saveQuickQuestionsAction(formData: FormData) {
    const validatedFields = quickQuestionsSchema.safeParse({
        langId: formData.get('langId'),
        questions: formData.get('questions'),
    });

    if (!validatedFields.success) {
        return { error: "Invalid input." };
    }

    const { langId, questions } = validatedFields.data;
    const questionsArray = questions.split('\n').filter(q => q.trim() !== '');

    try {
        await addQuickQuestions(langId, questionsArray);
        revalidatePath(`/admin/languages/${langId}`);
        revalidatePath(`/ai-assistant`);
        return { success: true, message: 'Quick questions have been updated.' };
    } catch (error) {
        return { error: "Failed to save quick questions." };
    }
}
