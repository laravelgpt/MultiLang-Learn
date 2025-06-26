
'use server';

import { 
    languagesSummaryData, 
    languagesCurriculumData, 
    quickQuestionsData,
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

// ========== Quick Question Services ==========

export async function getQuickQuestions(langId: string): Promise<string[] | undefined> {
    return Promise.resolve(quickQuestionsData[langId]);
}

export async function addQuickQuestions(langId: string, questions: string[]): Promise<void> {
    quickQuestionsData[langId] = questions;
    return Promise.resolve();
}

// ========== Topic Services ==========

export async function addTopic(langId: string, topic: Omit<Topic, 'id' | 'lessons'>): Promise<Topic | null> {
    const curriculum = languagesCurriculumData[langId];
    if (curriculum) {
        const newTopic: Topic = {
            ...topic,
            id: `t-${langId}-${Date.now()}`,
            lessons: [],
        };
        curriculum.topics.push(newTopic);
        
        const summary = languagesSummaryData.find(s => s.id === langId);
        if (summary) {
            summary.topics = curriculum.topics.length;
        }

        return Promise.resolve(newTopic);
    }
    return Promise.resolve(null);
}

export async function updateTopic(langId: string, topicId: string, topicData: Partial<Topic>): Promise<Topic | null> {
    const topic = languagesCurriculumData[langId]?.topics.find(t => t.id === topicId);
    if (topic) {
        Object.assign(topic, topicData);
        return Promise.resolve(topic);
    }
    return Promise.resolve(null);
}

export async function deleteTopic(langId: string, topicId: string): Promise<void> {
    const curriculum = languagesCurriculumData[langId];
    if (curriculum) {
        const topicIndex = curriculum.topics.findIndex(t => t.id === topicId);
        if (topicIndex > -1) {
            curriculum.topics.splice(topicIndex, 1);
            
            const summary = languagesSummaryData.find(s => s.id === langId);
            if (summary) {
                summary.topics = curriculum.topics.length;
            }
        }
    }
    return Promise.resolve();
}

// ========== Lesson Services ==========

export async function addLesson(langId: string, topicId: string, lessonData: Omit<Lesson, 'id' | 'attachments'>): Promise<Lesson | null> {
    const topic = languagesCurriculumData[langId]?.topics.find(t => t.id === topicId);
    if (topic) {
        const newLesson: Lesson = {
            ...lessonData,
            id: `l-${langId}-${topicId}-${Date.now()}`,
            attachments: [],
        };
        topic.lessons.push(newLesson);

        const summary = languagesSummaryData.find(s => s.id === langId);
        if (summary) {
            summary.lessons = (summary.lessons || 0) + 1;
        }

        return Promise.resolve(newLesson);
    }
    return Promise.resolve(null);
}

export async function updateLesson(langId: string, topicId: string, lessonId: string, lessonData: Partial<Lesson>): Promise<Lesson | null> {
    const topic = languagesCurriculumData[langId]?.topics.find(t => t.id === topicId);
    if (topic) {
        const lesson = topic.lessons.find(l => l.id === lessonId);
        if (lesson) {
            Object.assign(lesson, lessonData);
            return Promise.resolve(lesson);
        }
    }
    return Promise.resolve(null);
}

export async function deleteLesson(langId: string, topicId: string, lessonId: string): Promise<void> {
    const topic = languagesCurriculumData[langId]?.topics.find(t => t.id === topicId);
    if (topic) {
        const lessonIndex = topic.lessons.findIndex(l => l.id === lessonId);
        if (lessonIndex > -1) {
            topic.lessons.splice(lessonIndex, 1);

            const summary = languagesSummaryData.find(s => s.id === langId);
            if (summary) {
                summary.lessons = (summary.lessons || 0) - 1;
            }
        }
    }
    return Promise.resolve();
}
