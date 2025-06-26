
"use client";

import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-provider';

type Message = {
    sender: 'user' | 'ai';
    text: string;
}

export default function AiAssistantPage() {
    const { t } = useLanguage();
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: t('ai_greeting') }
    ]);
    const [input, setInput] = useState('');
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Mock AI response
        setTimeout(() => {
            const aiResponse: Message = { sender: 'ai', text: t('ai_mock_response') };
            setMessages(prev => [...prev, aiResponse]);
        }, 1000);
    }
    
    useEffect(() => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth',
        });
      }
    }, [messages]);

    return (
        <div className="h-[calc(100vh-120px)] flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                <Bot size={40} className="text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">{t('ai_assistant_page_title')}</h1>
                    <p className="text-lg text-muted-foreground">{t('ask_coding_questions')}</p>
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
                                        <Avatar className="h-8 w-8 border">
                                            <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-5 w-5" /></AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div className={cn(
                                        "max-w-md p-3 rounded-lg",
                                        message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                    )}>
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                    {message.sender === 'user' && (
                                        <Avatar className="h-8 w-8 border">
                                            <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={t('type_your_question')}
                        />
                        <Button type="submit">
                            <Send className="h-4 w-4 mr-2" /> {t('send')}
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}
