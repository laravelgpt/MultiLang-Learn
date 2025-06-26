
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Code, Trophy, Bot } from "lucide-react";
import Link from "next/link";

const learningModules = [
  { title: "Learn Guide", description: "Start with the basics of the language.", icon: Book, href: "/languages", cta: "Start Learning" },
  { title: "Practice & Examples", description: "Apply what you've learned with hands-on examples.", icon: Code, href: "#", cta: "Practice Now" },
  { title: "Challenge Tasks", description: "Test your skills with real-world challenges.", icon: Trophy, href: "#", cta: "Take Challenge" },
  { title: "Learning Assistant Bot", description: "Ask questions and get instant help from our AI tutor.", icon: Bot, href: "#", cta: "Chat with AI" },
];

export default function UserDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">Welcome to Your Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">Let's continue your learning journey!</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {learningModules.map((mod) => (
          <Card key={mod.title} className="flex flex-col">
            <CardHeader className="flex-grow">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                   <mod.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center">{mod.title}</CardTitle>
              <CardDescription className="text-center pt-2">{mod.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={mod.href}>{mod.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
          <CardDescription>A quick look at your achievements so far.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground">
            <p>Progress tracking is coming soon!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
