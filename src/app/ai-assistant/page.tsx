
"use client";

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-provider';
import { useProgrammingLanguage, type LanguageId } from '@/context/programming-language-provider';
import { chatbot } from '@/ai/flows/chatbot';
import { useToast } from '@/hooks/use-toast';

type Message = {
    sender: 'user' | 'ai';
    text: string;
}

const languageNameMap: Record<string, string> = {
    all: 'General Programming', js: 'JavaScript', py: 'Python', go: 'Go', rust: 'Rust',
    java: 'Java', cpp: 'C++', pascal: 'Pascal', csharp: 'C#',
    typescript: 'TypeScript', swift: 'Swift', kotlin: 'Kotlin', php: 'PHP',
    ruby: 'Ruby', sql: 'SQL', dart: 'Dart', r: 'R', elixir: 'Elixir',
    haskell: 'Haskell', lua: 'Lua', perl: 'Perl', scala: 'Scala', bash: 'Bash',
};


// Data for quick question suggestions
const quickQuestionsData: Partial<Record<LanguageId, string[]>> = {
    js: [
        "What is the difference between `let`, `const`, and `var`?",
        "Explain closures in JavaScript.",
        "Show an example of an async/await function."
    ],
    py: [
        "What are decorators in Python?",
        "Explain list comprehensions with an example.",
        "How does garbage collection work in Python?"
    ],
    go: [
        "What is a goroutine?",
        "Explain the difference between a slice and an array.",
        "How do channels work in Go?"
    ],
    java: [
        "What is the difference between an interface and an abstract class?",
        "Explain the Java Virtual Machine (JVM).",
        "Show an example of exception handling."
    ]
};


export default function AiAssistantPage() {
    const { t } = useLanguage();
    const { selectedLanguage } = useProgrammingLanguage();
    const { toast } = useToast();

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const [quickQuestions, setQuickQuestions] = useState<string[]>([]);

    const sendMessage = async (messageText: string) => {
        if (!messageText.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput(''); // Clear input after sending
        setIsLoading(true);

        try {
            const languageContext = languageNameMap[selectedLanguage] || 'General Programming';
            const result = await chatbot({ query: messageText, language: languageContext });
            const aiResponse: Message = { sender: 'ai', text: result.response };
            setMessages(prev => [...prev, aiResponse]);
        } catch (error) {
            console.error("Error calling chatbot flow:", error);
            toast({
                title: "An Error Occurred",
                description: "Failed to get a response from the AI assistant. Please try again.",
                variant: "destructive",
            });
            const errorMessage: Message = { sender: 'ai', text: "I'm sorry, I encountered an error. Please try again." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    }
    
    useEffect(() => {
        const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTo({
                top: viewport.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [messages, isLoading]);
    
    useEffect(() => {
        const languageContext = languageNameMap[selectedLanguage] || 'General Programming';
        const greeting = t('ai_greeting_context', { language: languageContext });
        setMessages([{ sender: 'ai', text: greeting }]);

        if (selectedLanguage !== 'all' && quickQuestionsData[selectedLanguage]) {
            setQuickQuestions(quickQuestionsData[selectedLanguage] || []);
        } else {
            setQuickQuestions([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLanguage, t]);

    return (
        <div className="h-[calc(100vh-120px)] flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                <Bot size={40} className="text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">{t('ai_assistant_page_title')}</h1>
                    <p className="text-lg text-muted-foreground">{t('ask_coding_questions')} ({languageNameMap[selectedLanguage]})</p>
                </div>
            </div>

            <Card className="flex-1 flex flex-col">
                <CardHeader>
                    <CardTitle>{t('chat')}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden">
                    <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
                        <div className="space-y-6">
                            {messages.map((message, index) => (
                                <div key={index} className={cn("flex items-start gap-4", message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                                    {message.sender === 'ai' && (
                                        <Avatar className="h-8 w-8 border shrink-0">
                                            <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-5 w-5" /></AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div className={cn(
                                        "max-w-2xl p-3 rounded-lg",
                                        message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                    )}>
                                        <ReactMarkdown className="prose prose-sm dark:prose-invert max-w-none prose-p:my-0 prose-headings:my-2 prose-pre:my-2 prose-pre:bg-background/50 prose-pre:p-2 prose-pre:rounded-sm">
                                            {message.text}
                                        </ReactMarkdown>
                                    </div>
                                    {message.sender === 'user' && (
                                        <Avatar className="h-8 w-8 border shrink-0">
                                            <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-start gap-4 justify-start">
                                    <Avatar className="h-8 w-8 border shrink-0">
                                        <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-5 w-5" /></AvatarFallback>
                                    </Avatar>
                                    <div className="max-w-md p-3 rounded-lg bg-muted flex items-center">
                                        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground"/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                    {quickQuestions.length > 0 && (
                         <div className="w-full">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="h-4 w-4 text-primary" />
                                <h4 className="text-sm font-semibold">{t('quick_questions')}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {quickQuestions.map((q, i) => (
                                    <Button key={i} variant="outline" size="sm" onClick={() => sendMessage(q)} disabled={isLoading}>
                                        {q}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                    <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={t('type_your_question')}
                            disabled={isLoading}
                        />
                        <Button type="submit" disabled={isLoading} className="w-[90px]">
                            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                            <span className={cn(isLoading && "sr-only")}>{t('send')}</span>
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}
