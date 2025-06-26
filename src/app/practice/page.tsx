
"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from '@/components/ui/textarea';
import { Code, Play, RefreshCw, Copy, Save, BrainCircuit, Loader2, CheckCircle, XCircle, Edit, Trash2, MoreHorizontal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { explainCode } from '@/ai/flows/explain-code';
import { useLanguage } from '@/context/language-provider';
import { cn } from '@/lib/utils';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useProgrammingLanguage, type LanguageId } from '@/context/programming-language-provider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const initialCode = `// Welcome to the Practice Zone!
// Select an example from the left or write your own code.

function greet(name) {
  return 'Hello, ' + name + '! Welcome to the Practice Zone.';
}

console.log(greet("Learner"));`;

const practiceTopics = [
    {
        title: "JavaScript: Hello World",
        description: "A simple 'Hello World' to get started.",
        language: "js",
        code: `console.log("Hello, World!");`,
    },
    {
        title: "JavaScript: Variables",
        description: "Learn how to declare and use variables.",
        language: "js",
        code: `let name = "Alice";\nconst score = 95;\n\nconsole.log(name + " scored " + score + " points.");`,
    },
    {
        title: "JavaScript: Functions",
        description: "Define and call a simple function.",
        language: "js",
        code: `function add(a, b) {\n  return a + b;\n}\n\nconsole.log("The sum is:", add(5, 3));`,
    },
    {
        title: "Python: User Input",
        description: "A simple example of how to take input from a user.",
        language: "py",
        code: `name = input("Enter your name: ")\nprint("Hello, " + name)`,
    },
    {
        title: "Python: List Iteration",
        description: "Learn how to loop through a list of items.",
        language: "py",
        code: `fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n  print(fruit)`,
    },
    {
        title: "C#: Hello World",
        description: "A simple 'Hello World' in C#.",
        language: "csharp",
        code: `using System;\n\nclass Program\n{\n    static void Main(string[] args)\n    {\n        Console.WriteLine("Hello, C#!");\n    }\n}`,
    },
    {
        title: "TypeScript: Interfaces",
        description: "Define a shape of an object with an interface.",
        language: "typescript",
        code: `interface User {\n  name: string;\n  id: number;\n}\n\nconst user: User = {\n  name: "Jane Doe",\n  id: 1,\n};\n\nconsole.log(user.name);`,
    },
    {
        title: "Go: Goroutines",
        description: "A simple example of concurrency using Goroutines.",
        language: "go",
        code: `package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc say(s string) {\n    for i := 0; i < 3; i++ {\n        time.Sleep(100 * time.Millisecond)\n        fmt.Println(s)\n    }\n}\n\nfunc main() {\n    go say("world")\n    say("hello")\n}`,
    },
    {
        title: "Ruby: Iterators",
        description: "A simple each iterator in Ruby.",
        language: "ruby",
        code: `(1..5).each do |i|\n  puts "Iteration number #{i}"\nend`,
    },
    {
        title: "Rust: Ownership",
        description: "A basic example demonstrating ownership.",
        language: "rust",
        code: `fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1;\n\n    // The next line would cause a compile error because s1's ownership was moved to s2.\n    // println!("{}, world!", s1);\n    println!("{}, world!", s2);\n}`,
    },
    {
        title: "Swift: Optionals",
        description: "Understanding optional values in Swift.",
        language: "swift",
        code: `var optionalString: String? = "Hello"\nprint(optionalString == nil) // false\n\nvar greeting = "Hello!"\nif let name = optionalString {\n    greeting = "Hello, \\(name)"\n}\nprint(greeting)`,
    },
    {
        title: "Kotlin: Null Safety",
        description: "Kotlin's approach to null safety.",
        language: "kotlin",
        code: `fun main() {\n    var a: String = "abc"\n    // a = null // Compilation error\n\n    var b: String? = "def"\n    b = null // ok\n    println(b)\n}`,
    },
    {
        title: "SQL: Basic Select",
        description: "A basic SELECT statement to query data from a table.",
        language: "sql",
        code: `SELECT name, email FROM users WHERE country = 'USA';`,
    },
];

type SavedSnippet = {
    id: string;
    title: string;
    description: string;
    code: string;
    language: string;
};

export default function PracticePage() {
    const { toast } = useToast();
    const { t } = useLanguage();
    const { selectedLanguage, setSelectedLanguage } = useProgrammingLanguage();
    
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState("");
    const [error, setError] = useState<{ message: string, lineNumber: number | null } | null>(null);
    const [explanation, setExplanation] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [isExplaining, setIsExplaining] = useState(false);
    const [activeTab, setActiveTab] = useState("editor");
    const [currentTopic, setCurrentTopic] = useState({
        title: "Interactive Code Editor",
        description: "Select an example from the left or write your own code."
    });
    const workerRef = useRef<Worker | null>(null);

    const [savedSnippets, setSavedSnippets] = useState<SavedSnippet[]>([]);
    const [snippetToDelete, setSnippetToDelete] = useState<SavedSnippet | null>(null);
    const [editingSnippetId, setEditingSnippetId] = useState<string | null>(null);
    
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [snippetToEdit, setSnippetToEdit] = useState<SavedSnippet | null>(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedDescription, setEditedDescription] = useState("");

    const filteredTopics = useMemo(() => {
        if (selectedLanguage === 'all') {
            return practiceTopics;
        }
        return practiceTopics.filter(topic => topic.language === selectedLanguage);
    }, [selectedLanguage]);

    const parseLineNumber = (stack: string): number | null => {
        const match = /<anonymous>:(\d+):/.exec(stack);
        if (match && match[1]) {
            return parseInt(match[1], 10);
        }
        return null;
    }

    useEffect(() => {
        workerRef.current = new Worker('/code-runner.js');

        workerRef.current.onmessage = (e) => {
            const { output: workerOutput, error: workerError } = e.data;
            if (workerError) {
                const lineNumber = parseLineNumber(workerError.stack);
                setOutput('Error: ' + workerError.message);
                setError({ message: workerError.message, lineNumber });
            } else {
                setOutput(workerOutput || "Code executed successfully with no output.");
                setError(null);
            }
            setIsRunning(false);
        };
        
        workerRef.current.onerror = (e) => {
            setOutput('An error occurred in the code runner: ' + e.message);
            setIsRunning(false);
        };

        return () => {
            workerRef.current?.terminate();
        };
    }, []);
    
    const handleLoadExample = (example: typeof practiceTopics[0]) => {
        setCode(example.code);
        setSelectedLanguage(example.language as LanguageId);
        setCurrentTopic({ title: example.title, description: example.description });
        setOutput("");
        setError(null);
        setExplanation("");
        setActiveTab("editor");
        setEditingSnippetId(null);
        toast({
            title: `Loaded: ${example.title}`,
            description: "The example code is ready in the editor.",
        });
    };

    const handleRunCode = () => {
        if (!workerRef.current) return;
        
        setIsRunning(true);
        setOutput("Running code...");
        setError(null);
        setActiveTab("output");
        workerRef.current.postMessage({ code });
    };
    
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        toast({ title: t('code_copied_title'), description: t('code_copied_desc') });
    };

    const handleExplainCode = async () => {
        if (!code.trim()) {
            toast({ title: t('cannot_explain_empty_title'), description: t('cannot_explain_empty_desc'), variant: 'destructive' });
            return;
        }
        setIsExplaining(true);
        setExplanation("");
        setActiveTab("explanation");
        try {
            const result = await explainCode({ code });
            setExplanation(result.explanation);
        } catch (error) {
            console.error(error);
            setExplanation("Sorry, I had trouble explaining that code. Please check the console for details.");
            toast({ title: t('ai_explanation_failed_title'), description: t('ai_explanation_failed_desc'), variant: 'destructive' });
        } finally {
            setIsExplaining(false);
        }
    };
    
    const handleReset = () => {
        setCode(initialCode);
        setCurrentTopic({
            title: "Interactive Code Editor",
            description: "Select an example from the left or write your own code."
        });
        setSelectedLanguage("js");
        setOutput("");
        setError(null);
        setExplanation("");
        setActiveTab("editor");
        setEditingSnippetId(null);
        toast({ title: "Editor Reset", description: "The editor has been reset to the default state." });
    };

    const handleSave = () => {
        if (editingSnippetId) {
            setSavedSnippets(prev => prev.map(s => 
                s.id === editingSnippetId ? { ...s, code } : s
            ));
            toast({
                title: t('snippet_updated'),
                description: t('snippet_updated_desc', { snippetTitle: currentTopic.title }),
            });
        } else {
            const newSnippet: SavedSnippet = {
                id: `snippet-${Date.now()}`,
                title: t('untitled_snippet'),
                description: t('saved_on_date', { date: new Date().toLocaleDateString() }),
                code: code,
                language: selectedLanguage,
            };
    
            setSavedSnippets(prev => [newSnippet, ...prev]);
            setEditingSnippetId(newSnippet.id);
            setCurrentTopic({ title: newSnippet.title, description: newSnippet.description });
            toast({
                title: t('snippet_saved'),
                description: t('snippet_saved_desc', { snippetTitle: newSnippet.title }),
            });
        }
    };

    const handleLoadSnippet = (snippet: SavedSnippet) => {
        setCode(snippet.code);
        setSelectedLanguage(snippet.language as LanguageId);
        setCurrentTopic({ title: snippet.title, description: snippet.description });
        setEditingSnippetId(snippet.id);
        setOutput("");
        setError(null);
        setExplanation("");
        setActiveTab("editor");
        toast({
            title: `${t('loaded')}: ${snippet.title}`,
            description: t('load_snippet_desc'),
        });
    };

    const handleDeleteClick = (snippet: SavedSnippet) => {
        setSnippetToDelete(snippet);
    };

    const handleDeleteConfirm = () => {
        if (!snippetToDelete) return;
        setSavedSnippets(prev => prev.filter(s => s.id !== snippetToDelete.id));
        
        if (editingSnippetId === snippetToDelete.id) {
            handleReset();
        }

        toast({
            title: t('snippet_deleted'),
            description: t('snippet_deleted_desc', { snippetTitle: snippetToDelete.title }),
        });
        setSnippetToDelete(null);
    };

    const handleEditClick = (snippet: SavedSnippet) => {
        setSnippetToEdit(snippet);
        setEditedTitle(snippet.title);
        setEditedDescription(snippet.description);
        setIsEditDialogOpen(true);
    };

    const handleSaveEditedSnippet = () => {
        if (!snippetToEdit) return;

        setSavedSnippets(prev => prev.map(s => 
            s.id === snippetToEdit.id
                ? { ...s, title: editedTitle, description: editedDescription }
                : s
        ));

        if (editingSnippetId === snippetToEdit.id) {
            setCurrentTopic({ title: editedTitle, description: editedDescription });
        }

        toast({ title: t('snippet_updated') });
        setIsEditDialogOpen(false);
        setSnippetToEdit(null);
    };


    return (
        <>
            <div className="flex items-center gap-4 mb-8">
                <Code size={40} className="text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">{t('practice_and_examples')}</h1>
                    <p className="text-lg text-muted-foreground">{t('practice_skills_interactive')}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-1 space-y-4">
                     <Tabs defaultValue="topics" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                           <TabsTrigger value="topics">{t('practice_topics_tab')}</TabsTrigger>
                           <TabsTrigger value="snippets">{t('my_snippets')}</TabsTrigger>
                        </TabsList>
                        <TabsContent value="topics" className="mt-4">
                           <Card>
                                <CardHeader>
                                    <CardTitle>{t('practice_topics_tab')}</CardTitle>
                                    <CardDescription>Select a topic to load it into the editor.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
                                    {filteredTopics.map((example) => (
                                        <button
                                            key={example.title}
                                            onClick={() => handleLoadExample(example)}
                                            className="p-3 rounded-md border text-left hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                                        >
                                            <p className="font-semibold">{example.title}</p>
                                            <p className="text-sm text-muted-foreground">{example.description}</p>
                                        </button>
                                    ))}
                                    {filteredTopics.length === 0 && (
                                        <p className="text-sm text-muted-foreground text-center py-4">
                                            No practice topics available for this language yet.
                                        </p>
                                    )}
                                </CardContent>
                           </Card>
                        </TabsContent>
                        <TabsContent value="snippets" className="mt-4">
                           <Card>
                                <CardHeader>
                                   <CardTitle>{t('my_snippets')}</CardTitle>
                                   <CardDescription>{t('review_saved_code')}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
                                   {savedSnippets.length > 0 ? savedSnippets.map((snippet) => (
                                     <div key={snippet.id} className="p-3 rounded-md border text-left hover:bg-muted transition-colors group">
                                         <div className="flex justify-between items-start">
                                            <div className="flex-1 pr-2 cursor-pointer" onClick={() => handleLoadSnippet(snippet)}>
                                                <p className="font-semibold">{snippet.title}</p>
                                                <p className="text-sm text-muted-foreground">{snippet.description}</p>
                                            </div>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-7 w-7 flex-shrink-0">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onSelect={() => handleEditClick(snippet)}><Edit className="mr-2 h-4 w-4" />{t('edit_snippet_details')}</DropdownMenuItem>
                                                    <DropdownMenuItem onSelect={() => handleDeleteClick(snippet)} className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />{t('delete')}</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                         </div>
                                     </div>
                                   )) : (
                                     <div className="text-center py-8 text-muted-foreground">{t('no_saved_snippets')}</div>
                                   )}
                                </CardContent>
                           </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="lg:col-span-2">
                    <Card>
                         <CardHeader>
                            <CardTitle>{currentTopic.title}</CardTitle>
                            <CardDescription>{currentTopic.description}</CardDescription>
                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-4 border-t -mx-6 px-6">
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm" onClick={handleExplainCode} disabled={isExplaining}>
                                        <BrainCircuit /> {isExplaining ? t('ai_explaining') : t('explain_code')}
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={handleCopy}><Copy /> {t('copy_code')}</Button>
                                    <Button variant="ghost" size="sm" onClick={handleReset}><RefreshCw /> {t('reset_code')}</Button>
                                    <Button variant="ghost" size="sm" onClick={handleSave}><Save /> {editingSnippetId ? t('update_snippet') : t('save_snippet')}</Button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button onClick={handleRunCode} disabled={isRunning} className="bg-green-600 hover:bg-green-700 text-white w-[90px]">
                                        {isRunning ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
                                        {isRunning ? t('running') : t('run')}
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Tabs value={activeTab} onValueChange={setActiveTab}>
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="editor">{t('editor')}</TabsTrigger>
                                    <TabsTrigger value="output">{t('output')}</TabsTrigger>
                                    <TabsTrigger value="explanation">{t('ai_explanation')}</TabsTrigger>
                                </TabsList>
                                <TabsContent value="editor">
                                    <Textarea 
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        className="font-mono h-96 bg-muted/50 dark:bg-zinc-900 rounded-md border" 
                                        placeholder="Write your code here..."
                                    />
                                </TabsContent>
                                <TabsContent value="output">
                                    <div className={cn(
                                        "font-mono h-96 rounded-md border p-4 overflow-auto transition-colors text-sm",
                                        !output && "bg-muted",
                                        output && error && "bg-red-50 dark:bg-destructive/10 border-destructive/30",
                                        output && !error && "bg-green-50 dark:bg-green-950/30 border-green-500/30"
                                    )}>
                                        {isRunning ? (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                <Loader2 className="h-6 w-6 animate-spin" />
                                                <p className="ml-3">{t('running')}</p>
                                            </div>
                                        ) : error ? (
                                            <div className="flex items-start gap-4 text-destructive">
                                                <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h3 className="font-bold mb-2">Error on line {error.lineNumber || 'N/A'}</h3>
                                                    <pre className="font-mono text-sm whitespace-pre-wrap">{error.message}</pre>
                                                </div>
                                            </div>
                                        ) : output ? (
                                            <div className="flex items-start gap-4 text-green-700 dark:text-green-300">
                                                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h3 className="font-bold mb-2">Success!</h3>
                                                    <pre className="whitespace-pre-wrap">{output}</pre>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                <p>{t('run_to_see_output')}</p>
                                            </div>
                                        )}
                                    </div>
                                </TabsContent>
                                 <TabsContent value="explanation">
                                    <div className="font-sans h-96 bg-muted rounded-md border p-4 overflow-auto">
                                        {isExplaining && (
                                            <div className="flex items-center justify-center h-full">
                                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                                <p className="ml-4 text-muted-foreground">{t('ai_is_thinking')}</p>
                                            </div>
                                        )}
                                        {explanation && !isExplaining && (
                                            <ReactMarkdown className="prose prose-sm dark:prose-invert max-w-none">
                                                {explanation}
                                            </ReactMarkdown>
                                        )}
                                        {!explanation && !isExplaining && (
                                            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                                                <BrainCircuit className="h-12 w-12 mb-4" />
                                                <p>{t('click_ai_button_for_explanation')}</p>
                                            </div>
                                        )}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <AlertDialog open={!!snippetToDelete} onOpenChange={(isOpen) => !isOpen && setSnippetToDelete(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t('are_you_sure_delete_snippet')}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {t('delete_snippet_confirm', { snippetTitle: snippetToDelete?.title || "" })}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setSnippetToDelete(null)}>{t('cancel')}</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive hover:bg-destructive/90">{t('delete')}</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{t('edit_snippet_title')}</DialogTitle>
                        <DialogDescription>{t('edit_snippet_desc')}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="edit-title">{t('title')}</Label>
                            <Input id="edit-title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-description">{t('description')}</Label>
                            <Textarea id="edit-description" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild><Button variant="outline">{t('cancel')}</Button></DialogClose>
                        <Button onClick={handleSaveEditedSnippet}>{t('save_changes')}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
