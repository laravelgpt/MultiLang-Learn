
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
      { id: 't1', title: 'Variables and Data Types', lessons: [
        { id: 'l1-1', title: 'Understanding Python Variables', difficulty: 'Beginner', attachments: [{ type: 'pdf', url: '#' }] },
        { id: 'l1-2', title: 'Exploring Numeric, String, and Boolean Types', difficulty: 'Beginner', attachments: [{ type: 'youtube', url: '#' }] },
      ]},
      { id: 't2', title: 'Control Flow', lessons: [
        { id: 'l2-1', title: 'Conditional Statements (if, elif, else)', difficulty: 'Beginner', attachments: [{ type: 'code', url: '#' }] },
        { id: 'l2-2', title: 'Mastering Loops (for, while)', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't3', title: 'Functions', lessons: []},
    ]
  },
  js: { 
    name: 'JavaScript',
    topics: [
      { id: 't4', title: 'Introduction to JavaScript', lessons: [] },
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
