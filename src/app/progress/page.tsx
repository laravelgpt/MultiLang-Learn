
"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { useLanguage } from "@/context/language-provider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, Flame, FolderKanban, Trophy } from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

const userActivityHistory = [
    { type: 'lesson', title: "'Arrow Functions' in JavaScript", timestamp: '2024-07-29T11:00:00Z', language: 'JavaScript', points: 10 },
    { type: 'lesson', title: "'Variables and Data Types' in Python", timestamp: '2024-07-29T10:00:00Z', language: 'Python', points: 10 },
    { type: 'challenge', title: "'FizzBuzz'", timestamp: '2024-07-28T15:00:00Z', language: 'Python', points: 25 },
    { type: 'project', title: "'Personal Portfolio Website'", timestamp: '2024-07-27T18:00:00Z', language: 'JavaScript', points: 150 },
    { type: 'lesson', title: "'Operators' in Python", timestamp: '2024-07-27T09:30:00Z', language: 'Python', points: 10 },
    { type: 'challenge', title: "'Two Sum'", timestamp: '2024-07-26T12:00:00Z', language: 'JavaScript', points: 50 },
    { type: 'lesson', title: "'Goroutines' in Go", timestamp: '2024-07-25T16:00:00Z', language: 'Go', points: 15 },
    { type: 'challenge', title: "'Reverse a String'", timestamp: '2024-07-24T20:00:00Z', language: 'JavaScript', points: 25 },
    { type: 'lesson', title: "'Data Structures Intro' in Python", timestamp: '2024-07-24T10:00:00Z', language: 'Python', points: 15 },
];


export default function ProgressTrackerPage() {
    const { t } = useLanguage();
    
    const processedData = useMemo(() => {
        const sortedActivities = [...userActivityHistory].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

        const totalXp = sortedActivities.reduce((sum, activity) => sum + (activity.points || 0), 0);
        const challengesSolved = sortedActivities.filter(a => a.type === 'challenge').length;
        const projectsCompleted = sortedActivities.filter(a => a.type === 'project').length;

        const progressByLang: Record<string, any> = sortedActivities.reduce((acc, activity) => {
            if (!activity.language) return acc;
            if (!acc[activity.language]) {
                acc[activity.language] = {
                    name: activity.language,
                    icon: `https://placehold.co/24x24.png`,
                    hint: `${activity.language.toLowerCase()} logo`,
                    lessons: 0,
                    challenges: 0,
                };
            }
            if (activity.type === 'lesson') acc[activity.language].lessons++;
            if (activity.type === 'challenge') acc[activity.language].challenges++;
            return acc;
        }, {} as Record<string, any>);
        
        const languageProgress = Object.values(progressByLang).map(lang => {
            const mockTotals = {
                Python: { topics: 25, challenges: 15 },
                JavaScript: { topics: 22, challenges: 10 },
                Go: { topics: 20, challenges: 5 },
                Rust: { topics: 18, challenges: 5 },
            }[lang.name] || { topics: 20, challenges: 10};

            return {
                ...lang,
                topics: `${lang.lessons}/${mockTotals.topics}`,
                challenges_solved: `${lang.challenges}/${mockTotals.challenges}`,
                progress: Math.round(((lang.lessons + lang.challenges) / (mockTotals.topics + mockTotals.challenges)) * 100)
            };
        });

        return {
            stats: [
                { title: "total_xp", value: `${totalXp.toLocaleString()} XP`, icon: Award },
                { title: "day_streak_header", value: "14 Days", icon: Flame },
                { title: "challenges_solved", value: challengesSolved.toString(), icon: Trophy },
                { title: "projects_created", value: projectsCompleted.toString(), icon: FolderKanban }
            ],
            languageProgress,
            activityFeed: sortedActivities,
        };
    }, []);

    const [stats, setStats] = useState(processedData.stats);
    const [languageProgress, setLanguageProgress] = useState(processedData.languageProgress);
    const [activityFeed, setActivityFeed] = useState(processedData.activityFeed);

    const activityTypeToIcon = {
        lesson: BookOpen,
        challenge: Trophy,
        project: FolderKanban
    };
    
    const activityTypeToTranslationKey = {
        lesson: "completed_lesson",
        challenge: "solved_challenge",
        project: "started_project"
    };

    return (
        <div className="flex flex-col gap-8">
            <PageHeader title={t('progress_tracker_title')} description={t('progress_tracker_desc')} />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t(stat.title)}</CardTitle>
                            <stat.icon className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold font-headline">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('language_progress_table')}</CardTitle>
                        <CardDescription>{t('your_progress_in_each_language')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{t('language')}</TableHead>
                                    <TableHead className="w-[150px]">{t('progress_bar')}</TableHead>
                                    <TableHead>{t('topics_completed')}</TableHead>
                                    <TableHead>{t('challenges_solved')}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {languageProgress.map(lang => (
                                    <TableRow key={lang.name}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center gap-3">
                                                <Image src={lang.icon} alt={lang.name} width={24} height={24} data-ai-hint={lang.hint} />
                                                <span>{lang.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Progress value={lang.progress} className="h-2" />
                                                <span className="text-xs text-muted-foreground">{lang.progress}%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{lang.topics}</TableCell>
                                        <TableCell>{lang.challenges_solved}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('activity_feed')}</CardTitle>
                        <CardDescription>{t('your_recent_activities')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {activityFeed.map((activity, index) => {
                                const Icon = activityTypeToIcon[activity.type as keyof typeof activityTypeToIcon];
                                const translationKey = activityTypeToTranslationKey[activity.type as keyof typeof activityTypeToTranslationKey];
                                return (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="p-2 bg-muted rounded-full mt-1">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            {t(translationKey)}: {activity.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                                        </p>
                                    </div>
                                </li>
                            )})}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
