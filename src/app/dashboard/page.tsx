
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Bot, CheckCircle, Code, Settings, Target, TrendingUp, Award, User, Star, Shield, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { useLanguage } from "@/context/language-provider";
import { useProgrammingLanguage, type LanguageId } from "@/context/programming-language-provider";


const programmingLanguages = [
    {
        id: "js",
        name: "JavaScript",
        description: "Dynamic language for web development.",
        progress: 65,
        icon: "https://placehold.co/48x48.png",
        hint: "javascript logo"
    },
    {
        id: "pascal",
        name: "Pascal",
        description: "Educational programming language.",
        progress: 0,
        icon: "https://placehold.co/48x48.png",
        hint: "pascal logo"
    },
    {
        id: "py",
        name: "Python",
        description: "Versatile language for data science and web.",
        progress: 80,
        icon: "https://placehold.co/48x48.png",
        hint: "python logo"
    },
];

const progressData = [
  { month: 'Jan', points: 200 },
  { month: 'Feb', points: 350 },
  { month: 'Mar', points: 300 },
  { month: 'Apr', points: 450 },
  { month: 'May', points: 500 },
  { month: 'Jun', points: 650 },
];

const chartConfig: ChartConfig = {
  points: {
    label: "Points",
    color: "hsl(var(--chart-1))",
  },
}

const awards = [
  { title: "First Step", description: "Complete your first lesson", icon: Star, date: "July 20, 2024" },
  { title: "Code Ninja", description: "Solve 10 challenges", icon: Code, date: "July 22, 2024" },
  { title: "Weekly Warrior", description: "Learn for 7 days in a row", icon: Shield, date: "July 27, 2024" },
  { title: "Python Pioneer", description: "Complete 50% of the Python course", icon: Award, date: "July 28, 2024" },
  { title: "AI Explorer", description: "Chat with the AI assistant for the first time", icon: BrainCircuit, date: "July 29, 2024" },
];

// Mock data for language-specific dashboards
const languageSpecificData: Record<string, any> = {
    js: { name: "JavaScript", topicsCompleted: 15, challengesSolved: 5, progress: 65, chartData: [ { month: 'Apr', points: 50 }, { month: 'May', points: 120 }, { month: 'Jun', points: 200 } ] },
    py: { name: "Python", topicsCompleted: 20, challengesSolved: 8, progress: 80, chartData: [ { month: 'Jan', points: 100 }, { month: 'Feb', points: 150 }, { month: 'Mar', points: 250 } ] },
    go: { name: "Go", topicsCompleted: 5, challengesSolved: 1, progress: 25, chartData: [ { month: 'May', points: 30 }, { month: 'Jun', points: 60 } ] },
    rust: { name: "Rust", topicsCompleted: 2, challengesSolved: 0, progress: 10, chartData: [ { month: 'Jun', points: 20 } ] },
};

export default function UserDashboardPage() {
  const { t } = useLanguage();
  const { selectedLanguage } = useProgrammingLanguage();

  const statCards = [
    { title: t('topics_completed'), value: "25", change: t('from_last_week', {change: 2}), icon: BookOpen, iconBg: "bg-blue-100 dark:bg-blue-900/50", iconColor: "text-blue-500 dark:text-blue-400" },
    { title: t('challenges_solved'), value: "12", change: t('from_last_week', {change: 5}), icon: CheckCircle, iconBg: "bg-green-100 dark:bg-green-900/50", iconColor: "text-green-500 dark:text-green-400" },
    { title: t('projects_created'), value: "3", change: t('from_last_week', {change: 1}), icon: Code, iconBg: "bg-purple-100 dark:bg-purple-900/50", iconColor: "text-purple-500 dark:text-purple-400" },
    { title: t('current_streak'), value: "14", change: t('day_streak_card'), icon: TrendingUp, iconBg: "bg-orange-100 dark:bg-orange-900/50", iconColor: "text-orange-500 dark:text-orange-400" },
  ];

  const quickActions = [
      { title: t('continue_learning'), icon: BookOpen, href: "/languages" },
      { title: t('daily_challenge'), icon: Target, href: "/challenges" },
      { title: t('ai_assistant'), icon: Bot, href: "/ai-assistant" },
  ];

  if (selectedLanguage !== 'all' && languageSpecificData[selectedLanguage]) {
    const langData = languageSpecificData[selectedLanguage];
    
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold font-headline text-primary">
                {t('dashboard_for_language', { language: langData.name })}
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                 <Card>
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <CardTitle className="text-base font-medium text-muted-foreground">{t('language_topics_completed', { language: langData.name })}</CardTitle>
                                <p className="text-3xl font-bold font-headline mt-2">{langData.topicsCompleted}</p>
                            </div>
                            <BookOpen className="h-6 w-6 text-blue-500" />
                        </div>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <CardTitle className="text-base font-medium text-muted-foreground">{t('language_challenges_solved', { language: langData.name })}</CardTitle>
                                <p className="text-3xl font-bold font-headline mt-2">{langData.challengesSolved}</p>
                            </div>
                            <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                    </CardHeader>
                </Card>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('language_progress', { language: langData.name })}</CardTitle>
                        <CardDescription>{t('track_progress')}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>{t('progress_bar')}</span>
                            <span>{langData.progress}%</span>
                        </div>
                        <Progress value={langData.progress} />
                         <Button asChild className="w-full mt-4">
                            <Link href={`/languages/${selectedLanguage}`}>
                                {t('continue_learning_language', { language: langData.name })} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>{t('your_progress')}</CardTitle>
                        <CardDescription>{t('track_progress')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                            <LineChart data={langData.chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                                <RechartsTooltip content={<ChartTooltipContent />} />
                                <Line type="monotone" dataKey="points" stroke="var(--color-points)" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg border-0">
        <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20 border-4 border-primary-foreground/50">
                    <AvatarImage src="https://placehold.co/80x80.png" alt="Git Frp" data-ai-hint="profile avatar" />
                    <AvatarFallback className="text-3xl bg-primary-foreground text-primary">GF</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-3xl font-bold font-headline">{t('welcome_back')}</h1>
                    <p className="text-lg text-primary-foreground/80 mt-1">{t('continue_journey')}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary-foreground/20 rounded-full">{t('beginner')}</span>
                        <span className="text-xs text-primary-foreground/80">{t('member_since')}</span>
                    </div>
                </div>
            </div>
            <div className="text-right hidden md:block">
                <div className="flex gap-8">
                    <div>
                        <p className="text-4xl font-bold font-headline">14</p>
                        <p className="text-sm text-primary-foreground/80">{t('day_streak_banner')}</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold font-headline">2,350</p>
                        <p className="text-sm text-primary-foreground/80">{t('total_points')}</p>
                    </div>
                </div>
                 <Button variant="secondary" size="sm" className="mt-4 bg-white/20 hover:bg-white/30 text-white">
                    <Settings className="mr-2 h-4 w-4" />
                    {t('settings')}
                </Button>
            </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-transparent p-0 inline-flex border-b w-full mb-6">
          <TabsTrigger value="overview" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">{t('overview')}</TabsTrigger>
          <TabsTrigger value="progress" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">{t('progress_tab')}</TabsTrigger>
          <TabsTrigger value="awards" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">{t('awards')}</TabsTrigger>
          <TabsTrigger value="settings" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">{t('settings')}</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
            <div className="grid gap-8">
                {/* Stats Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {statCards.map((card) => (
                        <Card key={card.title}>
                           <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="text-base font-medium text-muted-foreground">{card.title}</CardTitle>
                                        <p className="text-3xl font-bold font-headline mt-2">{card.value}</p>
                                    </div>
                                    <div className={`p-2 rounded-full ${card.iconBg}`}>
                                        <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xs text-muted-foreground">{card.change}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Quick Actions */}
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-1">{t('quick_actions')}</h2>
                    <p className="text-muted-foreground mb-4">{t('jump_back')}</p>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {quickActions.map((action) => (
                             <Card key={action.title} className="hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                                <Link href={action.href} className="block h-full">
                                    <CardContent className="p-6 flex flex-col items-center justify-center gap-4 text-center h-full">
                                        <div className="p-4 bg-primary/10 rounded-full">
                                            <action.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <p className="font-semibold text-lg">{action.title}</p>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Your Programming Languages */}
                 <div>
                    <h2 className="text-2xl font-bold font-headline mb-1">{t('your_languages')}</h2>
                    <p className="text-muted-foreground mb-4">{t('master_languages')}</p>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {programmingLanguages.map((lang) => (
                            <Card key={lang.id} className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <Image src={lang.icon} alt={lang.name} width={48} height={48} className="rounded-lg" data-ai-hint={lang.hint} />
                                        <div>
                                            <CardTitle className="text-xl">{lang.name}</CardTitle>
                                            <CardDescription>{lang.description}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-2">
                                     <div className="flex justify-between items-center text-sm text-muted-foreground">
                                         <span>{t('progress_bar')}</span>
                                         <span>{lang.progress}%</span>
                                     </div>
                                     <Progress value={lang.progress} />
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full" variant="outline">
                                        <Link href={`/languages/${lang.id}`}>
                                            {t('start_learning')} <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </TabsContent>
        <TabsContent value="progress">
            <Card>
                <CardHeader>
                    <CardTitle>{t('your_progress')}</CardTitle>
                    <CardDescription>{t('track_progress')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                        <LineChart data={progressData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                            <RechartsTooltip content={<ChartTooltipContent />} />
                            <Line type="monotone" dataKey="points" stroke="var(--color-points)" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="awards">
            <Card>
                <CardHeader>
                    <CardTitle>{t('your_awards')}</CardTitle>
                    <CardDescription>{t('all_awards')}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((award) => (
                        <Card key={award.title} className="flex items-center p-4 gap-4">
                            <award.icon className="w-10 h-10 text-primary shrink-0"/>
                            <div>
                                <h3 className="font-semibold">{award.title}</h3>
                                <p className="text-sm text-muted-foreground">{award.description}</p>
                                <p className="text-xs text-muted-foreground mt-1">{award.date}</p>
                            </div>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="settings">
            <Card>
                <CardHeader>
                    <CardTitle>{t('profile_settings')}</CardTitle>
                    <CardDescription>{t('manage_profile')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">{t('full_name')}</Label>
                        <Input id="fullName" defaultValue="Git Frp" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">{t('email_address')}</Label>
                        <Input id="email" type="email" defaultValue="git.frp@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">{t('new_password')}</Label>
                        <Input id="password" type="password" placeholder={t('enter_new_password')} />
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <Label htmlFor="notifications">{t('email_notifications')}</Label>
                            <p className="text-sm text-muted-foreground">{t('receive_emails')}</p>
                        </div>
                        <Switch id="notifications" defaultChecked/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>{t('save_settings')}</Button>
                </CardFooter>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
