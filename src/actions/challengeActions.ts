'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { addChallenge, updateChallenge, deleteChallenge } from '@/services/languageService';
import { generateChallenge } from '@/ai/flows/generate-challenge';

const challengeSchema = z.object({
    id: z.coerce.number().optional(),
    title: z.string().min(1, "Title is required."),
    description: z.string().min(1, "Description is required."),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    points: z.coerce.number().min(5),
    tests: z.coerce.number().min(1),
    language: z.string().min(1, "Language is required."),
    timeLimitMinutes: z.coerce.number().optional(),
});

export async function saveChallengeAction(formData: FormData) {
    const validatedFields = challengeSchema.safeParse({
        id: formData.get('id'),
        title: formData.get('title'),
        description: formData.get('description'),
        difficulty: formData.get('difficulty'),
        points: formData.get('points'),
        tests: formData.get('tests'),
        language: formData.get('language'),
        timeLimitMinutes: formData.get('timeLimitMinutes') || undefined,
    });

    if (!validatedFields.success) {
        return { error: "Invalid input." };
    }

    const { id, ...challengeData } = validatedFields.data;

    try {
        if (id) {
            await updateChallenge(id, challengeData);
        } else {
            await addChallenge(challengeData);
        }
        revalidatePath('/admin/challenges');
        revalidatePath('/challenges');
        return { success: true, message: `Challenge "${challengeData.title}" saved.` };
    } catch (error) {
        return { error: "Failed to save challenge." };
    }
}

export async function deleteChallengeAction(id: number) {
    try {
        await deleteChallenge(id);
        revalidatePath('/admin/challenges');
        revalidatePath('/challenges');
        return { success: true, message: "Challenge deleted." };
    } catch (error) {
        return { error: "Failed to delete challenge." };
    }
}

const generateChallengeSchema = z.object({
    language: z.string(),
    topic: z.string().min(1, "Topic is required."),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
});

export async function generateChallengeAction(formData: FormData) {
    const validatedFields = generateChallengeSchema.safeParse({
        language: formData.get('language'),
        topic: formData.get('topic'),
        difficulty: formData.get('difficulty'),
    });

    if (!validatedFields.success) {
        return { error: "Invalid input for AI generation." };
    }
    
    try {
        const result = await generateChallenge(validatedFields.data);
        return { success: true, data: result };
    } catch (error) {
        console.error("AI challenge generation failed:", error);
        return { error: "AI generation failed. Please try again." };
    }
}
