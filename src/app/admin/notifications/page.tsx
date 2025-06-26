
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialNotifications = [
    { id: 1, title: "New Python Course Live!", type: "Announcement", sentAt: "2024-07-20 10:00 AM", recipients: "All Users" },
    { id: 2, title: "Scheduled Maintenance", type: "System Alert", sentAt: "2024-07-19 06:00 PM", recipients: "All Users" },
    { id: 3, title: "Summer Discount Offer", type: "Announcement", sentAt: "2024-07-18 02:30 PM", recipients: "Premium Users" },
    { id: 4, title: "JavaScript DSA lessons added", type: "Announcement", sentAt: "2024-07-17 11:00 AM", recipients: "All Users" },
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(initialNotifications);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const { toast } = useToast();

    const handleSendNotification = () => {
        if (!title.trim() || !message.trim()) {
            toast({
                title: "Error",
                description: "Title and message cannot be empty.",
                variant: "destructive",
            });
            return;
        }

        const newNotification = {
            id: Date.now(),
            title,
            type: "Announcement", // For now, default to Announcement
            sentAt: new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
            }),
            recipients: "All Users",
        };

        setNotifications([newNotification, ...notifications]);
        setTitle("");
        setMessage("");

        toast({
            title: "Notification Sent!",
            description: `"${title}" has been sent to all users.`,
        });
    };

    return (
        <>
            <PageHeader
                title="Notification Center"
                description="Send announcements and alerts to your users."
            />

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Send New Notification</CardTitle>
                        <CardDescription>Draft and send a new message to your users.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                placeholder="e.g., New Course Announcement"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                rows={5}
                                placeholder="Compose your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleSendNotification}>
                            <Send className="mr-2 h-4 w-4" />
                            Send Notification
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Notification History</CardTitle>
                        <CardDescription>A log of all past notifications sent.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Sent At</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {notifications.map((notif) => (
                                    <TableRow key={notif.id}>
                                        <TableCell className="font-medium">{notif.title}</TableCell>
                                        <TableCell>
                                            <Badge variant={notif.type === 'Announcement' ? 'secondary' : 'destructive'}>{notif.type}</Badge>
                                        </TableCell>
                                        <TableCell className="text-sm text-muted-foreground">{notif.sentAt}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
