"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Code, FileCode, Play, RefreshCw, Copy, Save, BrainCircuit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const codeExamples = [
    {
        title: "Variables and Data Types",
        description: "Learn about different variable declarations and data types",
        tag: "javascript",
        code: `// Variables can be declared using var, let, or const
let message = "Hello, World!"; // string
const score = 100; // number
var isStudent = true; // boolean

console.log(message);
console.log("Score:", score);
console.log("Is student?", isStudent);`
    },
    {
        title: "Functions and Scope",
        description: "Understanding function declarations, expressions, and scope",
        tag: "javascript",
        code: `// Function Declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function Expression
const add = function(a, b) {
  return a + b;
};

console.log(greet("Alice"));
console.log("Sum:", add(5, 3));`
    },
    {
        title: "Arrays and Loops",
        description: "Working with arrays and different loop structures",
        tag: "javascript",
        code: `const fruits = ["Apple", "Banana", "Cherry"];

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop
for (const fruit of fruits) {
  console.log(fruit);
}`
    }
];

const initialCode = `// Welcome to the Practice Zone!
// Try writing some code and run it to see the output

function greetUser(name) {
  return \`Hello, \${name}! Welcome to LearnCode.\`;
}

// Test the function
console.log(greetUser("Programmer"));

// Try modifying the code and run it again!`;

export default function PracticePage() {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState("");
    const { toast } = useToast();

    const handleRunCode = () => {
        let capturedOutput = '';
        const originalLog = console.log;
        
        console.log = (...args) => {
          capturedOutput += args.map(arg => {
              if (typeof arg === 'object' && arg !== null) {
                  return JSON.stringify(arg, null, 2);
              }
              return String(arg);
          }).join(' ') + '\n';
        };

        try {
          // IMPORTANT: Using eval in a real-world application is a security risk.
          // This should be replaced with a sandboxed execution environment (e.g., Web Worker, iframe).
          eval(code);
          setOutput(capturedOutput || "Code executed successfully with no output.");
        } catch (error: any) {
          setOutput(`Error: ${error.message}`);
        } finally {
          console.log = originalLog;
        }
    };
    
    const handleExampleClick = (exampleCode: string) => {
        setCode(exampleCode);
        setOutput("");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        toast({ title: 'Copied!', description: 'Code copied to clipboard.' });
    };

    return (
        <>
            <div className="flex items-center gap-4 mb-8">
                <FileCode size={40} className="text-primary shrink-0" />
                <div>
                    <h1 className="font-headline text-3xl font-bold text-primary">Practice & Examples</h1>
                    <p className="text-lg text-muted-foreground">Practice your coding skills with our interactive code editor and examples.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Left Column: Code Examples */}
                <div className="lg:col-span-1 space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2"><FileCode className="h-5 w-5" /> Code Examples</h2>
                    {codeExamples.map((example, index) => (
                        <Card key={index} className="cursor-pointer hover:border-primary" onClick={() => handleExampleClick(example.code)}>
                            <CardHeader>
                                <CardTitle className="text-lg">{example.title}</CardTitle>
                                <CardDescription>{example.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Badge variant="outline">{example.tag}</Badge>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Right Column: Interactive Code Editor */}
                <div className="lg:col-span-2 relative">
                    <Card>
                        <CardHeader>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <CardTitle className="text-xl flex items-center gap-2"><Code className="h-5 w-5" /> Interactive Code Editor</CardTitle>
                                <div className="flex items-center gap-2">
                                    <Select defaultValue="javascript">
                                        <SelectTrigger className="w-auto">
                                            <div className='flex items-center gap-2'>
                                                <Image src="https://placehold.co/16x16.png" width={16} height={16} alt="JS" data-ai-hint="javascript logo" />
                                                <SelectValue placeholder="Language" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="javascript">JavaScript</SelectItem>
                                            <SelectItem value="python" disabled>Python</SelectItem>
                                            <SelectItem value="pascal" disabled>Pascal</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button variant="outline" size="icon" onClick={() => setCode(initialCode)}><RefreshCw className="h-4 w-4" /></Button>
                                    <Button onClick={handleRunCode} className="bg-green-600 hover:bg-green-700 text-white">
                                        <Play className="mr-2 h-4 w-4" /> Run
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="editor">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="editor">Editor</TabsTrigger>
                                    <TabsTrigger value="output">Output</TabsTrigger>
                                </TabsList>
                                <TabsContent value="editor">
                                    <Textarea 
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        className="font-mono h-96 bg-muted rounded-md border" 
                                        placeholder="Write your code here..."
                                    />
                                </TabsContent>
                                <TabsContent value="output">
                                    <div className="font-mono h-96 bg-muted rounded-md border p-4 overflow-auto">
                                        <pre className="text-sm whitespace-pre-wrap">{output || "Run code to see output..."}</pre>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                    <div className="absolute right-4 -bottom-4 flex flex-col gap-2">
                         <Button variant="secondary" size="icon" className="rounded-full shadow-lg h-10 w-10 bg-purple-500 hover:bg-purple-600 text-white">
                            <BrainCircuit className="h-5 w-5" />
                        </Button>
                        <Button onClick={handleCopy} variant="secondary" size="icon" className="rounded-full shadow-lg h-10 w-10 bg-blue-500 hover:bg-blue-600 text-white">
                            <Copy className="h-5 w-5" />
                        </Button>
                        <Button variant="secondary" size="icon" className="rounded-full shadow-lg h-10 w-10 bg-primary hover:bg-primary/90 text-white">
                            <Save className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
