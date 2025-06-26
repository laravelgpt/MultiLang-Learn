
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { useLanguage } from "@/context/language-provider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, CheckCircle, Flame, FolderKanban, Trophy } from "lucide-react";
import Image from "next/image";

const statsData = [
    { title: "total_xp", value: "12,850 XP", icon: Award },
    { title: "day_streak_header", value: "14 Days", icon: Flame },
    { title: "challenges_solved", value: "12", icon: Trophy },
    { title: "projects_created", value: "3", icon: FolderKanban }
];

const languageProgressData = [
    { name: "Python", icon: "https://placehold.co/24x24.png", hint: "python logo", progress: 80, topics: "20/25", challenges: "8/15" },
    { name: "JavaScript", icon: "https://placehold.co/24x24.png", hint: "javascript logo", progress: 65, topics: "15/22", challenges: "5/10" },
    { name: "Go", icon: "https://placehold.co/24x24.png", hint: "go logo", progress: 25, topics: "5/20", challenges: "1/5" },
    { name: "Rust", icon: "https://placehold.co/24x24.png", hint: "rust logo", progress: 10, topics: "2/18", challenges: "0/5" },
];

const activityFeedData = [
    { type: "lesson", title: "'Variables and Data Types' in Python", time: "2 hours ago", icon: BookOpen },
    { type: "challenge", title: "'FizzBuzz'", time: "1 day ago", icon: Trophy },
    { type: "lesson", title: "'Arrow Functions' in JavaScript", time: "2 days ago", icon: BookOpen },
    { type: "project", title: "'Personal Portfolio Website'", time: "4 days ago", icon: FolderKanban },
];


export default function ProgressTrackerPage() {
    const { t } = useLanguage();
    const [stats, setStats] = useState(statsData);
    const [languageProgress, setLanguageProgress] = useState(languageProgressData);
    const [activityFeed, setActivityFeed] = useState(activityFeedData);

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
                                            <Progress value={lang.progress} className="h-2" />
                                        </TableCell>
                                        <TableCell>{lang.topics}</TableCell>
                                        <TableCell>{lang.challenges}</TableCell>
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
                            {activityFeed.map((activity, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="p-2 bg-muted rounded-full mt-1">
                                        <activity.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            {t(activity.type === "lesson" ? "completed_lesson" : activity.type === "challenge" ? "solved_challenge" : "started_project")}
                                            : {activity.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
