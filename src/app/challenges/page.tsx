
"use client";

import { useState, useMemo, useEffect } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, CircleDot, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from "@/context/language-provider";
import { useProgrammingLanguage } from "@/context/programming-language-provider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format, getWeek } from 'date-fns';
import { getChallenges, getSubmissions } from "@/services/languageService";
import type { Challenge, Submission } from "@/lib/mock-data";
import { Skeleton } from "@/components/ui/skeleton";


export default function ChallengesPage() {
    const { t } = useLanguage();
    const { selectedLanguage } = useProgrammingLanguage();
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        async function fetchData() {
            const [challengesData, submissionsData] = await Promise.all([
                getChallenges(),
                getSubmissions()
            ]);
            setChallenges(challengesData);
            setSubmissions(submissionsData);
        }
        fetchData();
    }, []);

    const { dailyChallenge, weeklyChallenge } = useMemo(() => {
        if (!challenges.length) return { dailyChallenge: null, weeklyChallenge: null };
        const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
        const weekOfYear = getWeek(new Date());

        const dailyIndex = dayOfYear % challenges.length;
        const hardChallenges = challenges.filter(c => c.difficulty === 'Hard');
        const weeklyIndex = hardChallenges.length > 0 ? weekOfYear % hardChallenges.length : -1;
        
        return {
            dailyChallenge: challenges[dailyIndex],
            weeklyChallenge: weeklyIndex !== -1 ? hardChallenges[weeklyIndex] : challenges[ (dayOfYear + 5) % challenges.length ] // fallback
        };
    }, [challenges]);


    const filteredChallenges = useMemo(() => {
        if (selectedLanguage === 'all') {
            return challenges;
        }
        return challenges.filter(challenge => challenge.language === selectedLanguage);
    }, [selectedLanguage, challenges]);
    
    const filteredSubmissions = useMemo(() => {
        if (selectedLanguage === 'all') {
            return submissions;
        }
        return submissions.filter(sub => sub.language === selectedLanguage);
    }, [selectedLanguage, submissions]);

    const ChallengeHighlightCard = ({ challenge, title, description, badgeText, badgeIcon: BadgeIcon, link }: { challenge: Challenge, title: string, description: string, badgeText: string, badgeIcon: React.ElementType, link: string }) => (
         <Card className="bg-gradient-to-br from-primary/10 to-background">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-primary">
                        <BadgeIcon className="h-5 w-5" />
                        <CardTitle className="text-2xl font-headline">{title}</CardTitle>
                    </div>
                    <Badge variant="outline">{badgeText}</Badge>
                </div>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <h2 className="text-xl font-bold">{challenge.title}</h2>
                 <p className="text-muted-foreground line-clamp-2">{challenge.description}</p>
                 <div className="flex items-center gap-4 text-sm">
                      <Badge variant={
                          challenge.difficulty === 'Easy' ? 'secondary' :
                          challenge.difficulty === 'Medium' ? 'outline' : 'default'
                      }>{challenge.difficulty}</Badge>
                      <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="font-semibold text-muted-foreground">{challenge.points} pts</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                          <CircleDot className="h-4 w-4" />
                          <span>{challenge.tests} tests</span>
                      </div>
                 </div>
                 <Button asChild size="lg" className="mt-4 w-full">
                    <Link href={link}>
                        {t('start_challenge')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
            </CardContent>
        </Card>
    );

    return (
        <div className="relative flex flex-col gap-6 min-h-[calc(100vh-150px)]">
            <div className="flex items-center gap-4 mb-2">
                <Trophy className="h-10 w-10 text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">{t('challenges')}</h1>
                    <p className="text-lg text-muted-foreground">{t('challenge_yourself')}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {isClient && dailyChallenge ? (
                    <ChallengeHighlightCard 
                        challenge={dailyChallenge}
                        title={t('daily_challenge_title')}
                        description={t('daily_challenge_desc')}
                        badgeText={format(new Date(), 'MMMM d')}
                        badgeIcon={Calendar}
                        link={`/challenges/${dailyChallenge.id}`}
                    />
                ) : <Skeleton className="h-[320px]" />}
                 {isClient && weeklyChallenge ? (
                    <ChallengeHighlightCard 
                        challenge={weeklyChallenge}
                        title={t('weekly_challenge_title')}
                        description={t('weekly_challenge_desc')}
                        badgeText={t('weekly')}
                        badgeIcon={Sparkles}
                        link={`/challenges/${weeklyChallenge.id}`}
                    />
                ) : <Skeleton className="h-[320px]" />}
            </div>

            <Tabs defaultValue="all-challenges" className="w-full">
                <TabsList>
                    <TabsTrigger value="all-challenges">{t('all_challenges')}</TabsTrigger>
                    <TabsTrigger value="my-submissions">{t('my_submissions')}</TabsTrigger>
                </TabsList>

                <TabsContent value="all-challenges" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredChallenges.map((challenge) => (
                             <Card asChild key={challenge.id} className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                                <Link href={`/challenges/${challenge.id}`}>
                                    <CardHeader className="pb-4">
                                        <div className="flex justify-between items-center">
                                            <Badge variant={
                                                challenge.difficulty === 'Easy' ? 'secondary' :
                                                challenge.difficulty === 'Medium' ? 'outline' : 'default'
                                            }>{challenge.difficulty}</Badge>
                                            <div className="flex items-center gap-1.5 text-yellow-500">
                                                <Star className="h-4 w-4 fill-current" />
                                                <span className="font-semibold text-sm text-muted-foreground">{challenge.points} pts</span>
                                            </div>
                                        </div>
                                        <CardTitle className="pt-4 text-lg">{challenge.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-grow p-6 pt-0">
                                    <p className="flex-grow text-sm text-muted-foreground line-clamp-3">{challenge.description}</p>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                                        <CircleDot className="h-4 w-4" />
                                        <span>{challenge.tests} tests</span>
                                    </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                        {filteredChallenges.length === 0 && (
                             <Card className="md:col-span-2 lg:col-span-3">
                                <CardContent className="p-6 text-center text-muted-foreground">
                                    <p>{t('no_challenges_for_language')}</p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </TabsContent>
                <TabsContent value="my-submissions" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>{t('my_submissions')}</CardTitle>
                            <CardDescription>{t('my_submissions_desc')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('challenge_title')}</TableHead>
                                        <TableHead>{t('language')}</TableHead>
                                        <TableHead>{t('status')}</TableHead>
                                        <TableHead>{t('date')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredSubmissions.map((sub) => (
                                        <TableRow key={sub.id}>
                                            <TableCell className="font-medium">{sub.challengeTitle}</TableCell>
                                            <TableCell>{sub.language.toUpperCase()}</TableCell>
                                            <TableCell>
                                                <Badge variant={sub.status === 'Accepted' ? 'default' : 'destructive'} className={sub.status === 'Accepted' ? 'bg-green-600' : ''}>
                                                    {sub.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{sub.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {filteredSubmissions.length === 0 && (
                                <div className="text-center py-16 text-muted-foreground">
                                    <p>{t('no_submissions_for_language')}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
