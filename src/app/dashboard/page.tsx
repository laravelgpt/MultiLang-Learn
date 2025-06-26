
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


const statCards = [
  { title: "বিষয় সম্পন্ন হয়েছে", value: "25", change: "গত সপ্তাহ থেকে +২", icon: BookOpen, iconBg: "bg-blue-100 dark:bg-blue-900/50", iconColor: "text-blue-500 dark:text-blue-400" },
  { title: "চ্যালেঞ্জ সমাধান করা হয়েছে", value: "12", change: "গত সপ্তাহ থেকে +৫", icon: CheckCircle, iconBg: "bg-green-100 dark:bg-green-900/50", iconColor: "text-green-500 dark:text-green-400" },
  { title: "প্রজেক্ট তৈরি করা হয়েছে", value: "3", change: "গত সপ্তাহ থেকে +১", icon: Code, iconBg: "bg-purple-100 dark:bg-purple-900/50", iconColor: "text-purple-500 dark:text-purple-400" },
  { title: "বর্তমান চলমান", value: "14", change: "দিনের ধারা", icon: TrendingUp, iconBg: "bg-orange-100 dark:bg-orange-900/50", iconColor: "text-orange-500 dark:text-orange-400" },
];

const quickActions = [
    { title: "শেখা চালিয়ে যান", icon: BookOpen, href: "/languages" },
    { title: "দৈনিক চ্যালেঞ্জ", icon: Target, href: "/challenges" },
    { title: "এআই সহকারী", icon: Bot, href: "/ai-assistant" },
];

const programmingLanguages = [
    {
        id: "js",
        name: "JavaScript",
        description: "ওয়েব ডেভেলপমেন্টের জন্য ডাইনামিক প্রোগ্রামিং ল্যাঙ্গুয়েজ",
        progress: 65,
        icon: "https://placehold.co/48x48.png",
        hint: "javascript logo"
    },
    {
        id: "pascal",
        name: "Pascal",
        description: "শিক্ষামূলক প্রোগ্রামিং ল্যাঙ্গুয়েজ",
        progress: 0,
        icon: "https://placehold.co/48x48.png",
        hint: "pascal logo"
    },
    {
        id: "py",
        name: "Python",
        description: "ডেটা সায়েন্স এবং ওয়েব ডেভেলপমেন্টের জন্য বহুমুখী ভাষা",
        progress: 0,
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
  { title: "প্রথম ধাপ", description: "আপনার প্রথম পাঠ সম্পন্ন করুন", icon: Star, date: "জুলাই ২০, ২০২৪" },
  { title: "কোড নিনজা", description: "১০টি চ্যালেঞ্জ সমাধান করুন", icon: Code, date: "জুলাই ২২, ২০২৪" },
  { title: "সัปতাহিক যোদ্ধা", description: "টানা ৭ দিন ধরে শিখুন", icon: Shield, date: "জুলাই ২৭, ২০২৪" },
  { title: "পাইথন পাইওনিয়ার", description: "পাইথন কোর্সের ৫০% সম্পন্ন করুন", icon: Award, date: "জুলাই ২৮, ২০২৪" },
  { title: "এআই এক্সপ্লোরার", description: "প্রথমবারের মতো এআই সহকারীর সাথে চ্যাট করুন", icon: BrainCircuit, date: "জুলাই ২৯, ২০২৪" },
];

export default function UserDashboardPage() {
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
                    <h1 className="text-3xl font-bold font-headline">ফিরে আসার জন্য স্বাগতম, গিট ফ্রপ!</h1>
                    <p className="text-lg text-primary-foreground/80 mt-1">আপনার প্রোগ্রামিং যাত্রা চালিয়ে যান</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary-foreground/20 rounded-full">শিক্ষানবিস</span>
                        <span className="text-xs text-primary-foreground/80">সদস্য ২০২৫ থেকে</span>
                    </div>
                </div>
            </div>
            <div className="text-right hidden md:block">
                <div className="flex gap-8">
                    <div>
                        <p className="text-4xl font-bold font-headline">14</p>
                        <p className="text-sm text-primary-foreground/80">দিনের ধারা</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold font-headline">2,350</p>
                        <p className="text-sm text-primary-foreground/80">মোট পয়েন্ট</p>
                    </div>
                </div>
                 <Button variant="secondary" size="sm" className="mt-4 bg-white/20 hover:bg-white/30 text-white">
                    <Settings className="mr-2 h-4 w-4" />
                    সেটিংস
                </Button>
            </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-transparent p-0 inline-flex border-b w-full mb-6">
          <TabsTrigger value="overview" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">সংক্ষিপ্ত বিবরণ</TabsTrigger>
          <TabsTrigger value="progress" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">অগ্রগতি</TabsTrigger>
          <TabsTrigger value="awards" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">পুরস্কার</TabsTrigger>
          <TabsTrigger value="settings" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">সেটিংস</TabsTrigger>
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
                    <h2 className="text-2xl font-bold font-headline mb-1">দ্রুত পদক্ষেপ</h2>
                    <p className="text-muted-foreground mb-4">আপনার শেখার যাত্রায় ঝাঁপিয়ে পড়ুন</p>
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
                    <h2 className="text-2xl font-bold font-headline mb-1">আপনার প্রোগ্রামিং ভাষা</h2>
                    <p className="text-muted-foreground mb-4">একাধিক ভাষায় দক্ষতা অর্জন করুন এবং আপনার দক্ষতা প্রসারিত করুন</p>
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
                                         <span>অগ্রগতি</span>
                                         <span>{lang.progress}%</span>
                                     </div>
                                     <Progress value={lang.progress} />
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full" variant="outline">
                                        <Link href={`/languages/${lang.id}`}>
                                            শেখা শুরু করুন <ArrowRight className="ml-2 h-4 w-4" />
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
                    <CardTitle>আপনার অগ্রগতি</CardTitle>
                    <CardDescription>সময়ের সাথে সাথে আপনার শেখার কার্যকলাপ দেখুন।</CardDescription>
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
                    <CardTitle>আপনার পুরস্কার</CardTitle>
                    <CardDescription>আপনি যে সমস্ত ব্যাজ এবং পুরস্কার অর্জন করেছেন।</CardDescription>
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
                    <CardTitle>প্রোফাইল সেটিংস</CardTitle>
                    <CardDescription>আপনার প্রোফাইলের তথ্য এবং পছন্দসমূহ পরিচালনা করুন।</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">পুরো নাম</Label>
                        <Input id="fullName" defaultValue="Git Frp" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">ইমেইল ঠিকানা</Label>
                        <Input id="email" type="email" defaultValue="git.frp@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">নতুন পাসওয়ার্ড</Label>
                        <Input id="password" type="password" placeholder="নতুন পাসওয়ার্ড লিখুন" />
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                            <Label htmlFor="notifications">ইমেইল নোটিফিকেশন</Label>
                            <p className="text-sm text-muted-foreground">কোর্স আপডেট এবং ঘোষণা সম্পর্কে ইমেইল পান।</p>
                        </div>
                        <Switch id="notifications" defaultChecked/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>সেটিংস সংরক্ষণ করুন</Button>
                </CardFooter>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

    