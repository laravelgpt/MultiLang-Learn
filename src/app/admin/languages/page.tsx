
"use client";

import { useState } from "react";
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
import { languagesSummaryData, languagesCurriculumData, type LanguageSummary } from "@/lib/mock-data";
import { generateLanguageTopics } from "@/ai/flows/generate-language-topics";

export default function LanguagesPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [languages, setLanguages] = useState<LanguageSummary[]>(languagesSummaryData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingLanguage, setEditingLanguage] = useState<Partial<LanguageSummary> | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleAddNew = () => {
    setEditingLanguage({ name: '', icon: 'https://placehold.co/32x32.png', difficulty: 'Beginner' });
    setIsDialogOpen(true);
  };

  const handleEdit = (lang: LanguageSummary) => {
    setEditingLanguage({ ...lang });
    setIsDialogOpen(true);
  };

  const handleDelete = (langId: string) => {
    // Note: In a real app, this would be an API call.
    // Here we are directly mutating the imported "database".
    const index = languagesSummaryData.findIndex(l => l.id === langId);
    if (index > -1) {
        languagesSummaryData.splice(index, 1);
    }
    delete languagesCurriculumData[langId];
    
    setLanguages([...languagesSummaryData]);
    toast({
        title: "Language Deleted",
        description: "The language has been removed.",
    });
  }

  const handleSave = async () => {
    if (!editingLanguage || !editingLanguage.name) return;
    setIsSaving(true);

    try {
        if ('id' in editingLanguage && editingLanguage.id) {
          // Editing existing language
          const index = languagesSummaryData.findIndex(l => l.id === editingLanguage.id);
          if (index > -1) {
            languagesSummaryData[index] = editingLanguage as LanguageSummary;
          }
          setLanguages([...languagesSummaryData]);
          toast({ title: "Language Updated" });
        } else {
          // Adding new language
          const languageId = editingLanguage.name.toLowerCase().replace(/\s/g, '-').replace(/[^\\w-]/g, '');
          
          // Call AI to generate topics
          const aiResult = await generateLanguageTopics({ languageName: editingLanguage.name });

          const newLanguageSummary: LanguageSummary = {
            id: languageId,
            topics: aiResult.topics.length,
            lessons: 0, // No lessons initially
            popularity: 0,
            ...editingLanguage
          } as LanguageSummary;
          
          const newLanguageCurriculum = {
              name: newLanguageSummary.name,
              topics: aiResult.topics.map((t, index) => ({
                  id: `t${Date.now()}${index}`,
                  title: t.title,
                  lessons: []
              }))
          };

          // Update our mock "database"
          languagesSummaryData.push(newLanguageSummary);
          languagesCurriculumData[languageId] = newLanguageCurriculum;

          setLanguages([...languagesSummaryData]);
          toast({ title: "Language Added", description: `${editingLanguage.name} was added with ${aiResult.topics.length} starter topics.` });
        }
    } catch (error) {
        console.error("Failed to save language:", error);
        toast({
            title: "Error",
            description: "Could not save the language. Please try again.",
            variant: "destructive",
        });
    } finally {
        setIsSaving(false);
        setIsDialogOpen(false);
        setEditingLanguage(null);
    }
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
              {languages.map((lang) => (
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
                        <DropdownMenuItem onSelect={() => handleEdit(lang)}>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive" onSelect={() => handleDelete(lang.id)}>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editingLanguage?.id ? 'Edit Language' : 'Add New Language'}</DialogTitle>
            <DialogDescription>
              {editingLanguage?.id ? 'Update the details of this language.' : 'Add a new language. Starter topics will be generated by AI.'}
            </DialogDescription>
          </DialogHeader>
          {editingLanguage && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" value={editingLanguage.name} onChange={(e) => setEditingLanguage({...editingLanguage, name: e.target.value})} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="icon" className="text-right">Icon URL</Label>
                <Input id="icon" value={editingLanguage.icon} onChange={(e) => setEditingLanguage({...editingLanguage, icon: e.target.value})} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="difficulty" className="text-right">Difficulty</Label>
                <Select value={editingLanguage.difficulty} onValueChange={(value) => setEditingLanguage({...editingLanguage, difficulty: value as LanguageSummary['difficulty']})}>
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
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
                <Button variant="outline" disabled={isSaving}>Cancel</Button>
            </DialogClose>
            <Button onClick={handleSave} disabled={isSaving}>
                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSaving ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
