
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { generateLanguageTopics } from '@/ai/flows/generate-language-topics';
import { 
    addLanguageSummary, 
    addLanguageCurriculum,
    deleteLanguageSummary,
    deleteLanguageCurriculum,
    addTopic,
} from '@/services/languageService';
import type { LanguageSummary, LanguageCurriculum } from '@/lib/mock-data';

const languageSchema = z.object({
    name: z.string().min(1, "Name is required."),
    icon: z.string().url("Must be a valid URL."),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    topicCount: z.coerce.number().min(3).max(10),
});

export async function addLanguageAction(formData: FormData) {
    const validatedFields = languageSchema.safeParse({
        name: formData.get('name'),
        icon: formData.get('icon'),
        difficulty: formData.get('difficulty'),
        topicCount: formData.get('topicCount'),
    });

    if (!validatedFields.success) {
        const fieldErrors = validatedFields.error.flatten().fieldErrors;
        const firstError = Object.values(fieldErrors)[0]?.[0] || "Invalid input. Please check the form.";
        return {
            error: firstError,
        };
    }

    const { name, icon, difficulty, topicCount } = validatedFields.data;
    const languageId = name.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '');

    try {
        const aiResult = await generateLanguageTopics({ 
            languageName: name,
            topicCount: topicCount,
        });

        if (!aiResult || !aiResult.topics) {
            throw new Error("AI topic generation failed.");
        }

        const newLanguageSummary: LanguageSummary = {
            id: languageId,
            name,
            icon,
            difficulty,
            topics: aiResult.topics.length,
            lessons: 0,
            popularity: 0,
        };
        
        const newLanguageCurriculum: LanguageCurriculum = {
            name: newLanguageSummary.name,
            topics: aiResult.topics.map((t, index) => ({
                id: `t-${languageId}-${index}`,
                title: t.title,
                lessons: []
            }))
        };
        
        await addLanguageSummary(newLanguageSummary);
        await addLanguageCurriculum(languageId, newLanguageCurriculum);

        revalidatePath('/admin/languages');
        revalidatePath('/languages');
        
        return {
            success: true,
            message: `${name} was added with ${aiResult.topics.length} starter topics.`,
        }

    } catch (error) {
        console.error("Failed to add language:", error);
        return {
            error: "Could not save the language. AI topic generation failed.",
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
        return { success: true };
    } catch (error) {
        console.error("Failed to delete language:", error);
        return { error: "An unexpected error occurred." };
    }
}

const generateTopicsSchema = z.object({
    langId: z.string(),
    languageName: z.string(),
    topicCount: z.coerce.number().min(1).max(10),
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
