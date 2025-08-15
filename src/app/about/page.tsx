import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, values, and team behind RespireVital's innovative health solutions.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center sm:py-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Our Mission: A Healthier World, One Breath at a Time</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            We are a team of health professionals, scientists, and innovators passionate about unlocking human potential through the fundamental pillars of health: breathing and oral wellness.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">The RespireVital Story</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                RespireVital was born from a simple, yet profound realization: millions of people suffer from chronic issues that can be traced back to dysfunctional breathing patterns and poor oral posture. From sleep disturbances to low energy and dental problems, the consequences are far-reaching.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Frustrated by the lack of accessible, non-invasive solutions, our founders brought together leading experts in dentistry, myofunctional therapy, and respiratory science. Our goal was to create effective, evidence-based tools that empower individuals to reclaim their health naturally. Today, RespireVital stands at the forefront of this wellness revolution.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/800x600.png"
                alt="The RespireVital team collaborating"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    These principles guide everything we do, from product development to customer support.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Scientific Rigor</h3>
                        <p className="mt-2 text-muted-foreground">Every product is backed by scientific research and developed in collaboration with medical professionals.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Empowerment Through Education</h3>
                        <p className="mt-2 text-muted-foreground">We believe in providing knowledge and tools that give you control over your health journey.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Uncompromising Quality</h3>
                        <p className="mt-2 text-muted-foreground">We use only the highest quality, biocompatible materials to ensure safety and effectiveness.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
