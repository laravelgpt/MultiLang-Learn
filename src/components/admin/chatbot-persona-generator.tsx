"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateDefaultChatbotPersona } from '@/ai/flows/generate-default-chatbot-persona';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  prompt: z.string().min(10, "Prompt must be at least 10 characters long."),
});

export function ChatbotPersonaGenerator() {
  const [loading, setLoading] = useState(false);
  const [persona, setPersona] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "A friendly and helpful programming tutor for beginners.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setPersona("");
    try {
      const result = await generateDefaultChatbotPersona({ prompt: values.prompt });
      setPersona(result.persona);
    } catch (error) {
      console.error(error);
      setPersona("Failed to generate persona. Please check the console for errors.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>ChatBot Personality Generator</CardTitle>
            <CardDescription>
              Generate a new personality for the chatbot using a prompt.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Persona Prompt</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., A witty AI that speaks in pirate slang" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {persona && (
              <div className="p-4 bg-muted rounded-md border">
                <h4 className="font-semibold mb-2">Generated Persona:</h4>
                <p className="text-sm text-muted-foreground">{persona}</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate Persona
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
