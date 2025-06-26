
"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, CircleDot, ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from "@/context/language-provider";
import { useProgrammingLanguage } from "@/context/programming-language-provider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const challengesData = [
    {
        id: 1,
        title: "Reverse a String",
        description: "Write a function that takes a string as input and returns the string reversed. For example, 'hello' should become 'olleh'.",
        difficulty: "Easy",
        points: 10,
        tests: 5,
        language: "js",
    },
    {
        id: 2,
        title: "Palindrome Checker",
        description: "Create a function that checks if a given string is a palindrome. A palindrome is a word that reads the same forwards and backward.",
        difficulty: "Easy",
        points: 15,
        tests: 8,
        language: "js",
    },
    {
        id: 3,
        title: "FizzBuzz",
        description: "Implement the classic FizzBuzz problem. Print numbers from 1 to 100, but for multiples of 3 print 'Fizz' and for multiples of 5 print 'Buzz'.",
        difficulty: "Easy",
        points: 10,
        tests: 3,
        language: "py",
    },
     {
        id: 4,
        title: "Find Maximum Subarray",
        description: "Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        difficulty: "Medium",
        points: 25,
        tests: 12,
        language: "py",
    },
    {
        id: 5,
        title: "Two Sum",
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
        difficulty: "Medium",
        points: 20,
        tests: 7,
        language: "js",
    },
    {
        id: 6,
        title: "Valid Anagram",
        description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word formed by rearranging the letters of another.",
        difficulty: "Medium",
        points: 30,
        tests: 15,
        language: "py",
    },
    {
        id: 7,
        title: "Binary Search",
        description: "Given a sorted array of integers, write a function that searches for a target value. If the target exists, return its index; otherwise, return -1.",
        difficulty: "Medium",
        points: 25,
        tests: 10,
        language: "java",
    },
    {
        id: 8,
        title: "Longest Common Prefix",
        description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
        difficulty: "Easy",
        points: 15,
        tests: 9,
        language: "go",
    },
    {
        id: 9,
        title: "Linked List Cycle",
        description: "Given a linked list, determine if it has a cycle in it. To represent a cycle, we use an integer `pos` which denotes the position.",
        difficulty: "Hard",
        points: 40,
        tests: 11,
        language: "cpp",
    },
    {
        id: 10,
        title: "Implement Queue using Stacks",
        description: "Implement a first in, first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue.",
        difficulty: "Hard",
        points: 45,
        tests: 18,
        language: "js",
    },
    {
        id: 11,
        title: "Fibonacci Number",
        description: "Write a function to compute the nth Fibonacci number. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.",
        difficulty: "Easy",
        points: 10,
        tests: 6,
        language: "py",
    },
    {
        id: 12,
        title: "Merge Two Sorted Lists",
        description: "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
        difficulty: "Medium",
        points: 30,
        tests: 14,
        language: "java",
    },
    {
        id: 13,
        title: "Maximum Depth of Binary Tree",
        description: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path.",
        difficulty: "Easy",
        points: 15,
        tests: 8,
        language: "py",
    },
    {
        id: 14,
        title: "Container With Most Water",
        description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
        difficulty: "Medium",
        points: 35,
        tests: 10,
        language: "js",
    },
    {
        id: 15,
        title: "Trapping Rain Water",
        description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        difficulty: "Hard",
        points: 50,
        tests: 20,
        language: "go",
    }
];

const submissionsData = [
    { id: 1, challengeTitle: "Reverse a String", language: "js", status: "Accepted", date: "2024-07-28" },
    { id: 2, challengeTitle: "FizzBuzz", language: "py", status: "Accepted", date: "2024-07-27" },
    { id: 3, challengeTitle: "Two Sum", language: "js", status: "Wrong Answer", date: "2024-07-26" },
    { id: 4, challengeTitle: "Palindrome Checker", language: "js", status: "Accepted", date: "2024-07-25" },
];


export default function ChallengesPage() {
    const { t } = useLanguage();
    const { selectedLanguage } = useProgrammingLanguage();
    const [dailyChallenge, setDailyChallenge] = useState<typeof challengesData[0] | null>(null);

    useEffect(() => {
        const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
        const challengeIndex = dayOfYear % challengesData.length;
        setDailyChallenge(challengesData[challengeIndex]);
    }, []);

    const filteredChallenges = useMemo(() => {
        if (selectedLanguage === 'all') {
            return challengesData;
        }
        return challengesData.filter(challenge => challenge.language === selectedLanguage);
    }, [selectedLanguage]);

    return (
        <div className="relative flex flex-col gap-6 min-h-[calc(100vh-150px)]">
            <div className="flex items-center gap-4 mb-2">
                <Trophy className="h-10 w-10 text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">{t('challenges')}</h1>
                    <p className="text-lg text-muted-foreground">{t('challenge_yourself')}</p>
                </div>
            </div>

            <Tabs defaultValue="all-challenges" className="w-full">
                <TabsList>
                    <TabsTrigger value="all-challenges">{t('all_challenges')}</TabsTrigger>
                    <TabsTrigger value="daily-challenge">{t('daily_challenge_tab')}</TabsTrigger>
                    <TabsTrigger value="my-submissions">{t('my_submissions')}</TabsTrigger>
                </TabsList>

                <TabsContent value="all-challenges" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredChallenges.map((challenge) => (
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
                        {filteredChallenges.length === 0 && (
                             <Card className="md:col-span-2 lg:col-span-3">
                                <CardContent className="p-6 text-center text-muted-foreground">
                                    <p>{t('no_challenges_for_language')}</p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </TabsContent>
                 <TabsContent value="daily-challenge" className="mt-6">
                    {dailyChallenge ? (
                         <Card className="bg-gradient-to-br from-primary/10 to-background">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Calendar className="h-5 w-5" />
                                        <CardTitle className="text-2xl font-headline">{t('daily_challenge_title')}</CardTitle>
                                    </div>
                                    <Badge variant="outline">{new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}</Badge>
                                </div>
                                <CardDescription>{t('daily_challenge_desc')}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                 <h2 className="text-xl font-bold">{dailyChallenge.title}</h2>
                                 <p className="text-muted-foreground">{dailyChallenge.description}</p>
                                 <div className="flex items-center gap-4 text-sm">
                                      <Badge variant={
                                          dailyChallenge.difficulty === 'Easy' ? 'secondary' :
                                          dailyChallenge.difficulty === 'Medium' ? 'outline' : 'default'
                                      }>{dailyChallenge.difficulty}</Badge>
                                      <div className="flex items-center gap-1 text-yellow-500">
                                          <Star className="h-4 w-4 fill-current" />
                                          <span className="font-semibold text-muted-foreground">{dailyChallenge.points} pts</span>
                                      </div>
                                      <div className="flex items-center gap-1 text-muted-foreground">
                                          <CircleDot className="h-4 w-4" />
                                          <span>{dailyChallenge.tests} tests</span>
                                      </div>
                                 </div>
                                 <Button size="lg" className="mt-4">
                                     {t('start_challenge')} <ArrowRight className="ml-2 h-4 w-4" />
                                 </Button>
                            </CardContent>
                        </Card>
                    ) : (
                         <Card>
                            <CardContent className="p-6 text-center text-muted-foreground">
                                {t('daily_challenge_loading')}
                            </CardContent>
                        </Card>
                    )}
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
                                    {submissionsData.map((sub) => (
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
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
