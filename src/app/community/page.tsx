
"use client";

import { PageHeader } from "@/components/admin/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Heart, Eye, Search, PlusCircle, User, Users, BarChart } from "lucide-react";

const posts = [
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
];

const trendingTopics = ["JavaScript", "Python", "Data Structures", "Next.js", "AI/ML"];
const featuredMembers = [
    { name: "Diana", avatar: "https://placehold.co/40x40.png", hint: 'profile avatar' },
    { name: "Eve", avatar: "https://placehold.co/40x40.png", hint: 'profile avatar' },
    { name: "Frank", avatar: "https://placehold.co/40x40.png", hint: 'profile avatar' },
    { name: "Grace", avatar: "https://placehold.co/40x40.png", hint: 'profile avatar' },
];

export default function CommunityPage() {
    return (
        <>
            <PageHeader title="Community Hub" description="Ask questions, share knowledge, and connect with other learners.">
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Start New Discussion
                </Button>
            </PageHeader>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                {/* Main content */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Search discussions..." className="pl-10" />
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
                                    <Button variant="outline">View Discussion</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6 lg:sticky lg:top-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Trending Topics</CardTitle>
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
                            <CardTitle>Community Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex items-center gap-3">
                                <Users className="h-6 w-6 text-primary"/>
                                <div>
                                    <p className="font-bold text-lg">12,405</p>
                                    <p className="text-sm text-muted-foreground">Total Members</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-3">
                                <BarChart className="h-6 w-6 text-primary"/>
                                <div>
                                    <p className="font-bold text-lg">1,832</p>
                                    <p className="text-sm text-muted-foreground">Active Discussions</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Featured Members</CardTitle>
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
