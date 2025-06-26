import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import Image from "next/image";

const languages = [
  { name: 'Python', icon: 'https://placehold.co/32x32.png', topics: 15, lessons: 120, popularity: 5210, difficulty: 'Beginner' },
  { name: 'JavaScript', icon: 'https://placehold.co/32x32.png', topics: 18, lessons: 150, popularity: 4890, difficulty: 'Beginner' },
  { name: 'Java', icon: 'https://placehold.co/32x32.png', topics: 20, lessons: 180, popularity: 3120, difficulty: 'Intermediate' },
  { name: 'C++', icon: 'https://placehold.co/32x32.png', topics: 22, lessons: 200, popularity: 2540, difficulty: 'Advanced' },
  { name: 'Go', icon: 'https://placehold.co/32x32.png', topics: 12, lessons: 90, popularity: 1980, difficulty: 'Intermediate' },
];

export default function LanguagesPage() {
  return (
    <>
      <PageHeader
        title="Languages & Topics"
        description="Manage programming languages, topics, and lessons."
      >
        <Button>
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
                <TableRow key={lang.name}>
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
                        <DropdownMenuItem>Manage Topics & Lessons</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
