
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Bot, CheckCircle, Code, Settings, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const statCards = [
  { title: "Topics Completed", value: "0", change: "+2 from last week", icon: BookOpen, iconBg: "bg-blue-100 dark:bg-blue-900/50", iconColor: "text-blue-500 dark:text-blue-400" },
  { title: "Challenges Solved", value: "0", change: "+5 from last week", icon: CheckCircle, iconBg: "bg-green-100 dark:bg-green-900/50", iconColor: "text-green-500 dark:text-green-400" },
  { title: "Projects Built", value: "0", change: "+1 from last week", icon: Code, iconBg: "bg-purple-100 dark:bg-purple-900/50", iconColor: "text-purple-500 dark:text-purple-400" },
  { title: "Current Streak", value: "0", change: "days in a row", icon: TrendingUp, iconBg: "bg-orange-100 dark:bg-orange-900/50", iconColor: "text-orange-500 dark:text-orange-400" },
];

const quickActions = [
    { title: "Continue Learning", icon: BookOpen, href: "/languages" },
    { title: "Daily Challenge", icon: Target, href: "#" },
    { title: "AI Assistant", icon: Bot, href: "#" },
];

const programmingLanguages = [
    {
        id: "js",
        name: "JavaScript",
        description: "Dynamic programming language for web development",
        progress: 65,
        icon: "https://placehold.co/48x48.png",
        hint: "javascript logo"
    },
    {
        id: "pascal",
        name: "Pascal",
        description: "Educational programming language",
        progress: 0,
        icon: "https://placehold.co/48x48.png",
        hint: "pascal logo"
    },
    {
        id: "py",
        name: "Python",
        description: "Versatile language for data science and web development",
        progress: 0,
        icon: "https://placehold.co/48x48.png",
        hint: "python logo"
    },
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
                    <h1 className="text-3xl font-bold font-headline">Welcome back, Git Frp!</h1>
                    <p className="text-lg text-primary-foreground/80 mt-1">Continue your programming journey</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary-foreground/20 rounded-full">Beginner</span>
                        <span className="text-xs text-primary-foreground/80">Member since 2025</span>
                    </div>
                </div>
            </div>
            <div className="text-right hidden md:block">
                <div className="flex gap-8">
                    <div>
                        <p className="text-4xl font-bold font-headline">0</p>
                        <p className="text-sm text-primary-foreground/80">Day Streak</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold font-headline">0</p>
                        <p className="text-sm text-primary-foreground/80">Total Points</p>
                    </div>
                </div>
                 <Button variant="secondary" size="sm" className="mt-4 bg-white/20 hover:bg-white/30 text-white">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </Button>
            </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-transparent p-0 inline-flex border-b w-full mb-6">
          <TabsTrigger value="overview" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">Overview</TabsTrigger>
          <TabsTrigger value="progress" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">Progress</TabsTrigger>
          <TabsTrigger value="awards" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">Awards</TabsTrigger>
          <TabsTrigger value="settings" className="bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary">Settings</TabsTrigger>
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
                    <h2 className="text-2xl font-bold font-headline mb-1">Quick Actions</h2>
                    <p className="text-muted-foreground mb-4">Jump into your learning journey</p>
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
                    <h2 className="text-2xl font-bold font-headline mb-1">Your Programming Languages</h2>
                    <p className="text-muted-foreground mb-4">Master multiple languages and expand your skills</p>
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
                                         <span>Progress</span>
                                         <span>{lang.progress}%</span>
                                     </div>
                                     <Progress value={lang.progress} />
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full" variant="outline">
                                        <Link href={`/languages/${lang.id}`}>
                                            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </TabsContent>
        <TabsContent value="progress"><Card><CardContent className="p-6"><p className="text-muted-foreground text-center">Progress tracking is coming soon!</p></CardContent></Card></TabsContent>
        <TabsContent value="awards"><Card><CardContent className="p-6"><p className="text-muted-foreground text-center">Awards and badges are coming soon!</p></CardContent></Card></TabsContent>
        <TabsContent value="settings"><Card><CardContent className="p-6"><p className="text-muted-foreground text-center">Settings will be available here.</p></CardContent></Card></TabsContent>
      </Tabs>
    </div>
  );
}
