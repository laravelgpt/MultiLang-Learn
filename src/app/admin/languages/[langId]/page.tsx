
"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MoreVertical, PlusCircle, Edit, Trash2, FileText, Youtube, Code, Link as LinkIcon, ArrowLeft } from "lucide-react";
import Link from 'next/link';

// Mock Data
const languagesData: Record<string, { name: string; topics: Topic[] }> = {
  py: {
    name: 'Python',
    topics: [
      { id: 't1', title: 'Introduction to Python', lessons: [
          { id: 'l1-1', title: 'History and Features of Python', difficulty: 'Beginner', attachments: [{ type: 'pdf', url: '#' }] },
          { id: 'l1-2', title: 'Setting up Python Environment', difficulty: 'Beginner', attachments: [{ type: 'youtube', url: '#' }] },
          { id: 'l1-3', title: 'Running Your First Python Script', difficulty: 'Beginner', attachments: [{ type: 'code', url: '#' }] },
      ]},
      { id: 't2', title: 'Python Basics', lessons: [
          { id: 'l2-1', title: 'Variables and Data Types', difficulty: 'Beginner', attachments: [] },
          { id: 'l2-2', title: 'Operators in Python', difficulty: 'Beginner', attachments: [] },
          { id: 'l2-3', title: 'Type Casting in Python', difficulty: 'Beginner', attachments: [] },
      ]},
      { id: 't3', title: 'Control Flow', lessons: [
          { id: 'l3-1', title: 'Conditional Statements (if, elif, else)', difficulty: 'Beginner', attachments: [] },
          { id: 'l3-2', title: 'for Loops', difficulty: 'Intermediate', attachments: [] },
          { id: 'l3-3', title: 'while Loops', difficulty: 'Intermediate', attachments: [] },
          { id: 'l3-4', title: 'break, continue, and pass statements', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't4', title: 'Functions and Modules', lessons: [
          { id: 'l4-1', title: 'Defining and Calling Functions', difficulty: 'Intermediate', attachments: [] },
          { id: 'l4-2', title: 'Function Arguments', difficulty: 'Intermediate', attachments: [] },
          { id: 'l4-3', title: 'Lambda Functions', difficulty: 'Advanced', attachments: [] },
          { id: 'l4-4', title: 'Importing Modules', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't5', title: 'Data Structures', lessons: [
          { id: 'l5-1', title: 'Lists', difficulty: 'Beginner', attachments: [] },
          { id: 'l5-2', title: 'Tuples', difficulty: 'Beginner', attachments: [] },
          { id: 'l5-3', title: 'Sets', difficulty: 'Intermediate', attachments: [] },
          { id: 'l5-4', title: 'Dictionaries', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't6', title: 'Object-Oriented Programming (OOP)', lessons: [
          { id: 'l6-1', title: 'Classes and Objects', difficulty: 'Intermediate', attachments: [] },
          { id: 'l6-2', title: 'Inheritance', difficulty: 'Advanced', attachments: [] },
          { id: 'l6-3', title: 'Polymorphism', difficulty: 'Advanced', attachments: [] },
          { id: 'l6-4', title: 'Encapsulation', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't7', title: 'File I/O', lessons: [
          { id: 'l7-1', title: 'Reading and Writing Files', difficulty: 'Intermediate', attachments: [] },
          { id: 'l7-2', title: 'Working with Directories', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't8', title: 'Error and Exception Handling', lessons: [
          { id: 'l8-1', title: 'try, except, finally blocks', difficulty: 'Intermediate', attachments: [] },
          { id: 'l8-2', title: 'Raising Exceptions', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't9', title: 'Advanced Python Concepts', lessons: [
          { id: 'l9-1', title: 'Decorators', difficulty: 'Advanced', attachments: [] },
          { id: 'l9-2', title: 'Generators and Iterators', difficulty: 'Advanced', attachments: [] },
      ]},
    ]
  },
  js: { 
    name: 'JavaScript',
    topics: [
      { id: 't10', title: 'Introduction to JavaScript', lessons: [
        { id: 'l10-1', title: 'What is JavaScript?', difficulty: 'Beginner', attachments: [] },
      ] },
    ]
  },
  java: { name: 'Java', topics: [] },
  cpp: { name: 'C++', topics: [] },
  go: { name: 'Go', topics: [] },
};

type Attachment = { type: 'pdf' | 'youtube' | 'code' | 'link'; url: string };
type Lesson = { id: string; title: string; difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; attachments: Attachment[] };
type Topic = { id: string; title: string; lessons: Lesson[] };

const AttachmentIcon = ({ type }: { type: Attachment['type'] }) => {
  switch (type) {
    case 'pdf': return <FileText className="w-4 h-4 text-muted-foreground" />;
    case 'youtube': return <Youtube className="w-4 h-4 text-red-500" />;
    case 'code': return <Code className="w-4 h-4 text-blue-500" />;
    case 'link': return <LinkIcon className="w-4 h-4 text-muted-foreground" />;
    default: return null;
  }
};

export default function LanguageTopicsPage({ params }: { params: { langId: string } }) {
  const language = useMemo(() => languagesData[params.langId] || { name: 'Unknown', topics: [] }, [params.langId]);
  const [topics, setTopics] = useState<Topic[]>(language.topics);

  const [isTopicDialogOpen, setTopicDialogOpen] = useState(false);
  const [editingTopic, setEditingTopic] = useState<Partial<Topic> | null>(null);
  
  const [isLessonDialogOpen, setLessonDialogOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Partial<Lesson> | null>(null);
  const [currentTopicId, setCurrentTopicId] = useState<string | null>(null);

  // Topic Handlers
  const handleAddNewTopic = () => {
    setEditingTopic({ title: '' });
    setTopicDialogOpen(true);
  };
  
  const handleEditTopic = (topic: Topic) => {
    setEditingTopic({ ...topic });
    setTopicDialogOpen(true);
  };

  const handleDeleteTopic = (topicId: string) => {
    setTopics(topics.filter(t => t.id !== topicId));
  };

  const handleSaveTopic = () => {
    if (!editingTopic?.title) return;
    if (editingTopic.id) {
      setTopics(topics.map(t => t.id === editingTopic.id ? editingTopic as Topic : t));
    } else {
      const newTopic: Topic = { id: `t${Date.now()}`, lessons: [], ...editingTopic } as Topic;
      setTopics([...topics, newTopic]);
    }
    setTopicDialogOpen(false);
    setEditingTopic(null);
  };
  
  // Lesson Handlers
  const handleAddNewLesson = (topicId: string) => {
    setCurrentTopicId(topicId);
    setEditingLesson({ title: '', difficulty: 'Beginner', attachments: [] });
    setLessonDialogOpen(true);
  };

  const handleEditLesson = (lesson: Lesson, topicId: string) => {
    setCurrentTopicId(topicId);
    setEditingLesson({ ...lesson });
    setLessonDialogOpen(true);
  };

  const handleDeleteLesson = (lessonId: string, topicId: string) => {
    setTopics(topics.map(t => 
      t.id === topicId 
        ? { ...t, lessons: t.lessons.filter(l => l.id !== lessonId) } 
        : t
    ));
  };

  const handleSaveLesson = () => {
    if (!editingLesson?.title || !currentTopicId) return;
    
    const lessonToSave: Lesson = editingLesson.id
      ? editingLesson as Lesson
      : { id: `l${Date.now()}`, attachments: [], difficulty: 'Beginner', ...editingLesson } as Lesson;

    setTopics(topics.map(t => {
      if (t.id === currentTopicId) {
        const lessonExists = t.lessons.some(l => l.id === lessonToSave.id);
        const newLessons = lessonExists
          ? t.lessons.map(l => l.id === lessonToSave.id ? lessonToSave : l)
          : [...t.lessons, lessonToSave];
        return { ...t, lessons: newLessons };
      }
      return t;
    }));

    setLessonDialogOpen(false);
    setEditingLesson(null);
    setCurrentTopicId(null);
  };

  return (
    <>
      <PageHeader title={`Manage: ${language.name}`}>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/admin/languages"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Languages</Link>
          </Button>
          <Button onClick={handleAddNewTopic}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Topic
          </Button>
        </div>
      </PageHeader>
      
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
                        <DropdownMenuItem onSelect={() => handleDeleteTopic(topic.id)} className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete Topic</DropdownMenuItem>
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
                              <Button variant="ghost" size="icon" className="ml-2 text-destructive hover:text-destructive" onClick={() => handleDeleteLesson(lesson.id, topic.id)}><Trash2 className="h-4 w-4" /></Button>
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
      
      {/* Topic Dialog */}
      <Dialog open={isTopicDialogOpen} onOpenChange={setTopicDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingTopic?.id ? 'Edit Topic' : 'Add New Topic'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Label htmlFor="topic-title">Topic Title</Label>
            <Input id="topic-title" value={editingTopic?.title || ''} onChange={(e) => setEditingTopic({...editingTopic, title: e.target.value})} placeholder="e.g., Object-Oriented Programming" />
          </div>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button onClick={handleSaveTopic}>Save Topic</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Lesson Dialog */}
      <Dialog open={isLessonDialogOpen} onOpenChange={setLessonDialogOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{editingLesson?.id ? 'Edit Lesson' : 'Add New Lesson'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="lesson-title">Lesson Title</Label>
              <Input id="lesson-title" value={editingLesson?.title || ''} onChange={(e) => setEditingLesson({...editingLesson, title: e.target.value})} placeholder="e.g., Understanding Classes and Objects" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lesson-difficulty">Difficulty</Label>
              <Select value={editingLesson?.difficulty || 'Beginner'} onValueChange={(value: Lesson['difficulty']) => setEditingLesson({...editingLesson, difficulty: value})}>
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
              <Label>Attachments (mocked)</Label>
              <p className="text-sm text-muted-foreground">Attachment management UI is not implemented yet. This is a placeholder.</p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button onClick={handleSaveLesson}>Save Lesson</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
