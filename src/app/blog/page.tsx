import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types";

export const metadata: Metadata = {
    title: "Blog",
    description: "Explore articles on oral health, breathing, scientific research, and lifestyle from the experts at RespireVital.",
};

const blogPosts: BlogPost[] = [
    {
        slug: "the-surprising-link-between-oral-posture-and-sleep-quality",
        title: "The Surprising Link Between Oral Posture and Sleep Quality",
        author: "Dr. Eleanor Vance",
        authorAvatar: "https://placehold.co/100x100.png",
        date: "October 26, 2023",
        excerpt: "Discover how the way you hold your jaw and tongue during the day can dramatically affect your sleep at night. We dive into the science of myofunctional therapy.",
        category: "Scientific Research",
        content: "",
        image: "https://placehold.co/1200x600.png",
        imageHint: "person sleeping peacefully",
    },
    {
        slug: "5-breathing-exercises-to-boost-your-energy",
        title: "5 Breathing Exercises to Boost Your Energy",
        author: "Dr. Kenji Tanaka",
        authorAvatar: "https://placehold.co/100x100.png",
        date: "October 15, 2023",
        excerpt: "Feeling sluggish? These five simple breathing techniques can increase oxygenation and give you a natural energy boost, anytime, anywhere.",
        category: "Lifestyle",
        content: "",
        image: "https://placehold.co/1200x600.png",
        imageHint: "person meditating outdoors",
    },
    {
        slug: "why-nasal-breathing-is-a-superpower",
        title: "Why Nasal Breathing is a Superpower You Didn't Know You Had",
        author: "Dr. Eleanor Vance",
        authorAvatar: "https://placehold.co/100x100.png",
        date: "September 28, 2023",
        excerpt: "Breathing through your nose does more than just deliver air. It filters, warms, and humidifies it, while also boosting nitric oxide. Learn why it's crucial for your health.",
        category: "Oral Health",
        content: "",
        image: "https://placehold.co/1200x600.png",
        imageHint: "closeup nose profile",
    },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-16">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">RespireVital Blog</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Insights and knowledge from the forefront of respiratory and oral wellness.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.slug} className="flex flex-col overflow-hidden group">
                        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                             <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={post.imageHint} />
                        </Link>
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                            <CardTitle className="font-headline text-xl">
                                <Link href={`/blog/${post.slug}`} className="hover:text-primary">{post.title}</Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={post.authorAvatar} alt={post.author} data-ai-hint="professional portrait" />
                                    <AvatarFallback>{post.author.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-semibold">{post.author}</p>
                                    <p className="text-xs text-muted-foreground">{post.date}</p>
                                </div>
                            </div>
                             <Link href={`/blog/${post.slug}`} className="text-primary hover:text-primary/80 flex items-center text-sm font-semibold">
                                Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
