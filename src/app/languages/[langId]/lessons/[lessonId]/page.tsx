
"use client";

import { useState, useEffect } from "react";
import { getLanguageCurriculum } from "@/services/languageService";
import type { Lesson, LanguageCurriculum } from "@/lib/mock-data";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';
import { useLanguage } from "@/context/language-provider";
import { Skeleton } from "@/components/ui/skeleton";

type LessonData = {
  lesson: Lesson;
  topicTitle: string;
};

export default function LessonPage({ params }: { params: { langId: string, lessonId: string } }) {
  const { t } = useLanguage();
  const [lessonData, setLessonData] = useState<LessonData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchLesson() {
      setIsLoading(true);
      try {
        const curriculum = await getLanguageCurriculum(params.langId);
        if (!curriculum) {
          setError(t('lesson_not_found_desc'));
          setIsLoading(false);
          return;
        }

        let foundLesson: Lesson | undefined;
        let foundTopicTitle: string | undefined;

        for (const topic of curriculum.topics) {
          const l = topic.lessons.find(l => l.id === params.lessonId);
          if (l) {
            foundLesson = l;
            foundTopicTitle = topic.title;
            break;
          }
        }

        if (foundLesson && foundTopicTitle) {
          setLessonData({ lesson: foundLesson, topicTitle: foundTopicTitle });
        } else {
          setError(t('lesson_not_found_desc'));
        }
      } catch (e) {
        setError(t('lesson_not_found_desc'));
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchLesson();
  }, [params.langId, params.lessonId, t]);
  
  if (isLoading) {
    return (
      <>
        <PageHeader title="Loading Lesson..." />
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </CardHeader>
          <CardContent className="space-y-2 pt-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </>
    );
  }

  if (error || !lessonData) {
    return (
      <div>
        <PageHeader title={t('lesson_not_found_title')}>
          <Button asChild variant="outline">
            <Link href={`/languages/${params.langId}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('back_to_curriculum')}
            </Link>
          </Button>
        </PageHeader>
        <p>{error}</p>
      </div>
    );
  }

  const { lesson, topicTitle } = lessonData;

  return (
    <>
      <PageHeader title={lesson.title}>
        <Button asChild variant="outline">
          <Link href={`/languages/${params.langId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back_to_curriculum')}
          </Link>
        </Button>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span>{lesson.title}</span>
          </CardTitle>
          <CardDescription>
            {t('from_topic')}: {topicTitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{lesson.content || t('lesson_content_coming_soon')}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
