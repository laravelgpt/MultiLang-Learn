
"use client";

import { PageHeader } from "@/components/admin/page-header";
import { ChatbotPersonaGenerator } from "@/components/admin/chatbot-persona-generator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const { toast } = useToast();

  const handleSave = (message: string) => {
    toast({
      title: "Settings Saved",
      description: message,
    });
  };
  
  return (
    <>
      <PageHeader
        title="System Settings"
        description="Configure your platform and integrations."
      />

      <Tabs defaultValue="system" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="ai">AI Integration</TabsTrigger>
        </TabsList>
        <TabsContent value="system" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Manage your platform's branding and general settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" defaultValue="MultiLang Learn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logo">Platform Logo</Label>
                  <Input id="logo" type="file" />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Puts the platform in maintenance mode for all users.</p>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>
              </CardContent>
              <CardFooter>
                 <Button onClick={() => handleSave("Platform settings have been updated.")}>Save Platform Settings</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Theme Customization</CardTitle>
                <CardDescription>Customize the look and feel of your platform.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color (HSL)</Label>
                  <Input id="primary-color" defaultValue="238 52% 37%" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accent-color">Accent Color (HSL)</Label>
                  <Input id="accent-color" defaultValue="262 73% 63%" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("Theme settings have been updated. This is a demo; styles are not applied.")}>Save Theme</Button>
              </CardFooter>
            </Card>

             <Card>
              <CardHeader>
                <CardTitle>Localization</CardTitle>
                <CardDescription>Manage currency formats for your platform.</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="space-y-2">
                  <Label htmlFor="currency">Currency Format</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="bdt">BDT (৳)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
               <CardFooter>
                 <Button onClick={() => handleSave("Localization settings have been updated.")}>Save Localization</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Email Settings</CardTitle>
                <CardDescription>Configure your SMTP or API-based email sender.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="space-y-2">
                  <Label htmlFor="smtp-host">SMTP Host</Label>
                  <Input id="smtp-host" placeholder="smtp.example.com" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input id="smtp-port" placeholder="587" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="smtp-user">SMTP Username</Label>
                  <Input id="smtp-user" placeholder="user@example.com" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("Email settings have been updated.")}>Save Email Settings</Button>
              </CardFooter>
            </Card>

            <ChatbotPersonaGenerator />
          </div>
        </TabsContent>
        <TabsContent value="ai" className="mt-6">
           <Card>
              <CardHeader>
                <CardTitle>AI Provider Settings</CardTitle>
                <CardDescription>Manage AI integration, API keys, and model parameters.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="ai-provider">AI Provider</Label>
                  <Select defaultValue="gemini">
                    <SelectTrigger id="ai-provider">
                      <SelectValue placeholder="Select AI provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gemini">Gemini</SelectItem>
                      <SelectItem value="openai">OpenAI</SelectItem>
                      <SelectItem value="claude">Claude</SelectItem>
                      <SelectItem value="mistral">Mistral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <Input id="api-key" type="password" placeholder="••••••••••••••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="default-model">Default Model</Label>
                   <Select defaultValue="gemini-1.5-pro">
                    <SelectTrigger id="default-model">
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gemini-1.5-pro">Gemini 1.5 Pro</SelectItem>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Slider id="temperature" defaultValue={[0.7]} max={1} step={0.1} />
                     <p className="text-sm text-muted-foreground">Controls randomness. Lower is more deterministic.</p>
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="max-tokens">Max Tokens</Label>
                    <Input id="max-tokens" type="number" defaultValue="2048" />
                    <p className="text-sm text-muted-foreground">Maximum length of the generated response.</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <Label htmlFor="chatbot-enabled">Enable ChatBot</Label>
                    <p className="text-sm text-muted-foreground">Toggle the chatbot on or off for all users.</p>
                  </div>
                  <Switch id="chatbot-enabled" defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("AI settings have been updated.")}>Save AI Settings</Button>
              </CardFooter>
            </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
