"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, CircleDot, Code, Bot, Save } from 'lucide-react';

const challenges = [
    {
        id: 1,
        title: "Reverse a String",
        description: "Write a function that takes a string as input and returns the string reversed. For example, 'hello' should become 'olleh'.",
        difficulty: "Easy",
        points: 10,
        tests: 5,
        language: "javascript",
    },
    {
        id: 2,
        title: "Palindrome Checker",
        description: "Create a function that checks if a given string is a palindrome. A palindrome is a word that reads the same forwards and backward.",
        difficulty: "Easy",
        points: 15,
        tests: 8,
        language: "javascript",
    },
    {
        id: 3,
        title: "FizzBuzz",
        description: "Implement the classic FizzBuzz problem. Print numbers from 1 to 100, but for multiples of 3 print 'Fizz' and for multiples of 5 print 'Buzz'.",
        difficulty: "Easy",
        points: 10,
        tests: 3,
        language: "python",
    },
     {
        id: 4,
        title: "Find Maximum Subarray",
        description: "Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        difficulty: "Medium",
        points: 25,
        tests: 12,
        language: "python",
    },
    {
        id: 5,
        title: "Two Sum",
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
        difficulty: "Medium",
        points: 20,
        tests: 7,
        language: "javascript",
    },
    {
        id: 6,
        title: "Valid Anagram",
        description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word formed by rearranging the letters of another.",
        difficulty: "Hard",
        points: 30,
        tests: 15,
        language: "python",
    },
];


export default function ChallengesPage() {
    return (
        <div className="relative flex flex-col gap-6 min-h-[calc(100vh-150px)]">
            <div className="flex items-center gap-4 mb-2">
                <Trophy className="h-10 w-10 text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">Challenges</h1>
                    <p className="text-lg text-muted-foreground">Challenge yourself with coding problems and improve your programming skills.</p>
                </div>
            </div>

            <Tabs defaultValue="all-challenges" className="w-full">
                <TabsList>
                    <TabsTrigger value="all-challenges">All Challenges</TabsTrigger>
                    <TabsTrigger value="daily-challenge">Daily Challenge</TabsTrigger>
                    <TabsTrigger value="solve-challenge">Solve Challenge</TabsTrigger>
                    <TabsTrigger value="my-submissions">My Submissions</TabsTrigger>
                </TabsList>

                <TabsContent value="all-challenges" className="mt-6">
                    <div className="flex items-center justify-end mb-6">
                         <Select defaultValue="javascript">
                            <SelectTrigger className="w-[180px]">
                                <div className='flex items-center gap-2'>
                                    <Image src="https://placehold.co/16x16.png" width={16} height={16} alt="JS" data-ai-hint="javascript logo" />
                                    <SelectValue placeholder="Language" />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="javascript">JavaScript</SelectItem>
                                <SelectItem value="python">Python</SelectItem>
                                <SelectItem value="pascal" disabled>Pascal</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {challenges.map((challenge) => (
                             <Card key={challenge.id} className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
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
                                  <p className="flex-grow text-sm text-muted-foreground">{challenge.description}</p>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                                      <CircleDot className="h-4 w-4" />
                                      <span>{challenge.tests} tests</span>
                                  </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                 <TabsContent value="daily-challenge">
                    <Card>
                        <CardContent className="p-6 text-center text-muted-foreground">
                            Daily challenge will be available here.
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="solve-challenge">
                     <Card>
                        <CardContent className="p-6 text-center text-muted-foreground">
                            The interface to solve challenges will appear here.
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="my-submissions">
                     <Card>
                        <CardContent className="p-6 text-center text-muted-foreground">
                            Your past submissions will be listed here.
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
            <div className="fixed right-8 bottom-8 flex flex-col gap-2">
                <Button variant="secondary" size="icon" className="rounded-full shadow-lg h-12 w-12 bg-green-500 hover:bg-green-600 text-white">
                <Code className="h-6 w-6" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full shadow-lg h-12 w-12 bg-blue-500 hover:bg-blue-600 text-white">
                <Bot className="h-6 w-6" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full shadow-lg h-12 w-12 bg-purple-500 hover:bg-purple-600 text-white">
                <Save className="h-6 w-6" />
                </Button>
            </div>
        </div>
    );
}
