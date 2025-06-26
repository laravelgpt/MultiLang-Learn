
"use client";

import { useMemo } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, FileText, Youtube, Code, Link as LinkIcon, BookOpen } from "lucide-react";
import Link from 'next/link';

// Mock Data - should be the same as the admin page
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

export default function LanguageCurriculumPage({ params }: { params: { langId: string } }) {
  const language = useMemo(() => languagesData[params.langId] || { name: 'Unknown', topics: [] }, [params.langId]);
  
  return (
    <>
      <PageHeader title={`${language.name} Curriculum`}>
        <Button variant="outline" asChild>
          <Link href="/languages"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Languages</Link>
        </Button>
      </PageHeader>
      
      <Card>
        <CardHeader>
          <CardTitle>Topics & Lessons</CardTitle>
          <CardDescription>Follow the path to master {language.name}.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full" defaultValue={language.topics.length > 0 ? [language.topics[0].id] : []}>
            {language.topics.map((topic) => (
              <AccordionItem value={topic.id} key={topic.id}>
                <AccordionTrigger className="px-4 py-3 text-lg font-semibold hover:no-underline">
                  {topic.title}
                </AccordionTrigger>
                <AccordionContent className="border-t bg-background">
                  <div className="p-4 space-y-4">
                    {topic.lessons.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <p>Lessons are coming soon for this topic!</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {topic.lessons.map(lesson => (
                          <div key={lesson.id} className="flex items-center justify-between p-3 rounded-md border bg-card hover:bg-muted/50">
                            <div className="flex items-center gap-4">
                              <BookOpen className="w-5 h-5 text-primary"/>
                              <div>
                                <p className="font-medium">{lesson.title}</p>
                                <div className="flex items-center gap-4 mt-1">
                                   <Badge variant={
                                      lesson.difficulty === 'Beginner' ? 'secondary' :
                                      lesson.difficulty === 'Intermediate' ? 'outline' : 'default'
                                    }>{lesson.difficulty}</Badge>
                                    {lesson.attachments.length > 0 && (
                                        <div className="flex items-center gap-2">
                                        {lesson.attachments.map((att, i) => (
                                            <a key={i} href={att.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                                            <AttachmentIcon type={att.type} />
                                            </a>
                                        ))}
                                        </div>
                                    )}
                                </div>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost">Start Lesson</Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
             {language.topics.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                  <p>Curriculum coming soon for {language.name}.</p>
              </div>
            )}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
