import { PageHeader } from '@/components/admin/page-header';
import { StatCard } from '@/components/admin/stat-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Activity, BrainCircuit, Code, DollarSign, Users, Wifi, Gem } from 'lucide-react';
import Link from 'next/link';

const statCards = [
  { title: "Total Users", value: "12,405", icon: Users, description: "+20.1% from last month" },
  { title: "Active Learners Today", value: "1,250", icon: Activity, description: "+180 since yesterday" },
  { title: "Total Subscriptions", value: "3,412", icon: Gem, description: "1,200 Premium" },
  { title: "Most Popular Language", value: "Python", icon: Code, description: "Followed by JavaScript" },
  { title: "Realtime Active Sessions", value: "316", icon: Wifi, description: "Across all modules" },
  { title: "Total AI Usage This Month", value: "2.5M Tokens", icon: BrainCircuit, description: "Gemini Provider" },
];

const recentSubscribers = [
  { name: "John Doe", email: "john.d@example.com", plan: "Premium Yearly", amount: "$99.00" },
  { name: "Jane Smith", email: "jane.s@example.com", plan: "Premium Monthly", amount: "$9.99" },
  { name: "Sam Wilson", email: "sam.w@example.com", plan: "Premium Yearly", amount: "$99.00" },
  { name: "Alice Brown", email: "alice.b@example.com", plan: "Free", amount: "$0.00" },
  { name: "Bob Johnson", email: "bob.j@example.com", plan: "Premium Monthly", amount: "$9.99" },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" description="Here's a snapshot of your platform's performance." />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Subscribers</CardTitle>
                <CardDescription>A list of recent users who subscribed.</CardDescription>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/admin/subscriptions">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentSubscribers.map((sub, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium">{sub.name}</div>
                      <div className="text-sm text-muted-foreground">{sub.email}</div>
                    </TableCell>
                    <TableCell>{sub.plan}</TableCell>
                    <TableCell className="text-right">{sub.amount}</TableCell>
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
