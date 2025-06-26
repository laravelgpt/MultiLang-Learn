
'use server';

import { 
    languagesSummaryData, 
    languagesCurriculumData, 
    type LanguageSummary, 
    type LanguageCurriculum,
    type Topic,
    type Lesson
} from "@/lib/mock-data";

/**
 * In-memory data store for the application.
 * In a real-world application, these functions would interact with a database.
 */

// ========== Language Summary Services ==========

export async function getLanguagesSummary(): Promise<LanguageSummary[]> {
    // Simulate async database call
    return Promise.resolve(languagesSummaryData);
}

export async function addLanguageSummary(summary: LanguageSummary): Promise<void> {
    languagesSummaryData.push(summary);
    return Promise.resolve();
}

export async function deleteLanguageSummary(langId: string): Promise<void> {
    const index = languagesSummaryData.findIndex(l => l.id === langId);
    if (index > -1) {
        languagesSummaryData.splice(index, 1);
    }
    return Promise.resolve();
}

// ========== Language Curriculum Services ==========

export async function getLanguageCurriculum(langId: string): Promise<LanguageCurriculum | null> {
    return Promise.resolve(languagesCurriculumData[langId] || null);
}

export async function addLanguageCurriculum(langId: string, curriculum: LanguageCurriculum): Promise<void> {
    languagesCurriculumData[langId] = curriculum;
    return Promise.resolve();
}

export async function deleteLanguageCurriculum(langId: string): Promise<void> {
    delete languagesCurriculumData[langId];
    return Promise.resolve();
}

// ========== Topic Services (Example) ==========

export async function addTopic(langId: string, topic: Omit<Topic, 'id' | 'lessons'>): Promise<Topic | null> {
    const curriculum = languagesCurriculumData[langId];
    if (curriculum) {
        const newTopic: Topic = {
            ...topic,
            id: `t-${Date.now()}`,
            lessons: [],
        };
        curriculum.topics.push(newTopic);
        return Promise.resolve(newTopic);
    }
    return Promise.resolve(null);
}

// ========== Lesson Services (Example) ==========

export async function addLesson(langId: string, topicId: string, lesson: Omit<Lesson, 'id'>): Promise<Lesson | null> {
    const topic = languagesCurriculumData[langId]?.topics.find(t => t.id === topicId);
    if (topic) {
        const newLesson: Lesson = {
            ...lesson,
            id: `l-${Date.now()}`,
        };
        topic.lessons.push(newLesson);
        return Promise.resolve(newLesson);
    }
    return Promise.resolve(null);
}
