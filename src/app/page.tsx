import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Bot, BookOpenCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { generateImage } from "@/ai/flows/generate-image";

const features = [
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Diverse Language Support",
        description: "From Python to Rust, learn the language you need for your next big project.",
    },
    {
        icon: <Bot className="w-8 h-8 text-primary" />,
        title: "AI-Powered Assistant",
        description: "Stuck on a problem? Our AI tutor is available 24/7 to help you understand complex concepts.",
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Interactive Practice",
        description: "Apply your knowledge with hands-on coding exercises and real-world challenges.",
    },
];

const plansData = [
  { name: "Free Tier", price: "$0", description: "Basic access for all users.", features: ["Access to 2 languages", "Community support"] },
  { name: "Premium Monthly", price: "$9.99/mo", description: "Full access on a monthly basis.", features: ["Unlimited languages", "AI Tutor access", "Priority support"] },
  { name: "Premium Yearly", price: "$99/yr", description: "Get 2 months free with yearly billing.", features: ["Unlimited languages", "AI Tutor access", "Priority support"] },
];

export default async function LandingPage() {
    const { imageDataUri } = await generateImage({ prompt: "A dynamic and abstract hero image for a programming education platform. It should feature stylized representations of code snippets, neural network diagrams, and glowing data nodes connected by luminous lines. The color palette should be modern and vibrant, incorporating shades of electric blue, deep purple, and bright teal against a dark, clean background. The overall aesthetic should be sophisticated, tech-forward, and inspiring." });

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 flex items-center">
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <BookOpenCheck className="h-6 w-6 text-primary" />
                            <span className="font-bold sm:inline-block">MultiLang Learn</span>
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-2">
                        <Button variant="ghost" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="container py-20 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                        Master Any Programming Language, Faster.
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        MultiLang Learn combines cutting-edge AI, interactive exercises, and a supportive community to help you achieve your coding goals.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/register">Start Learning for Free</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="#features">Explore Features</Link>
                        </Button>
                    </div>
                    <div className="mt-12">
                        <Image
                            src={imageDataUri}
                            width={1200}
                            height={600}
                            alt="MultiLang Learn Dashboard"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-muted">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold font-headline">Why Choose MultiLang Learn?</h2>
                            <p className="mt-2 text-muted-foreground">Everything you need to succeed in one platform.</p>
                        </div>
                        <div className="mt-12 grid gap-8 md:grid-cols-3">
                            {features.map((feature, index) => (
                                <Card key={index}>
                                    <CardHeader className="items-center">
                                        <div className="p-4 bg-primary/10 rounded-full">
                                            {feature.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardTitle className="mb-2">{feature.title}</CardTitle>
                                        <CardDescription>{feature.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold font-headline">Choose Your Plan</h2>
                            <p className="mt-2 text-muted-foreground">Start for free, then upgrade when you're ready.</p>
                        </div>
                        <div className="mt-12 grid gap-8 md:grid-cols-3">
                            {plansData.map((plan) => (
                                <Card key={plan.name} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle>{plan.name}</CardTitle>
                                        <p className="text-4xl font-bold font-headline pt-2">{plan.price}</p>
                                        <CardDescription>{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="space-y-3 text-sm">
                                            {plan.features.map(feat => (
                                                <li key={feat} className="flex items-center gap-2 text-muted-foreground">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild className="w-full" variant={plan.name.includes("Premium") ? "default" : "outline"}>
                                            <Link href="/register">
                                                {plan.name === 'Free Tier' ? 'Start for Free' : 'Upgrade Now'}
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <footer className="py-6 md:px-8 md:py-0 bg-muted">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} MultiLang Learn. All Rights Reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
