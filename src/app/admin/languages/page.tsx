
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoreHorizontal, PlusCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { addLanguageAction, deleteLanguageAction } from "@/actions/languageActions";
import { getLanguagesSummary } from "@/services/languageService";
import type { LanguageSummary } from "@/lib/mock-data";
import { Skeleton } from "@/components/ui/skeleton";

export default function LanguagesPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [languages, setLanguages] = useState<LanguageSummary[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      setIsLoading(true);
      const summary = await getLanguagesSummary();
      setLanguages(summary);
      setIsLoading(false);
    };
    fetchLanguages();
  }, []);
  
  const handleAddNew = () => {
    setIsDialogOpen(true);
  };

  const handleDelete = async (langId: string, langName: string) => {
    const result = await deleteLanguageAction(langId);
    if (result?.error) {
      toast({ title: "Error", description: result.error, variant: "destructive" });
    } else {
      setLanguages(languages.filter(l => l.id !== langId));
      toast({ title: "Language Deleted", description: `${langName} has been removed.` });
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);

    const formData = new FormData(event.currentTarget);
    const result = await addLanguageAction(formData);

    if (result?.error) {
        toast({
            title: "Error",
            description: result.error,
            variant: "destructive",
        });
    } else if (result?.success) {
        toast({ title: "Language Added", description: result.message });
        setIsDialogOpen(false);
        const summary = await getLanguagesSummary();
        setLanguages(summary);
    }
    
    setIsSaving(false);
  };
  
  return (
    <>
      <PageHeader
        title="Languages & Topics"
        description="Manage programming languages, topics, and lessons."
      >
        <Button onClick={handleAddNew}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Language
        </Button>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle>All Languages</CardTitle>
          <CardDescription>A list of all available programming languages.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Language</TableHead>
                <TableHead>Topics</TableHead>
                <TableHead>Lessons</TableHead>
                <TableHead>Enrolled Users</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-8 w-32" /></TableCell>
                    <TableCell><Skeleton className="h-8 w-12" /></TableCell>
                    <TableCell><Skeleton className="h-8 w-12" /></TableCell>
                    <TableCell><Skeleton className="h-8 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-8 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                  </TableRow>
                ))
              ) : (
                languages.map((lang) => (
                  <TableRow key={lang.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Image src={lang.icon} alt={lang.name} width={32} height={32} className="rounded-sm" data-ai-hint="language logo" />
                        <span>{lang.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{lang.topics}</TableCell>
                    <TableCell>{lang.lessons}</TableCell>
                    <TableCell>{lang.popularity.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={
                        lang.difficulty === 'Beginner' ? 'secondary' :
                        lang.difficulty === 'Intermediate' ? 'outline' : 'default'
                      }>{lang.difficulty}</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onSelect={() => router.push(`/admin/languages/${lang.id}`)}>Manage Topics & Lessons</DropdownMenuItem>
                          <DropdownMenuItem disabled>Edit (Coming Soon)</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive" onSelect={() => handleDelete(lang.id, lang.name)}>Delete</DropdownMenuItem>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleFormSubmit}>
            <DialogHeader>
              <DialogTitle>Add New Language</DialogTitle>
              <DialogDescription>
                Add a new language. Starter topics and lessons will be generated by AI.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" name="name" defaultValue="" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="icon" className="text-right">Icon URL</Label>
                <Input id="icon" name="icon" defaultValue="https://placehold.co/32x32.png" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="difficulty" className="text-right">Difficulty</Label>
                <Select name="difficulty" defaultValue="Beginner">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lesson-count" className="text-right">Lessons / Topic</Label>
                <Input
                  id="lesson-count"
                  name="lessonCount"
                  type="number"
                  defaultValue={10}
                  className="col-span-3"
                  min="10"
                  max="100"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quick-questions-count" className="text-right">Quick Questions</Label>
                <Input
                  id="quick-questions-count"
                  name="quickQuestionsCount"
                  type="number"
                  defaultValue={3}
                  className="col-span-3"
                  min="3"
                  max="5"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                  <Button type="button" variant="outline" disabled={isSaving}>Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={isSaving}>
                  {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSaving ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
