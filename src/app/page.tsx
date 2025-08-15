import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProductCard } from "@/components/product-card";
import type { Product, Testimonial } from "@/types";
import { Award, Heart, Leaf, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Oral Posture Trainer",
    price: 79.99,
    image: "https://placehold.co/600x600.png",
    imageHint: "medical device",
    description: "Train your tongue and jaw for optimal oral posture and better breathing."
  },
  {
    id: "2",
    name: "Myo-Functional Sleep Aid",
    price: 129.99,
    image: "https://placehold.co/600x600.png",
    imageHint: "sleep aid",
    description: "A unique device to promote nasal breathing and reduce snoring."
  },
  {
    id: "3",
    name: "Breathing Exercise Kit",
    price: 49.99,
    image: "https://placehold.co/600x600.png",
    imageHint: "exercise kit",
    description: "Guided exercises and tools to strengthen your respiratory system."
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Sarah J.",
    title: "Game Changer for My Sleep",
    quote: "I've struggled with snoring for years. The Myo-Functional Sleep Aid has been a complete game changer. My partner and I are both sleeping better. Highly recommend!",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Dr. Mark R., DDS",
    title: "Excellent for Patients",
    quote: "As a dentist, I recommend the Oral Posture Trainer to my patients working on myofunctional therapy. It's a well-designed, effective tool for reinforcing good habits.",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Elena P.",
    title: "Noticeable Difference",
    quote: "After just a few weeks with the Breathing Exercise Kit, I've noticed a significant improvement in my stamina during workouts. It's easy to use and very effective.",
    avatar: "https://placehold.co/100x100.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0">
            <Image 
                src="https://placehold.co/1920x1080.png" 
                alt="A person breathing fresh air in a natural setting" 
                fill
                className="object-cover opacity-20"
                data-ai-hint="person breathing nature"
            />
        </div>
        <div className="container relative mx-auto px-4 py-20 text-center md:py-32">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Breathe Better. Live Fuller.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
            Discover scientifically-backed solutions to improve your breathing, enhance your oral health, and unlock your vital potential.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-headline bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/shop">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-headline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-background sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">The Foundation of Your Wellbeing</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Proper breathing and oral health are pillars of a vibrant life. Our solutions are designed to help you:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-headline text-lg font-semibold">Enhance Vitality</h3>
              <p className="mt-2 text-muted-foreground">Improve energy levels and cognitive function with better oxygenation.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-headline text-lg font-semibold">Support Sleep</h3>
              <p className="mt-2 text-muted-foreground">Promote restful sleep by encouraging nasal breathing and reducing snoring.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-headline text-lg font-semibold">Natural Health</h3>
              <p className="mt-2 text-muted-foreground">Align your body's natural functions for long-term oral and respiratory health.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-headline text-lg font-semibold">Professional Grade</h3>
              <p className="mt-2 text-muted-foreground">Developed with and trusted by dentists, orthodontists, and sleep specialists.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-secondary sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Featured Products</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Start your journey to better health with our most popular solutions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
             <Button asChild size="lg" className="font-headline">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">What Our Community Says</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Real stories from people who have transformed their lives with RespireVital.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-headline">{testimonial.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center sm:py-20">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Health?</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Join thousands of others who are breathing easier and living more fully.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="font-headline bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
