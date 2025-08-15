import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Specialist } from "@/types";

export const metadata: Metadata = {
  title: "Our Specialists",
  description: "Meet the team of dedicated medical professionals and researchers behind RespireVital.",
};

const specialists: Specialist[] = [
  {
    id: "1",
    name: "Dr. Eleanor Vance",
    title: "Chief Medical Officer, DDS",
    avatar: "https://placehold.co/200x200.png",
    avatarHint: "professional woman portrait",
    bio: "Dr. Vance is a leading expert in myofunctional therapy and its connection to orthodontic health. With over 20 years of clinical experience, she guides our product development and research initiatives, ensuring they meet the highest medical standards."
  },
  {
    id: "2",
    name: "Dr. Kenji Tanaka",
    title: "Head of Respiratory Science, PhD",
    avatar: "https://placehold.co/200x200.png",
    avatarHint: "professional man portrait",
    bio: "Dr. Tanaka's research focuses on the biomechanics of breathing and sleep-disordered breathing. His work has been published in numerous peer-reviewed journals, and he is passionate about translating complex science into practical solutions for everyday health."
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    title: "Lead Product Designer, RDH",
    avatar: "https://placehold.co/200x200.png",
    avatarHint: "professional woman portrait",
    bio: "As a registered dental hygienist with a background in industrial design, Maria bridges the gap between clinical needs and user experience. She is dedicated to creating products that are not only effective but also comfortable and easy to use."
  },
];

export default function SpecialistsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Meet Our Experts</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our team's collective expertise is the driving force behind our innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist) => (
            <Card key={specialist.id} className="text-center transition-all duration-300 hover:shadow-xl">
              <CardHeader className="items-center">
                <Avatar className="h-32 w-32 mb-4 border-4 border-primary/10">
                  <AvatarImage src={specialist.avatar} alt={specialist.name} data-ai-hint={specialist.avatarHint} />
                  <AvatarFallback>{specialist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-2xl">{specialist.name}</CardTitle>
                <p className="text-sm font-semibold text-accent">{specialist.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{specialist.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
