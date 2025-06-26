
"use client";

import { useState, useMemo, useEffect } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MoreVertical, PlusCircle, Edit, Trash2, FileText, Youtube, Code, Link as LinkIcon, ArrowLeft, BrainCircuit, Loader2 } from "lucide-react";
import Link from 'next/link';
import { getLanguageCurriculum, getQuickQuestions } from "@/services/languageService";
import type { Topic, Lesson, Attachment, LanguageCurriculum } from "@/lib/mock-data";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { generateTopicsAction, saveTopicAction, deleteTopicAction, saveLessonAction, deleteLessonAction, saveQuickQuestionsAction } from "@/actions/languageActions";
import { Textarea } from "@/components/ui/textarea";

const AttachmentIcon = ({ type }: { type: Attachment['type'] }) => {
  switch (type) {
    case 'pdf': return <FileText className="w-4 h-4 text-muted-foreground" />;
    case 'youtube': return <Youtube className="w-4 h-4 text-red-500" />;
    case 'code': return <Code className="w-4 h-4 text-blue-500" />;
    case 'link': return <LinkIcon className="w-4 h-4 text-muted-foreground" />;
    default: return null;
  }
};

type DeletionState = 
    | { type: 'topic'; id: string }
    | { type: 'lesson'; id: string; topicId: string }
    | null;

export default function LanguageTopicsPage({ params }: { params: { langId: string } }) {
  const { toast } = useToast();
  const [language, setLanguage] = useState<LanguageCurriculum | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quickQuestionsText, setQuickQuestionsText] = useState("");

  // Dialog states
  const [isTopicDialogOpen, setTopicDialogOpen] = useState(false);
  const [editingTopic, setEditingTopic] = useState<Partial<Topic> | null>(null);
  
  const [isLessonDialogOpen, setLessonDialogOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Partial<Lesson> | null>(null);
  const [currentTopicId, setCurrentTopicId] = useState<string | null>(null);

  const [isAiDialogOpen, setAiDialogOpen] = useState(false);

  const [deletionState, setDeletionState] = useState<DeletionState>(null);

  const fetchLanguageData = async () => {
    setIsLoading(true);
    const [curriculum, quickQuestions] = await Promise.all([
      getLanguageCurriculum(params.langId),
      getQuickQuestions(params.langId)
    ]);
    setLanguage(curriculum);
    setQuickQuestionsText(quickQuestions?.join('\n') || "");
    setIsLoading(false);
  }

  useEffect(() => {
    fetchLanguageData();
  }, [params.langId]);
  
  // Topic Handlers
  const handleAddNewTopic = () => {
    setEditingTopic({ title: '' });
    setTopicDialogOpen(true);
  };
  
  const handleEditTopic = (topic: Topic) => {
    setEditingTopic({ ...topic });
    setTopicDialogOpen(true);
  };
  
  const handleTopicFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const result = await saveTopicAction(formData);
    if (result?.error) {
      toast({ title: "Error", description: result.error, variant: "destructive" });
    } else {
      toast({ title: "Success", description: result.message });
      setTopicDialogOpen(false);
      setEditingTopic(null);
      await fetchLanguageData();
    }
    setIsSubmitting(false);
  };

  const handleDeleteTopic = async (topicId: string) => {
    setIsSubmitting(true);
    const result = await deleteTopicAction(params.langId, topicId);
    if (result?.error) {
        toast({ title: "Error", description: result.error, variant: "destructive" });
    } else {
        toast({ title: "Success", description: result.message });
        setDeletionState(null);
        await fetchLanguageData();
    }
    setIsSubmitting(false);
  };
  
  // Lesson Handlers
  const handleAddNewLesson = (topicId: string) => {
    setCurrentTopicId(topicId);
    setEditingLesson({ title: '', difficulty: 'Beginner', content: '', codeSnippet: '', attachments: [] });
    setLessonDialogOpen(true);
  };

  const handleEditLesson = (lesson: Lesson, topicId: string) => {
    setCurrentTopicId(topicId);
    setEditingLesson({ ...lesson });
    setLessonDialogOpen(true);
  };
  
  const handleLessonFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const result = await saveLessonAction(formData);
    if (result?.error) {
        toast({ title: "Error", description: result.error, variant: "destructive" });
    } else {
        toast({ title: "Success", description: result.message });
        setLessonDialogOpen(false);
        setEditingLesson(null);
        setCurrentTopicId(null);
        await fetchLanguageData();
    }
    setIsSubmitting(false);
  };
  
  const handleDeleteLesson = async (topicId: string, lessonId: string) => {
    setIsSubmitting(true);
    const result = await deleteLessonAction(params.langId, topicId, lessonId);
    if (result?.error) {
        toast({ title: "Error", description: result.error, variant: "destructive" });
    } else {
        toast({ title: "Success", description: result.message });
        setDeletionState(null);
        await fetchLanguageData();
    }
    setIsSubmitting(false);
  };
  
  // AI Generation Handlers
  const handleAiFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const result = await generateTopicsAction(formData);
    if (result?.error) {
        toast({ title: "Error", description: result.error, variant: "destructive" });
    } else if (result?.success) {
        toast({ title: "Topics Generated", description: result.message });
        setAiDialogOpen(false);
        await fetchLanguageData();
    }
    setIsSubmitting(false);
  };

  // Quick Questions Handler
  const handleQuickQuestionsFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const result = await saveQuickQuestionsAction(formData);
    if (result?.error) {
        toast({ title: "Error", description: result.error, variant: "destructive" });
    } else {
        toast({ title: "Success", description: result.message });
    }
    setIsSubmitting(false);
  };


  if (isLoading) {
    return (
      <>
        <PageHeader title="Loading..." />
        <div className="space-y-4">
          <Card>
            <CardHeader><Skeleton className="h-8 w-1/3" /></CardHeader>
            <CardContent><Skeleton className="h-20 w-full" /></CardContent>
          </Card>
           <Card>
            <CardHeader><Skeleton className="h-8 w-1/3" /></CardHeader>
            <CardContent><Skeleton className="h-40 w-full" /></CardContent>
          </Card>
        </div>
      </>
    )
  }
  
  if (!language) {
     return (
        <PageHeader title="Language not found">
             <Button variant="outline" asChild>
                <Link href="/admin/languages"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Languages</Link>
            </Button>
        </PageHeader>
     )
  }

  const topics = language.topics || [];

  return (
    <>
      <PageHeader title={`Manage: ${language.name}`}>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/languages"><ArrowLeft className="mr-2 h-4 w-4" /> Back</Link>
          </Button>
          <Button onClick={handleAddNewTopic}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Topic
          </Button>
           <Button onClick={() => setAiDialogOpen(true)}>
            <BrainCircuit className="mr-2 h-4 w-4" />
            Generate with AI
          </Button>
        </div>
      </PageHeader>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                <CardTitle>Topics & Lessons</CardTitle>
                <CardDescription>Organize lessons under different topics for {language.name}.</CardDescription>
                </CardHeader>
                <CardContent>
                <Accordion type="multiple" className="w-full" defaultValue={topics.length > 0 ? [topics[0].id] : []}>
                    {topics.map((topic) => (
                    <AccordionItem value={topic.id} key={topic.id}>
                        <div className="flex items-center w-full group hover:bg-muted/50 rounded-t-md">
                        <AccordionTrigger className="flex-1 px-4 py-3 text-lg font-semibold hover:no-underline">
                            {topic.title}
                        </AccordionTrigger>
                        <div className="px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5" /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onSelect={() => handleEditTopic(topic)}><Edit className="mr-2 h-4 w-4" />Edit Topic</DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setDeletionState({ type: 'topic', id: topic.id })} className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete Topic</DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        </div>
                        <AccordionContent className="border-t bg-background">
                        <div className="p-4 space-y-4">
                            {topic.lessons.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                                <p>No lessons in this topic yet.</p>
                            </div>
                            ) : (
                            <div className="space-y-3">
                                {topic.lessons.map(lesson => (
                                <div key={lesson.id} className="flex items-center justify-between p-3 rounded-md border bg-card hover:bg-muted/50">
                                    <div>
                                    <p className="font-medium">{lesson.title}</p>
                                    <div className="flex items-center gap-4 mt-1">
                                        <Badge variant={
                                            lesson.difficulty === 'Beginner' ? 'secondary' :
                                            lesson.difficulty === 'Intermediate' ? 'outline' : 'default'
                                        }>{lesson.difficulty}</Badge>
                                        {lesson.attachments.map((att, i) => (
                                            <a key={i} href={att.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                                            <AttachmentIcon type={att.type} />
                                            </a>
                                        ))}
                                    </div>
                                    </div>
                                    <div className="flex items-center">
                                    <Button variant="outline" size="sm" onClick={() => handleEditLesson(lesson, topic.id)}><Edit className="mr-2 h-4 w-4" /> Edit</Button>
                                    <Button variant="ghost" size="icon" className="ml-2 text-destructive hover:text-destructive" onClick={() => setDeletionState({ type: 'lesson', id: lesson.id, topicId: topic.id })}><Trash2 className="h-4 w-4" /></Button>
                                    </div>
                                </div>
                                ))}
                            </div>
                            )}
                            <div className="pt-4 border-t border-dashed">
                            <Button variant="secondary" onClick={() => handleAddNewLesson(topic.id)}>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add New Lesson to Topic
                            </Button>
                            </div>
                        </div>
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                    {topics.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                        <p className="mb-2">No topics found for {language.name}.</p>
                        <Button onClick={handleAddNewTopic}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add the First Topic
                        </Button>
                    </div>
                    )}
                </Accordion>
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-1">
            <Card>
                <form onSubmit={handleQuickQuestionsFormSubmit}>
                    <CardHeader>
                        <CardTitle>Quick Questions</CardTitle>
                        <CardDescription>Manage one-click questions for the AI Assistant. One question per line.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <input type="hidden" name="langId" value={params.langId} />
                        <Textarea 
                            name="questions" 
                            rows={10} 
                            value={quickQuestionsText}
                            onChange={(e) => setQuickQuestionsText(e.target.value)}
                            placeholder="What is a variable?..."
                        />
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Save Questions
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
      </div>
      
      {/* Topic Dialog */}
      <Dialog open={isTopicDialogOpen} onOpenChange={setTopicDialogOpen}>
        <DialogContent>
          <form onSubmit={handleTopicFormSubmit}>
            <DialogHeader>
              <DialogTitle>{editingTopic?.id ? 'Edit Topic' : 'Add New Topic'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <input type="hidden" name="langId" value={params.langId} />
              {editingTopic?.id && <input type="hidden" name="id" value={editingTopic.id} />}
              <Label htmlFor="topic-title">Topic Title</Label>
              <Input id="topic-title" name="title" defaultValue={editingTopic?.title || ''} placeholder="e.g., Object-Oriented Programming" />
            </div>
            <DialogFooter>
              <DialogClose asChild><Button type="button" variant="outline" disabled={isSubmitting}>Cancel</Button></DialogClose>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Topic
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Lesson Dialog */}
      <Dialog open={isLessonDialogOpen} onOpenChange={setLessonDialogOpen}>
        <DialogContent className="sm:max-w-xl">
          <form onSubmit={handleLessonFormSubmit}>
            <DialogHeader>
                <DialogTitle>{editingLesson?.id ? 'Edit Lesson' : 'Add New Lesson'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
                <input type="hidden" name="langId" value={params.langId} />
                {currentTopicId && <input type="hidden" name="topicId" value={currentTopicId} />}
                {editingLesson?.id && <input type="hidden" name="id" value={editingLesson.id} />}
                
                <div className="space-y-2">
                    <Label htmlFor="lesson-title">Lesson Title</Label>
                    <Input id="lesson-title" name="title" defaultValue={editingLesson?.title || ''} placeholder="e.g., Understanding Classes" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lesson-difficulty">Difficulty</Label>
                    <Select name="difficulty" defaultValue={editingLesson?.difficulty || 'Beginner'}>
                        <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lesson-content">Content (Markdown)</Label>
                    <Textarea id="lesson-content" name="content" rows={6} defaultValue={editingLesson?.content || ''} placeholder="Lesson content in Markdown format..." />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lesson-snippet">Code Snippet</Label>
                    <Textarea id="lesson-snippet" name="codeSnippet" rows={6} defaultValue={editingLesson?.codeSnippet || ''} placeholder="// Your code snippet here" className="font-mono"/>
                </div>
                <div className="space-y-2">
                    <Label>Attachments (mocked)</Label>
                    <p className="text-sm text-muted-foreground">Attachment management UI is not implemented yet. This is a placeholder.</p>
                </div>
            </div>
            <DialogFooter>
                <DialogClose asChild><Button type="button" variant="outline" disabled={isSubmitting}>Cancel</Button></DialogClose>
                <Button type="submit" disabled={isSubmitting}>
                   {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                   Save Lesson
                </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

       {/* AI Topic Generation Dialog */}
      <Dialog open={isAiDialogOpen} onOpenChange={setAiDialogOpen}>
        <DialogContent>
          <form onSubmit={handleAiFormSubmit}>
            <DialogHeader>
              <DialogTitle>Generate Topics with AI</DialogTitle>
              <DialogDescription>
                Automatically generate a set of starter topics for {language.name}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <input type="hidden" name="langId" value={params.langId} />
              <input type="hidden" name="languageName" value={language.name} />
              <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="topic-count" className="text-right">Topics</Label>
                  <Input
                    id="topic-count"
                    name="topicCount"
                    type="number"
                    defaultValue={10}
                    className="col-span-3"
                    min="10"
                    max="20"
                    required
                  />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                  <Button type="button" variant="outline" disabled={isSubmitting}>Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSubmitting ? "Generating..." : "Generate Topics"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Deletion Alert Dialog */}
       <AlertDialog open={!!deletionState} onOpenChange={() => setDeletionState(null)}>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the {deletionState?.type}.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setDeletionState(null)} disabled={isSubmitting}>Cancel</AlertDialogCancel>
                <AlertDialogAction 
                    onClick={() => {
                        if (deletionState?.type === 'topic') {
                            handleDeleteTopic(deletionState.id);
                        } else if (deletionState?.type === 'lesson') {
                            handleDeleteLesson(deletionState.topicId, deletionState.id);
                        }
                    }} 
                    className="bg-destructive hover:bg-destructive/90"
                    disabled={isSubmitting}
                >
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Delete
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </>
  );
}
