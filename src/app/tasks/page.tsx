
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from 'lucide-react';
import { useLanguage } from "@/context/language-provider";

const initialTasks = {
    todo: [
        { id: 'task-1', title: 'Setup development environment', description: 'Install Node.js, Git, and VS Code.', tags: ['Setup'] },
        { id: 'task-2', title: 'Complete "JavaScript Basics" module', description: 'Finish all lessons in the introductory JS module.', tags: ['JavaScript', 'Learning'] },
        { id: 'task-3', title: 'Read about REST APIs', description: 'Understand the basic principles of RESTful services.', tags: ['Research', 'API'] },
    ],
    inProgress: [
        { id: 'task-4', title: 'Build a personal portfolio website', description: 'Working on the HTML and CSS structure.', tags: ['Project', 'Web'] },
        { id: 'task-5', title: 'Solve "Two Sum" challenge', description: 'Currently working on an optimized solution.', tags: ['Challenge', 'JavaScript'] },
    ],
    done: [
        { id: 'task-6', title: 'Create LearnCode account', description: 'Successfully registered and set up profile.', tags: ['Onboarding'] },
        { id: 'task-7', title: 'Complete "Introduction to Python" topic', description: 'Finished all introductory lessons.', tags: ['Python', 'Learning'] },
    ]
};

type Task = {
    id: string;
    title: string;
    description: string;
    tags: string[];
};

type TaskStatus = 'todo' | 'inProgress' | 'done';

const columnStyles: Record<TaskStatus, string> = {
    todo: 'border-yellow-500',
    inProgress: 'border-blue-500',
    done: 'border-green-500',
};

const columnTitleStyles: Record<TaskStatus, string> = {
    todo: 'text-yellow-600 dark:text-yellow-400',
    inProgress: 'text-blue-600 dark:text-blue-400',
    done: 'text-green-600 dark:text-green-400',
};

const TaskCard = ({ task }: { task: Task }) => (
    <Card className="mb-4 bg-card hover:shadow-md transition-shadow cursor-grab">
        <CardContent className="p-4">
            <h4 className="font-semibold mb-2">{task.title}</h4>
            <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
            <div className="flex flex-wrap gap-1">
                {task.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
        </CardContent>
    </Card>
);

export default function TasksPage() {
    const { t } = useLanguage();
    const [tasks, setTasks] = useState(initialTasks);
    
    const columnTitles: Record<TaskStatus, string> = {
        todo: t('todo'),
        inProgress: t('in_progress'),
        done: t('done'),
    };

    return (
        <>
            <PageHeader title={t('tasks_title')} description={t('tasks_description')}>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    {t('add_new_task')}
                </Button>
            </PageHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(Object.keys(tasks) as TaskStatus[]).map((status) => (
                    <Card key={status} className={`border-t-4 ${columnStyles[status]}`}>
                        <CardHeader>
                            <CardTitle className={`flex items-center justify-between ${columnTitleStyles[status]}`}>
                                <span>{columnTitles[status]}</span>
                                <span className="text-sm font-normal bg-muted text-muted-foreground rounded-full px-2 py-0.5">{tasks[status].length}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="min-h-[200px]">
                            {tasks[status].map(task => (
                                <TaskCard key={task.id} task={task} />
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}
