
"use client";

import { useState, useRef, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User, Loader2, Sparkles, MessageSquarePlus, Edit, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-provider';
import { useProgrammingLanguage } from '@/context/programming-language-provider';
import { chatbot } from '@/ai/flows/chatbot';
import { useToast } from '@/hooks/use-toast';
import { getQuickQuestions } from '@/services/languageService';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Label } from '@/components/ui/label';

type Message = {
    sender: 'user' | 'ai';
    text: string;
};

type Conversation = {
    id: string;
    title: string;
    messages: Message[];
    timestamp: number;
    language: string;
};

const languageNameMap: Record<string, string> = {
    all: 'General Programming', js: 'JavaScript', py: 'Python', go: 'Go', rust: 'Rust',
    java: 'Java', cpp: 'C++', pascal: 'Pascal', csharp: 'C#',
    typescript: 'TypeScript', swift: 'Swift', kotlin: 'Kotlin', php: 'PHP',
    ruby: 'Ruby', sql: 'SQL', dart: 'Dart', r: 'R', elixir: 'Elixir',
    haskell: 'Haskell', lua: 'Lua', perl: 'Perl', scala: 'Scala', bash: 'Bash',
};

export default function AiAssistantPage() {
    const { t } = useLanguage();
    const { selectedLanguage } = useProgrammingLanguage();
    const { toast } = useToast();
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const [history, setHistory] = useState<Conversation[]>([]);
    const [activeChatId, setActiveChatId] = useState<string | null>(null);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [quickQuestions, setQuickQuestions] = useState<string[]>([]);
    
    const [renameDialogOpen, setRenameDialogOpen] = useState(false);
    const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
    const [chatToEdit, setChatToEdit] = useState<Conversation | null>(null);
    const [newChatName, setNewChatName] = useState("");

    // Load history from localStorage on mount
    useEffect(() => {
        try {
            const savedHistory = localStorage.getItem('chatHistory');
            if (savedHistory) {
                const parsedHistory: Conversation[] = JSON.parse(savedHistory);
                setHistory(parsedHistory);
                if (parsedHistory.length > 0) {
                    setActiveChatId(parsedHistory[0].id);
                }
            }
        } catch (error) {
            console.error("Failed to parse chat history from localStorage", error);
            localStorage.removeItem('chatHistory');
        }
    }, []);

    // Save history to localStorage whenever it changes
    useEffect(() => {
        if (history.length > 0) {
           localStorage.setItem('chatHistory', JSON.stringify(history));
        } else {
           localStorage.removeItem('chatHistory');
        }
    }, [history]);
    
    // Fetch quick questions when language changes
    useEffect(() => {
        async function fetchQuickQuestions() {
            if (selectedLanguage === 'all') {
                setQuickQuestions([]);
                return;
            }
            const questions = await getQuickQuestions(selectedLanguage);
            setQuickQuestions(questions || []);
        }
        fetchQuickQuestions();
    }, [selectedLanguage]);

    const activeChat = useMemo(() => {
        return history.find(chat => chat.id === activeChatId) || null;
    }, [history, activeChatId]);
    
    // Scroll to bottom of chat
    useEffect(() => {
        const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
        }
    }, [activeChat?.messages, isLoading]);

    const handleNewChat = () => {
        const languageContext = languageNameMap[selectedLanguage] || 'General Programming';
        const newConversation: Conversation = {
            id: `chat-${Date.now()}`,
            title: t('ai_greeting_context', { language: languageContext }),
            messages: [{ sender: 'ai', text: t('ai_greeting_context', { language: languageContext }) }],
            timestamp: Date.now(),
            language: selectedLanguage,
        };
        setHistory(prev => [newConversation, ...prev]);
        setActiveChatId(newConversation.id);
    };

    const sendMessage = async (messageText: string) => {
        if (!messageText.trim() || isLoading) return;

        let currentChatId = activeChatId;
        
        // If there's no active chat, create a new one first
        if (!currentChatId) {
            const languageContext = languageNameMap[selectedLanguage] || 'General Programming';
            const newConversation: Conversation = {
                id: `chat-${Date.now()}`,
                title: messageText.substring(0, 30),
                messages: [{ sender: 'ai', text: t('ai_greeting_context', { language: languageContext }) }],
                timestamp: Date.now(),
                language: selectedLanguage,
            };
            setHistory(prev => [newConversation, ...prev]);
            setActiveChatId(newConversation.id);
            currentChatId = newConversation.id;
        }

        const userMessage: Message = { sender: 'user', text: messageText };
        
        setHistory(prev => prev.map(c => c.id === currentChatId ? { ...c, messages: [...c.messages, userMessage] } : c));
        setInput('');
        setIsLoading(true);

        try {
            const chat = history.find(c => c.id === currentChatId);
            const languageContext = languageNameMap[chat?.language || selectedLanguage] || 'General Programming';
            const result = await chatbot({ query: messageText, language: languageContext });
            const aiResponse: Message = { sender: 'ai', text: result.response };
            
            setHistory(prev => prev.map(c => 
                c.id === currentChatId 
                ? { ...c, messages: [...c.messages, aiResponse], timestamp: Date.now() } 
                : c
            ).sort((a, b) => b.timestamp - a.timestamp));

        } catch (error) {
            console.error("Error calling chatbot flow:", error);
            const errorMessage: Message = { sender: 'ai', text: "I'm sorry, I encountered an error. Please try again." };
            setHistory(prev => prev.map(c => 
                c.id === currentChatId 
                ? { ...c, messages: [...c.messages, errorMessage], timestamp: Date.now() } 
                : c
            ).sort((a, b) => b.timestamp - a.timestamp));
            toast({
                title: "An Error Occurred",
                description: "Failed to get a response from the AI assistant. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const handleRename = () => {
        if (!chatToEdit || !newChatName.trim()) return;
        setHistory(prev => prev.map(c => c.id === chatToEdit.id ? { ...c, title: newChatName } : c));
        setRenameDialogOpen(false);
        setChatToEdit(null);
        setNewChatName("");
        toast({ title: t('chat_renamed'), description: t('chat_renamed_desc') });
    };

    const handleDelete = () => {
        if (!chatToEdit) return;
        setHistory(prev => prev.filter(c => c.id !== chatToEdit.id));
        if (activeChatId === chatToEdit.id) {
            setActiveChatId(history[1] ? history[1].id : null);
        }
        setDeleteAlertOpen(false);
        setChatToEdit(null);
        toast({ title: t('chat_deleted'), description: t('chat_deleted_desc') });
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-120px)]">
            {/* History Sidebar */}
            <Card className="lg:col-span-1 h-full flex flex-col">
                <CardHeader className="flex-row items-center justify-between">
                    <CardTitle>{t('chat_history')}</CardTitle>
                    <Button variant="ghost" size="icon" onClick={handleNewChat}>
                        <MessageSquarePlus className="h-5 w-5" />
                    </Button>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden p-2">
                    <ScrollArea className="h-full">
                        <div className="space-y-2">
                           {history.map(chat => (
                                <div
                                    key={chat.id}
                                    onClick={() => setActiveChatId(chat.id)}
                                    className={cn(
                                        "p-2 rounded-md cursor-pointer group flex justify-between items-center",
                                        activeChatId === chat.id ? 'bg-muted' : 'hover:bg-muted/50'
                                    )}
                                >
                                    <p className="text-sm truncate pr-2 flex-1">{chat.title}</p>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                             <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0 opacity-0 group-hover:opacity-100">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem onSelect={() => { setChatToEdit(chat); setNewChatName(chat.title); setRenameDialogOpen(true); }}>
                                                <Edit className="mr-2 h-4 w-4" />{t('rename_chat')}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onSelect={() => { setChatToEdit(chat); setDeleteAlertOpen(true); }} className="text-destructive">
                                                <Trash2 className="mr-2 h-4 w-4" />{t('delete_chat')}
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>

            {/* Chat Window */}
            <div className="lg:col-span-3 h-full flex flex-col">
                {activeChat ? (
                    <Card className="flex-1 flex flex-col">
                        <CardHeader>
                            <CardTitle className="truncate">{activeChat.title}</CardTitle>
                            <CardDescription>
                                {t('language')}: {languageNameMap[activeChat.language] || 'General'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-hidden">
                            <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
                                <div className="space-y-6">
                                    {activeChat.messages.map((message, index) => (
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
                        <CardFooter className="flex-col items-start gap-4 pt-4">
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
                ) : (
                    <Card className="flex-1 flex flex-col items-center justify-center text-center">
                        <CardContent>
                             <Bot className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                             <h2 className="text-2xl font-semibold">{t('empty_chat_placeholder_title')}</h2>
                             <p className="text-muted-foreground mt-2">{t('empty_chat_placeholder_desc')}</p>
                             <Button onClick={handleNewChat} className="mt-6">{t('start_new_conversation')}</Button>
                        </CardContent>
                    </Card>
                )}
            </div>
            
            <Dialog open={renameDialogOpen} onOpenChange={setRenameDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{t('rename_chat')}</DialogTitle>
                        <DialogDescription>{t('rename_chat_desc')}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Label htmlFor="chat-name">{t('title')}</Label>
                        <Input id="chat-name" value={newChatName} onChange={(e) => setNewChatName(e.target.value)} />
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setRenameDialogOpen(false)}>{t('cancel')}</Button>
                        <Button onClick={handleRename}>{t('save')}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <AlertDialog open={deleteAlertOpen} onOpenChange={setDeleteAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t('are_you_sure')}</AlertDialogTitle>
                        <AlertDialogDescription>
                           {t('delete_chat_confirm', { chatTitle: chatToEdit?.title || '' })}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setDeleteAlertOpen(false)}>{t('cancel')}</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
                           {t('delete')}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
