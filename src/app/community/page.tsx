
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Heart, Eye, Search, PlusCircle, User, Users, BarChart } from "lucide-react";
import { useLanguage } from "@/context/language-provider";

const postsData = [
    {
        id: 1,
        author: { name: 'Alice', avatar: 'https://placehold.co/40x40.png', hint: 'profile avatar' },
        time: '2 hours ago',
        title: 'How do closures work in JavaScript?',
        content: 'I\'m having a hard time understanding closures. Can someone explain it with a simple example?',
        tags: ['javascript', 'closures', 'beginner'],
        likes: 15,
        comments: 4,
        views: 120,
    },
    {
        id: 2,
        author: { name: 'Bob', avatar: 'https://placehold.co/40x40.png', hint: 'profile avatar' },
        time: '5 hours ago',
        title: 'Best practices for Python list comprehensions',
        content: 'What are some of the best practices for writing clean and efficient list comprehensions in Python? I am looking for some advanced tips.',
        tags: ['python', 'best-practices', 'performance'],
        likes: 42,
        comments: 12,
        views: 450,
    },
    {
        id: 3,
        author: { name: 'Charlie', avatar: 'https://placehold.co/40x40.png', hint: 'profile avatar' },
        time: '1 day ago',
        title: 'Project Idea: Building a REST API with Go',
        content: 'I want to start a new project to practice my Go skills. Thinking about building a simple REST API for a blog. Any suggestions on libraries to use?',
        tags: ['go', 'project-idea', 'api'],
        likes: 28,
        comments: 7,
        views: 310,
    },
    {
        id: 4,
        author: { name: 'Diana', avatar: 'https://placehold.co/40x40.png', hint: 'profile avatar' },
        time: '2 days ago',
        title: 'Understanding pointers in C++',
        content: 'Pointers in C++ are confusing me. What\'s the difference between a pointer and a reference? When should I use one over the other?',
        tags: ['c++', 'pointers', 'memory'],
        likes: 35,
        comments: 9,
        views: 550,
    },
    {
        id: 5,
        author: { name: 'Eve', avatar: 'https://placehold.co/40x40.png', hint: 'profile avatar' },
        time: '3 days ago',
        title: 'Java Threads vs. Executors',
        content: 'What are the pros and cons of using raw Threads versus the Executor framework in Java for concurrency?',
        tags: ['java', 'concurrency', 'threads'],
        likes: 51,
        comments: 15,
        views: 820,
    },
    {
        id: 6,
        author: { name: 'Frank', avatar: 'https://placehold.co/40x40.png', hint: 'profile avatar' },
        time: '4 days ago',
        title: 'Showcase: I built a weather app with React',
        content: 'Just finished my first major React project, a weather application using the OpenWeatherMap API. Check it out and let me know what you think!',
        tags: ['react', 'javascript', 'showcase', 'api'],
        likes: 78,
        comments: 22,
        views: 1100,
    },
    {
        id: 7,
        author: { name: 'Grace', avatar: 'https://placehold.co/40x40.png', hint: 'profile avatar' },
        time: '5 days ago',
        title: 'How to handle state in large Go applications?',
        content: 'What are some common patterns for managing application state in larger Go projects? I\'m trying to avoid global state.',
        tags: ['go', 'architecture', 'state-management'],
        likes: 22,
        comments: 6,
        views: 280,
    },
    {
        id: 8,
        author: { name: 'Heidi', avatar: 'https://placehold.co/40x40.png', hint: 'profile avatar' },
        time: '6 days ago',
        title: 'Is Rust the future of systems programming?',
        content: 'I\'ve been hearing a lot about Rust\'s safety features and performance. For those who have made the switch from C++, was it worth it?',
        tags: ['rust', 'c++', 'systems'],
        likes: 150,
        comments: 45,
        views: 2500,
    },
    {
        id: 9,
        author: { name: 'Ivan', avatar: 'https://placehold.co/40x40.png', hint: 'profile avatar' },
        time: '1 week ago',
        title: 'Learning data structures in Python',
        content: 'I\'m starting to learn about data structures. I\'ve covered lists and dictionaries, what should I learn next? Stacks, queues, trees?',
        tags: ['python', 'dsa', 'beginner'],
        likes: 40,
        comments: 18,
        views: 900,
    }
];

const trendingTopicsData = ["JavaScript", "Python", "Data Structures", "Next.js", "AI/ML", "Go", "C++"];
const featuredMembersData = [
    { name: "Diana", avatar: "https://placehold.co/40x40.png", hint: 'profile avatar' },
    { name: "Eve", avatar: "https://placehold.co/40x40.png", hint: 'profile avatar' },
    { name: "Frank", avatar: "https://placehold.co/40x40.png", hint: 'profile avatar' },
    { name: "Grace", avatar: "https://placehold.co/40x40.png", hint: 'profile avatar' },
    { name: "Heidi", avatar: "https://placehold.co/40x40.png", hint: 'profile avatar' },
];

export default function CommunityPage() {
    const { t } = useLanguage();
    const [posts, setPosts] = useState(postsData);
    const [trendingTopics, setTrendingTopics] = useState(trendingTopicsData);
    const [featuredMembers, setFeaturedMembers] = useState(featuredMembersData);

    return (
        <>
            <PageHeader title={t('community_hub')} description={t('ask_share_connect')}>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    {t('start_new_discussion')}
                </Button>
            </PageHeader>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                {/* Main content */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder={t('search_discussions')} className="pl-10" />
                    </div>

                    <div className="space-y-6">
                        {posts.map(post => (
                            <Card key={post.id} className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src={post.author.avatar} alt={post.author.name} data-ai-hint={post.author.hint}/>
                                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold">{post.author.name}</p>
                                            <p className="text-xs text-muted-foreground">{post.time}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-xl font-bold font-headline mb-2">{post.title}</h3>
                                    <p className="text-muted-foreground mb-4">{post.content}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                    </div>
                                </CardContent>
                                <CardFooter className="justify-between">
                                    <div className="flex gap-4 text-muted-foreground text-sm">
                                        <div className="flex items-center gap-1">
                                            <Heart className="h-4 w-4" />
                                            <span>{post.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageSquare className="h-4 w-4" />
                                            <span>{post.comments}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Eye className="h-4 w-4" />
                                            <span>{post.views}</span>
                                        </div>
                                    </div>
                                    <Button variant="outline">{t('view_discussion')}</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6 lg:sticky lg:top-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('trending_topics')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {trendingTopics.map(topic => (
                                    <li key={topic}>
                                        <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">{topic}</Button>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('community_stats')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex items-center gap-3">
                                <Users className="h-6 w-6 text-primary"/>
                                <div>
                                    <p className="font-bold text-lg">12,405</p>
                                    <p className="text-sm text-muted-foreground">{t('total_members')}</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-3">
                                <BarChart className="h-6 w-6 text-primary"/>
                                <div>
                                    <p className="font-bold text-lg">1,832</p>
                                    <p className="text-sm text-muted-foreground">{t('active_discussions')}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>{t('featured_members')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {featuredMembers.map(member => (
                                     <li key={member.name} className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="font-medium">{member.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </>
    )
}
