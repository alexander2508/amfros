import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Linkedin, Share2, Twitter, MessageCircle } from "lucide-react";

// This is a dummy function. In a real app, you would fetch data from a CMS.
async function getPostData(slug: string) {
    return {
        slug: "the-surprising-link-between-oral-posture-and-sleep-quality",
        title: "The Surprising Link Between Oral Posture and Sleep Quality",
        author: "Dr. Eleanor Vance",
        authorAvatar: "https://placehold.co/100x100.png",
        date: "October 26, 2023",
        category: "Scientific Research",
        image: "https://placehold.co/1200x600.png",
        imageHint: "person sleeping peacefully",
        content: `
            <p class="lead text-lg text-muted-foreground mb-6">It’s a scenario many are familiar with: you get a full eight hours of sleep but wake up feeling groggy and unrefreshed. While many factors can contribute to poor sleep quality, one of the most overlooked is your oral posture—the way your tongue, jaw, and lips are positioned when you’re not eating or speaking.</p>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Ideal Resting Posture</h3>
            <p>The optimal oral resting posture involves having your lips sealed without strain, your teeth slightly apart, and your tongue gently resting against the roof of your mouth, just behind your front teeth. This simple alignment encourages nasal breathing, which is critical for good health.</p>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">How Poor Posture Disrupts Sleep</h3>
            <p>When the tongue doesn't rest on the palate, it tends to fall back into the airway, especially during sleep. This can lead to a cascade of problems:</p>
            <ul class="list-disc list-inside space-y-2 my-4">
                <li><strong>Mouth Breathing:</strong> This is less efficient than nasal breathing and bypasses the natural filtering and humidification system of the nose.</li>
                <li><strong>Airway Obstruction:</strong> A low tongue posture can narrow the airway, leading to vibrations (snoring) and even partial or complete blockages (hypopneas and apneas).</li>
                <li><strong>Reduced Sleep Quality:</strong> These breathing disruptions can repeatedly pull you out of deep, restorative sleep stages, even if you don't fully wake up.</li>
            </ul>
            <blockquote class="border-l-4 border-accent pl-4 italic my-6">"Correcting oral posture is one of the most powerful, non-invasive ways to improve sleep architecture and overall health."</blockquote>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">The Role of Myofunctional Therapy</h3>
            <p>This is where myofunctional therapy comes in. Through a series of targeted exercises, it retrains the orofacial muscles to achieve and maintain the correct posture. Tools like our Oral Posture Trainer can help reinforce these new habits, making the process more effective and efficient. By strengthening the tongue and promoting proper alignment, you can help keep your airway open throughout the night, leading to deeper, more restorative sleep.</p>
            <p class="mt-4">The journey to better sleep may not start in the bedroom, but with the conscious practice of proper oral posture during your waking hours. It's a foundational piece of the wellness puzzle that pays dividends every night.</p>
        `,
    };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPostData(params.slug);
    return {
        title: post.title,
        description: `Read the article "${post.title}" on the RespireVital blog.`,
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostData(params.slug);

    return (
        <article>
            <header className="bg-secondary">
                <div className="container mx-auto px-4 py-12 md:py-20 text-center">
                    <Badge variant="default" className="mb-4 font-headline">{post.category}</Badge>
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl max-w-4xl mx-auto">{post.title}</h1>
                    <div className="mt-6 flex justify-center items-center gap-4">
                        <Avatar>
                            <AvatarImage src={post.authorAvatar} alt={post.author} data-ai-hint="professional portrait"/>
                            <AvatarFallback>{post.author.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-sm text-muted-foreground">{post.date}</p>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container mx-auto px-4">
                <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-auto max-h-[500px] object-cover rounded-lg -mt-12 shadow-lg" data-ai-hint={post.imageHint} />
            </div>

            <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
                <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <hr className="my-12" />

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex items-center font-semibold">
                        <Share2 className="mr-3 h-5 w-5"/> Share this article
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Share on Facebook"><Facebook className="h-5 w-5" /></Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Share on Twitter"><Twitter className="h-5 w-5" /></Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Share on LinkedIn"><Linkedin className="h-5 w-5" /></Link>
                        </Button>
                         <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Share on WhatsApp"><MessageCircle className="h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}
