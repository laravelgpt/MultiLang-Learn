
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Loader2, BrainCircuit, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { useLanguage } from "@/context/language-provider";
import { useToast } from "@/hooks/use-toast";
import { generateTasksForTopic } from "@/ai/flows/generate-tasks-for-topic";

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
type TaskWithStatus = Task & { status?: TaskStatus };


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

const TaskCard = ({ task, onEdit, onDelete }: { task: Task, onEdit: () => void, onDelete: () => void }) => {
    const { t } = useLanguage();
    return (
        <Card className="mb-4 bg-card hover:shadow-md transition-shadow cursor-grab group">
            <CardContent className="p-4 relative">
                 <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onSelect={onEdit}><Edit className="mr-2 h-4 w-4" />{t('edit_task')}</DropdownMenuItem>
                            <DropdownMenuItem onSelect={onDelete} className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />{t('delete_task')}</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <h4 className="font-semibold mb-2 pr-8">{task.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                <div className="flex flex-wrap gap-1">
                    {task.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

const ManualTaskForm = ({ title, desc, tags, onTitleChange, onDescChange, onTagsChange }: any) => (
    <div className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="title">Task Title</Label>
            <Input id="title" value={title} onChange={(e) => onTitleChange(e.target.value)} placeholder="e.g., Learn about closures" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" value={desc} onChange={(e) => onDescChange(e.target.value)} placeholder="e.g., Read documentation and build a small example" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input id="tags" value={tags} onChange={(e) => onTagsChange(e.target.value)} placeholder="e.g., JavaScript, Learning, Reading" />
            <p className="text-xs text-muted-foreground">Separate tags with a comma.</p>
        </div>
    </div>
);


export default function TasksPage() {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [tasks, setTasks] = useState(initialTasks);
    
    const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [taskToDelete, setTaskToDelete] = useState<TaskWithStatus | null>(null);
    const [currentStatus, setCurrentStatus] = useState<TaskStatus>('todo');

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskDesc, setNewTaskDesc] = useState("");
    const [newTaskTags, setNewTaskTags] = useState("");
    const [aiTopic, setAiTopic] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    
    const columnTitles: Record<TaskStatus, string> = {
        todo: t('todo'),
        inProgress: t('in_progress'),
        done: t('done'),
    };

    const resetDialogState = () => {
        setIsTaskDialogOpen(false);
        setEditingTask(null);
        setNewTaskTitle("");
        setNewTaskDesc("");
        setNewTaskTags("");
        setAiTopic("");
    };
    
    const handleOpenAddDialog = () => {
        resetDialogState();
        setIsTaskDialogOpen(true);
    };

    const handleEditClick = (task: Task, status: TaskStatus) => {
        setEditingTask(task);
        setCurrentStatus(status);
        setNewTaskTitle(task.title);
        setNewTaskDesc(task.description);
        setNewTaskTags(task.tags.join(', '));
        setIsTaskDialogOpen(true);
    };

    const handleDeleteClick = (task: Task, status: TaskStatus) => {
        setTaskToDelete({ ...task, status });
        setIsDeleteConfirmOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (!taskToDelete?.status) return;

        setTasks(prev => {
            const newStatusTasks = prev[taskToDelete.status!].filter(t => t.id !== taskToDelete.id);
            return { ...prev, [taskToDelete.status!]: newStatusTasks };
        });

        toast({ title: "Task Deleted", description: `"${taskToDelete.title}" has been removed.` });
        setIsDeleteConfirmOpen(false);
        setTaskToDelete(null);
    };

    const handleSaveTask = () => {
        if (!newTaskTitle) {
            toast({ title: "Title is required", variant: "destructive" });
            return;
        }

        if (editingTask) {
            const updatedTask: Task = {
                ...editingTask,
                title: newTaskTitle,
                description: newTaskDesc,
                tags: newTaskTags.split(',').map(tag => tag.trim()).filter(Boolean),
            };
            setTasks(prev => {
                const newStatusTasks = prev[currentStatus].map(t => t.id === updatedTask.id ? updatedTask : t);
                return { ...prev, [currentStatus]: newStatusTasks };
            });
            toast({ title: t('task_updated') });
        } else {
            const newTask: Task = {
                id: `task-${Date.now()}`,
                title: newTaskTitle,
                description: newTaskDesc,
                tags: newTaskTags.split(',').map(tag => tag.trim()).filter(Boolean),
            };
            setTasks(prev => ({ ...prev, todo: [newTask, ...prev.todo] }));
            toast({ title: t('task_added'), description: `"${newTask.title}" has been added.` });
        }
        resetDialogState();
    };

    const handleGenerateTasks = async () => {
        if (!aiTopic) {
            toast({ title: "Topic is required", variant: "destructive" });
            return;
        }
        setIsGenerating(true);
        try {
            const result = await generateTasksForTopic({ topic: aiTopic });
            const newTasks = result.tasks.map((task, index) => ({
                ...task,
                id: `task-${Date.now()}-${index}`
            }));
            setTasks(prev => ({ ...prev, todo: [...newTasks, ...prev.todo] }));
            toast({ title: "Tasks Generated", description: `${newTasks.length} tasks for "${aiTopic}" have been added.` });
            resetDialogState();
        } catch (error) {
            console.error(error);
            toast({ title: "Generation Failed", description: "Could not generate tasks. Please try again.", variant: "destructive" });
        } finally {
            setIsGenerating(false);
        }
    };


    return (
        <>
            <PageHeader title={t('tasks_title')} description={t('tasks_description')}>
                <Button onClick={handleOpenAddDialog}>
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
                                <TaskCard 
                                    key={task.id} 
                                    task={task} 
                                    onEdit={() => handleEditClick(task, status)}
                                    onDelete={() => handleDeleteClick(task, status)}
                                />
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Dialog open={isTaskDialogOpen} onOpenChange={(isOpen) => {
                if (!isOpen) resetDialogState();
                setIsTaskDialogOpen(isOpen);
            }}>
                <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>{editingTask ? t('edit_task') : t('add_new_task')}</DialogTitle>
                         {!editingTask && <DialogDescription>{t('add_task_desc')}</DialogDescription>}
                    </DialogHeader>

                    {editingTask ? (
                         <div className="py-4">
                            <ManualTaskForm 
                                title={newTaskTitle}
                                desc={newTaskDesc}
                                tags={newTaskTags}
                                onTitleChange={setNewTaskTitle}
                                onDescChange={setNewTaskDesc}
                                onTagsChange={setNewTaskTags}
                            />
                            <DialogFooter className="pt-6">
                                <Button variant="outline" onClick={resetDialogState}>{t('cancel')}</Button>
                                <Button onClick={handleSaveTask}>{t('save_changes')}</Button>
                            </DialogFooter>
                         </div>
                    ) : (
                         <Tabs defaultValue="manual" className="pt-4">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="manual">{t('add_manually')}</TabsTrigger>
                                <TabsTrigger value="ai">{t('generate_with_ai')}</TabsTrigger>
                            </TabsList>
                            <TabsContent value="manual" className="pt-4">
                                <ManualTaskForm 
                                    title={newTaskTitle}
                                    desc={newTaskDesc}
                                    tags={newTaskTags}
                                    onTitleChange={setNewTaskTitle}
                                    onDescChange={setNewTaskDesc}
                                    onTagsChange={setNewTaskTags}
                                />
                                 <DialogFooter className="pt-6">
                                    <Button variant="outline" onClick={resetDialogState}>{t('cancel')}</Button>
                                    <Button onClick={handleSaveTask}>{t('add_task')}</Button>
                                </DialogFooter>
                            </TabsContent>
                            <TabsContent value="ai" className="pt-4">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="topic">{t('learning_topic')}</Label>
                                        <Input id="topic" value={aiTopic} onChange={(e) => setAiTopic(e.target.value)} placeholder="e.g., JavaScript Promises" />
                                        <p className="text-xs text-muted-foreground">{t('ai_task_desc')}</p>
                                    </div>
                                </div>
                                <DialogFooter className="pt-6">
                                    <Button variant="outline" onClick={resetDialogState} disabled={isGenerating}>{t('cancel')}</Button>
                                    <Button onClick={handleGenerateTasks} disabled={isGenerating}>
                                        {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <BrainCircuit className="mr-2 h-4 w-4" />}
                                        {isGenerating ? t('generating') : t('generate_tasks')}
                                    </Button>
                                </DialogFooter>
                            </TabsContent>
                        </Tabs>
                    )}
                </DialogContent>
            </Dialog>

             <AlertDialog open={isDeleteConfirmOpen} onOpenChange={setIsDeleteConfirmOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t('are_you_sure')}</AlertDialogTitle>
                        <AlertDialogDescription>
                           {t('delete_task_confirm', { taskTitle: taskToDelete?.title || '' })}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive hover:bg-destructive/90">
                           {t('delete')}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
