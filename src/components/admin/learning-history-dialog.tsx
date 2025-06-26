
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type User = {
    id: string;
    name: string;
    email: string;
    role: string;
    joined: string;
    status: string;
    avatar: string;
};

const learningHistoryData = {
    'usr_1': [
        { language: 'Python', progress: 85, completedTopics: 98, totalTopics: 115, lastActivity: '2024-07-25' },
        { language: 'JavaScript', progress: 45, completedTopics: 58, totalTopics: 128, lastActivity: '2024-07-20' },
    ],
    'usr_2': [
         { language: 'Go', progress: 100, completedTopics: 112, totalTopics: 112, lastActivity: '2024-06-10' },
    ],
    'usr_3': [
         { language: 'JavaScript', progress: 92, completedTopics: 118, totalTopics: 128, lastActivity: '2024-07-28' },
    ],
    'usr_4': [
         { language: 'C++', progress: 15, completedTopics: 21, totalTopics: 142, lastActivity: '2024-05-01' },
    ],
    'usr_5': [
        { language: 'Java', progress: 60, completedTopics: 78, totalTopics: 130, lastActivity: '2024-07-15' },
        { language: 'Python', progress: 20, completedTopics: 23, totalTopics: 115, lastActivity: '2024-06-30' },
    ],
    'usr_6': [
        { language: 'Python', progress: 100, completedTopics: 115, totalTopics: 115, lastActivity: '2024-07-29' },
        { language: 'JavaScript', progress: 100, completedTopics: 128, totalTopics: 128, lastActivity: '2024-07-28' },
    ],
    'usr_7': [
        { language: 'Java', progress: 30, completedTopics: 39, totalTopics: 130, lastActivity: '2024-07-18' },
    ],
    'usr_8': [
        { language: 'Python', progress: 5, completedTopics: 6, totalTopics: 115, lastActivity: '2024-07-01' },
    ],
    'usr_9': [
        { language: 'Python', progress: 50, completedTopics: 57, totalTopics: 115, lastActivity: '2024-07-22' },
        { language: 'Go', progress: 75, completedTopics: 84, totalTopics: 112, lastActivity: '2024-07-21' },
    ],
    'usr_10': [
        { language: 'JavaScript', progress: 10, completedTopics: 13, totalTopics: 128, lastActivity: '2024-07-10' },
    ],
};

type LearningHistoryDialogProps = {
    user: User | null;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
};

export function LearningHistoryDialog({ user, isOpen, onOpenChange }: LearningHistoryDialogProps) {
    if (!user) return null;

    const history = learningHistoryData[user.id as keyof typeof learningHistoryData] || [];

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Learning History: {user.name}</DialogTitle>
                    <DialogDescription>
                        A summary of {user.name}'s progress and activity on the platform.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                    {history.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Language</TableHead>
                                    <TableHead className="w-[200px]">Progress</TableHead>
                                    <TableHead>Completed Topics</TableHead>
                                    <TableHead>Last Activity</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {history.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.language}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Progress value={item.progress} className="w-full" />
                                                <span className="text-xs text-muted-foreground">{item.progress}%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{item.completedTopics} / {item.totalTopics}</TableCell>
                                        <TableCell>{item.lastActivity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <div className="text-center py-8 text-muted-foreground">
                            <p>No learning history found for this user.</p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
