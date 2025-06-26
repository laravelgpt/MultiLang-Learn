import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, DollarSign, XCircle } from "lucide-react";
import Image from "next/image";

const plans = [
  { name: "Free Tier", price: "$0", description: "Basic access for all users.", features: ["Access to 2 languages", "Community support"] },
  { name: "Premium Monthly", price: "$9.99/mo", description: "Full access on a monthly basis.", features: ["Unlimited languages", "AI Tutor access", "Priority support"] },
  { name: "Premium Yearly", price: "$99/yr", description: "Get 2 months free with yearly billing.", features: ["Unlimited languages", "AI Tutor access", "Priority support"] },
];

const paymentMethods = [
  { name: "Stripe", icon: "https://placehold.co/80x32.png", enabled: true },
  { name: "PayPal", icon: "https://placehold.co/80x32.png", enabled: true },
  { name: "bKash", icon: "https://placehold.co/80x32.png", enabled: true },
  { name: "Nagad", icon: "https://placehold.co/80x32.png", enabled: false },
];

const manualPayments = [
    { id: 'TXN7348', user: 'user1@example.com', amount: '৳1000', method: 'bKash', date: '2024-07-20' },
    { id: 'TXN9210', user: 'user2@example.com', amount: '৳1000', method: 'bKash', date: '2024-07-19' },
];

const failedTransactions = [
    { id: 'FTXN101', user: 'user3@example.com', amount: '$9.99', reason: 'Insufficient funds', date: '2024-07-20' },
    { id: 'FTXN102', user: 'user4@example.com', amount: '$99.00', reason: 'Card declined', date: '2024-07-18' },
];

export default function SubscriptionsPage() {
  return (
    <>
      <PageHeader
        title="Subscription Control"
        description="Manage plans, pricing, and payment gateways."
      />
      <div className="space-y-8">
        <Card>
            <CardHeader>
                <CardTitle>Subscription Plans</CardTitle>
                <CardDescription>Set pricing for your subscription tiers.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
                {plans.map((plan) => (
                    <Card key={plan.name}>
                        <CardHeader>
                            <CardTitle>{plan.name}</CardTitle>
                            <p className="text-3xl font-bold font-headline pt-2">{plan.price}</p>
                            <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {plan.features.map(feat => <li key={feat} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /><span>{feat}</span></li>)}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Edit Plan</Button>
                        </CardFooter>
                    </Card>
                ))}
            </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Enable or disable available payment methods.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {paymentMethods.map((method) => (
                        <div key={method.name} className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-4">
                                <Image src={method.icon} alt={method.name} width={64} height={24} data-ai-hint="payment gateway logo" />
                                <span className="font-medium">{method.name}</span>
                            </div>
                            <Switch defaultChecked={method.enabled} />
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Manual Payments</CardTitle>
                    <CardDescription>Approve or reject manual payments.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {manualPayments.map(p => (
                                <TableRow key={p.id}>
                                    <TableCell><div className="font-medium">{p.user}</div><div className="text-xs text-muted-foreground">{p.id}</div></TableCell>
                                    <TableCell>{p.amount}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <Button size="icon" variant="outline" className="h-8 w-8 text-green-600"><CheckCircle className="h-4 w-4" /></Button>
                                        <Button size="icon" variant="outline" className="h-8 w-8 text-red-600"><XCircle className="h-4 w-4" /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Failed Transactions</CardTitle>
                <CardDescription>A log of all failed payment transactions.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Reason</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {failedTransactions.map(t => (
                                <TableRow key={t.id}>
                                    <TableCell className="font-medium">{t.user}</TableCell>
                                    <TableCell>{t.amount}</TableCell>
                                    <TableCell><Badge variant="destructive">{t.reason}</Badge></TableCell>
                                    <TableCell>{t.date}</TableCell>
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
