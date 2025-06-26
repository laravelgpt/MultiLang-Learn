
"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MoreHorizontal, PlusCircle, Loader2, Edit, Trash2, BrainCircuit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getChallenges, getLanguagesSummary } from "@/services/languageService";
import type { Challenge, LanguageSummary } from "@/lib/mock-data";
import { Skeleton } from "@/components/ui/skeleton";
import { saveChallengeAction, deleteChallengeAction, generateChallengeAction } from "@/actions/challengeActions";
import { languageNameMap } from "@/lib/language-map";

type ChallengeWithOptionalId = Omit<Challenge, 'id'> & { id?: number };

export default function ChallengesAdminPage() {
    const { toast } = useToast();
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [languages, setLanguages] = useState<LanguageSummary[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Dialog states
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingChallenge, setEditingChallenge] = useState<ChallengeWithOptionalId | null>(null);
    const [challengeToDelete, setChallengeToDelete] = useState<Challenge | null>(null);
    
    const [aiGeneratedData, setAiGeneratedData] = useState({ title: '', description: '' });

    const fetchChallenges = async () => {
        setIsLoading(true);
        const [challengesData, languagesData] = await Promise.all([getChallenges(), getLanguagesSummary()]);
        setChallenges(challengesData);
        setLanguages(languagesData);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchChallenges();
    }, []);

    const handleAddNew = () => {
        setEditingChallenge({});
        setAiGeneratedData({ title: '', description: '' });
        setIsFormOpen(true);
    };
    
    const handleEdit = (challenge: Challenge) => {
        setEditingChallenge(challenge);
        setAiGeneratedData({ title: challenge.title, description: challenge.description });
        setIsFormOpen(true);
    };

    const handleDelete = (challenge: Challenge) => {
        setChallengeToDelete(challenge);
    };
    
    const handleConfirmDelete = async () => {
        if (!challengeToDelete) return;
        setIsSubmitting(true);
        const result = await deleteChallengeAction(challengeToDelete.id);
        if (result?.error) {
            toast({ title: "Error", description: result.error, variant: "destructive" });
        } else {
            toast({ title: "Challenge Deleted", description: result.message });
            setChallengeToDelete(null);
            await fetchChallenges();
        }
        setIsSubmitting(false);
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);
        const result = await saveChallengeAction(formData);

        if (result?.error) {
            toast({ title: "Error", description: result.error, variant: "destructive" });
        } else {
            toast({ title: "Success", description: result.message });
            setIsFormOpen(false);
            setEditingChallenge(null);
            await fetchChallenges();
        }
        setIsSubmitting(false);
    };

    const handleAiGenerate = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const form = (event.target as HTMLButtonElement).closest('form');
        if (!form) return;

        setIsSubmitting(true);
        const formData = new FormData(form);
        const result = await generateChallengeAction(formData);
        
        if (result.error) {
            toast({ title: "AI Generation Failed", description: result.error, variant: "destructive" });
        } else if (result.data) {
            setAiGeneratedData(result.data);
            toast({ title: "Challenge Generated", description: "Title and description have been filled." });
        }
        setIsSubmitting(false);
    };


    return (
        <>
            <PageHeader title="Manage Challenges" description="Create, edit, and manage all coding challenges.">
                <Button onClick={handleAddNew}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add New Challenge
                </Button>
            </PageHeader>

            <Card>
                <CardHeader>
                    <CardTitle>All Challenges</CardTitle>
                    <CardDescription>A list of all coding challenges available on the platform.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Language</TableHead>
                                <TableHead>Difficulty</TableHead>
                                <TableHead>Points</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell><Skeleton className="h-6 w-48" /></TableCell>
                                        <TableCell><Skeleton className="h-6 w-24" /></TableCell>
                                        <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                                        <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                                        <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                challenges.map((challenge) => (
                                    <TableRow key={challenge.id}>
                                        <TableCell className="font-medium">{challenge.title}</TableCell>
                                        <TableCell>{languageNameMap[challenge.language] || challenge.language}</TableCell>
                                        <TableCell>
                                            <Badge variant={
                                                challenge.difficulty === 'Easy' ? 'secondary' :
                                                challenge.difficulty === 'Medium' ? 'outline' : 'default'
                                            }>{challenge.difficulty}</Badge>
                                        </TableCell>
                                        <TableCell>{challenge.points}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Toggle menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onSelect={() => handleEdit(challenge)}><Edit className="mr-2 h-4 w-4"/>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem className="text-destructive" onSelect={() => handleDelete(challenge)}><Trash2 className="mr-2 h-4 w-4"/>Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogContent className="sm:max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{editingChallenge?.id ? "Edit Challenge" : "Add New Challenge"}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleFormSubmit}>
                        <Tabs defaultValue="manual">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                                <TabsTrigger value="ai">Generate with AI</TabsTrigger>
                            </TabsList>
                            <TabsContent value="manual" className="py-4 space-y-4">
                                {editingChallenge?.id && <input type="hidden" name="id" value={editingChallenge.id} />}
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input id="title" name="title" defaultValue={editingChallenge?.title} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Description (Markdown)</Label>
                                    <Textarea id="description" name="description" rows={8} defaultValue={editingChallenge?.description} />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="language">Language</Label>
                                        <Select name="language" defaultValue={editingChallenge?.language}>
                                            <SelectTrigger><SelectValue placeholder="Select language" /></SelectTrigger>
                                            <SelectContent>
                                                {languages.map(lang => <SelectItem key={lang.id} value={lang.id}>{lang.name}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="difficulty">Difficulty</Label>
                                        <Select name="difficulty" defaultValue={editingChallenge?.difficulty}>
                                            <SelectTrigger><SelectValue placeholder="Select difficulty" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Easy">Easy</SelectItem>
                                                <SelectItem value="Medium">Medium</SelectItem>
                                                <SelectItem value="Hard">Hard</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                     <div className="space-y-2">
                                        <Label htmlFor="points">Points</Label>
                                        <Input id="points" name="points" type="number" defaultValue={editingChallenge?.points} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     <div className="space-y-2">
                                        <Label htmlFor="tests">Tests Count</Label>
                                        <Input id="tests" name="tests" type="number" defaultValue={editingChallenge?.tests} />
                                    </div>
                                     <div className="space-y-2">
                                        <Label htmlFor="timeLimitMinutes">Time Limit (Minutes)</Label>
                                        <Input id="timeLimitMinutes" name="timeLimitMinutes" type="number" defaultValue={editingChallenge?.timeLimitMinutes} placeholder="Optional" />
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="ai" className="py-4 space-y-4">
                                 <div className="space-y-2">
                                    <Label>AI Generator</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Generate a title and description for a new challenge. Fill in the rest of the details manually after generating.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="ai-language">Language</Label>
                                        <Select name="language">
                                            <SelectTrigger id="ai-language"><SelectValue placeholder="Select language" /></SelectTrigger>
                                            <SelectContent>
                                                {languages.map(lang => <SelectItem key={lang.id} value={lang.name}>{lang.name}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ai-difficulty">Difficulty</Label>
                                        <Select name="difficulty" defaultValue="Medium">
                                            <SelectTrigger id="ai-difficulty"><SelectValue placeholder="Select difficulty" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Easy">Easy</SelectItem>
                                                <SelectItem value="Medium">Medium</SelectItem>
                                                <SelectItem value="Hard">Hard</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ai-topic">Topic</Label>
                                        <Input id="ai-topic" name="topic" placeholder="e.g. Array manipulation"/>
                                    </div>
                                </div>
                                 <Button type="button" variant="secondary" onClick={handleAiGenerate} disabled={isSubmitting}>
                                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <BrainCircuit className="mr-2 h-4 w-4"/>}
                                    Generate
                                </Button>
                                <div className="space-y-4 pt-4 border-t">
                                     <div className="space-y-2">
                                        <Label htmlFor="ai-title">Generated Title</Label>
                                        <Input id="ai-title" name="title" value={aiGeneratedData.title} onChange={(e) => setAiGeneratedData({...aiGeneratedData, title: e.target.value})} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ai-description">Generated Description (Markdown)</Label>
                                        <Textarea id="ai-description" name="description" rows={8} value={aiGeneratedData.description} onChange={(e) => setAiGeneratedData({...aiGeneratedData, description: e.target.value})}/>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <DialogFooter className="pt-4">
                            <DialogClose asChild><Button type="button" variant="outline" disabled={isSubmitting}>Cancel</Button></DialogClose>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Save Challenge
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            <AlertDialog open={!!challengeToDelete} onOpenChange={() => setChallengeToDelete(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete the challenge: "{challengeToDelete?.title}".
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive hover:bg-destructive/90" disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
