
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FolderKanban, ArrowRight } from 'lucide-react';
import { useLanguage } from "@/context/language-provider";

const projectsData = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "Build a responsive personal portfolio to showcase your skills and projects. A great way to learn HTML, CSS, and basic JavaScript.",
        category: "web",
        difficulty: "Easy",
        technologies: ["HTML", "CSS", "JavaScript"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "portfolio website design",
    },
    {
        id: 2,
        title: "Weather Forecast App",
        description: "Create an application that fetches and displays weather data from a third-party API for any city.",
        category: "web",
        difficulty: "Medium",
        technologies: ["React", "API", "JavaScript"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "weather forecast interface",
    },
    {
        id: 3,
        title: "Simple Tic-Tac-Toe Game",
        description: "Implement the classic game of Tic-Tac-Toe. This project will solidify your understanding of game logic and state management.",
        category: "games",
        difficulty: "Easy",
        technologies: ["JavaScript"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "tic tac toe",
    },
    {
        id: 4,
        title: "Data Analysis with Pandas",
        description: "Analyze a sample dataset using the Python Pandas library to extract insights and create visualizations.",
        category: "data-science",
        difficulty: "Medium",
        technologies: ["Python", "Pandas", "Jupyter"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "data analysis chart",
    },
    {
        id: 5,
        title: "To-Do List Application",
        description: "A classic beginner project. Build a to-do list app that allows users to add, edit, and delete tasks.",
        category: "web",
        difficulty: "Easy",
        technologies: ["React", "State Management"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "todo list app",
    },
    {
        id: 6,
        title: "Snake Game Clone",
        description: "Recreate the iconic Snake game. This project is great for practicing DOM manipulation and game loop concepts.",
        category: "games",
        difficulty: "Medium",
        technologies: ["HTML Canvas", "JavaScript"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "retro snake game",
    },
    {
        id: 7,
        title: "Movie Recommendation Engine",
        description: "Build a simple movie recommender system based on user ratings or genres using Python and scikit-learn.",
        category: "data-science",
        difficulty: "Hard",
        technologies: ["Python", "scikit-learn", "AI/ML"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "movie posters collage",
    },
    {
        id: 8,
        title: "REST API for a Blog",
        description: "Design and implement a RESTful API for a blog platform, with endpoints for posts, users, and comments.",
        category: "web",
        difficulty: "Hard",
        technologies: ["Go", "API", "Databases"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "api code backend",
    }
];

export default function MiniProjectsPage() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState("all");
    const [allProjects] = useState(projectsData);

    const filteredProjects = allProjects.filter(p => filter === 'all' || p.category === filter);
    
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <FolderKanban className="h-10 w-10 text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">{t('mini_projects')}</h1>
                    <p className="text-lg text-muted-foreground">{t('apply_your_skills')}</p>
                </div>
            </div>

            <Tabs value={filter} onValueChange={setFilter}>
                <TabsList>
                    <TabsTrigger value="all">{t('all_projects')}</TabsTrigger>
                    <TabsTrigger value="web">{t('web')}</TabsTrigger>
                    <TabsTrigger value="data-science">{t('data_science')}</TabsTrigger>
                    <TabsTrigger value="games">{t('games')}</TabsTrigger>
                </TabsList>
                
                <TabsContent value={filter} className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                             <Card key={project.id} className="flex flex-col hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="relative h-40 w-full mb-4">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            fill
                                            className="rounded-t-lg object-cover"
                                            data-ai-hint={project.imageHint}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map(tech => (
                                                <Badge key={tech} variant="secondary">{tech}</Badge>
                                            ))}
                                        </div>
                                        <Badge variant={
                                            project.difficulty === 'Easy' ? 'secondary' :
                                            project.difficulty === 'Medium' ? 'outline' : 'default'
                                        }>{project.difficulty}</Badge>
                                    </div>
                                    <CardTitle className="pt-4">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                  <p className="text-sm text-muted-foreground">{project.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        {t('start_project')} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                     {filteredProjects.length === 0 && (
                        <div className="text-center py-16 text-muted-foreground">
                            <p>{t('no_projects_in_category')}</p>
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
