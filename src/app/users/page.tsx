"use client";

import { useState } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const usersData = [
    { id: 'usr_1', name: 'John Doe', email: 'john.doe@example.com', role: 'User', joined: '2023-10-25', status: 'Active', avatar: 'https://placehold.co/40x40.png' },
    { id: 'usr_2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin', joined: '2023-09-15', status: 'Active', avatar: 'https://placehold.co/40x40.png' },
    { id: 'usr_3', name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'User', joined: '2024-01-10', status: 'Active', avatar: 'https://placehold.co/40x40.png' },
    { id: 'usr_4', name: 'Alice Brown', email: 'alice.brown@example.com', role: 'User', joined: '2024-03-20', status: 'Inactive', avatar: 'https://placehold.co/40x40.png' },
    { id: 'usr_5', name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'User', joined: '2024-05-01', status: 'Active', avatar: 'https://placehold.co/40x40.png' },
];

type User = typeof usersData[0];

export default function UsersPage() {
    const [users, setUsers] = useState(usersData);
    const [isConfirmOpen, setConfirmOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const { toast } = useToast();

    const handleDeactivateClick = (user: User) => {
        setSelectedUser(user);
        setConfirmOpen(true);
    };

    const handleDeactivateConfirm = () => {
        if (!selectedUser) return;
        setUsers(users.map(u => 
            u.id === selectedUser.id ? { ...u, status: 'Inactive' } : u
        ));
        toast({
            title: "User Deactivated",
            description: `${selectedUser.name} has been successfully deactivated.`,
        });
        setConfirmOpen(false);
        setSelectedUser(null);
    };
    
    return (
        <>
            <PageHeader
                title="User Management"
                description="View, manage, and promote users."
            >
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add User
                </Button>
            </PageHeader>
            
            <Card>
                <CardHeader>
                    <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
                        <div>
                            <CardTitle>All Users</CardTitle>
                            <CardDescription>A list of all users in the system.</CardDescription>
                        </div>
                        <div className="flex gap-2">
                             <Input placeholder="Filter by name or email..." className="max-w-xs" />
                             <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Roles</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="user">User</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date Joined</TableHead>
                                <TableHead><span className="sr-only">Actions</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="profile avatar" />
                                                <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-medium">{user.name}</div>
                                                <div className="text-sm text-muted-foreground">{user.email}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>{user.role}</Badge>
                                    </TableCell>
                                    <TableCell>
                                         <Badge variant={user.status === 'Active' ? 'outline' : 'destructive'} className={user.status === 'Active' ? 'text-green-600 border-green-600' : ''}>
                                            {user.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{user.joined}</TableCell>
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
                                                <DropdownMenuItem>View Learning History</DropdownMenuItem>
                                                <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                                <DropdownMenuItem>Promote to Admin</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem 
                                                    className="text-destructive" 
                                                    onSelect={() => handleDeactivateClick(user)}
                                                    disabled={user.status === 'Inactive'}
                                                >
                                                    Deactivate Account
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <AlertDialog open={isConfirmOpen} onOpenChange={setConfirmOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action will deactivate the account for <span className="font-semibold">{selectedUser?.name}</span>. They will lose access to the platform. This can be undone later.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeactivateConfirm} className="bg-destructive hover:bg-destructive/90">Deactivate</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </>
    );
}
