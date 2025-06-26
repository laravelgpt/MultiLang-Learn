
"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const landingPageTemplates = [
  {
    id: "tech-corporate",
    title: "Tech Corporate",
    description: "A clean and professional design, perfect for showcasing your platform's features to a corporate audience.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "abstract tech background",
    isActive: true,
  },
  {
    id: "vibrant-startup",
    title: "Vibrant Startup",
    description: "A bold and colorful layout that appeals to a modern, energetic user base.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "vibrant abstract gradient",
    isActive: false,
  },
  {
    id: "minimalist-focus",
    title: "Minimalist Focus",
    description: "A simple, content-first design that emphasizes readability and ease of use.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "minimalist white texture",
    isActive: false,
  },
  {
    id: "dark-mode-dev",
    title: "Dark Mode Dev",
    description: "A sleek, dark-themed layout designed for developers who love the dark mode aesthetic.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dark code background",
    isActive: false,
  },
];

export default function LandingPageManagement() {
  const { toast } = useToast();
  const [templates, setTemplates] = useState(landingPageTemplates);

  const handleSetActive = (id: string) => {
    setTemplates(
      templates.map((t) => ({ ...t, isActive: t.id === id }))
    );
    toast({
      title: "Landing Page Updated",
      description: `Template "${templates.find(t => t.id === id)?.title}" is now active. (This is a demo)`,
    });
  };

  return (
    <>
      <PageHeader
        title="Landing Page Management"
        description="Choose and customize the look of your public-facing landing page."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {templates.map((template) => (
          <Card key={template.id} className={template.isActive ? "border-primary" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{template.title}</CardTitle>
                {template.isActive && <Badge>Active</Badge>}
              </div>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={template.imageUrl}
                width={600}
                height={400}
                alt={`Preview of ${template.title}`}
                className="rounded-md shadow-md"
                data-ai-hint={template.imageHint}
              />
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" disabled>
                Edit Content
              </Button>
              <Button
                onClick={() => handleSetActive(template.id)}
                disabled={template.isActive}
              >
                Set Active
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
