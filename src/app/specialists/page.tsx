import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Specialist } from "@/types";

export const metadata: Metadata = {
  title: "Nuestros Especialistas",
  description: "Conoce al equipo de dedicados profesionales médicos e investigadores detrás de AMFROS.",
};

const specialists: Specialist[] = [
  {
    id: "1",
    name: "Dra. Eleanor Vance",
    title: "Directora Médica, DDS",
    avatar: "https://placehold.co/200x200.png",
    avatarHint: "retrato mujer profesional",
    bio: "La Dra. Vance es una experta líder en terapia miofuncional y su conexión con la salud ortodóntica. Con más de 20 años de experiencia clínica, guía nuestro desarrollo de productos e iniciativas de investigación, asegurando que cumplan con los más altos estándares médicos."
  },
  {
    id: "2",
    name: "Dr. Kenji Tanaka",
    title: "Jefe de Ciencia Respiratoria, PhD",
    avatar: "https://placehold.co/200x200.png",
    avatarHint: "retrato hombre profesional",
    bio: "La investigación del Dr. Tanaka se centra en la biomecánica de la respiración y los trastornos respiratorios del sueño. Su trabajo ha sido publicado en numerosas revistas revisadas por pares y le apasiona traducir la ciencia compleja en soluciones prácticas para la salud cotidiana."
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    title: "Diseñadora Principal de Productos, RDH",
    avatar: "https://placehold.co/200x200.png",
    avatarHint: "retrato mujer profesional",
    bio: "Como higienista dental registrada con experiencia en diseño industrial, María cierra la brecha entre las necesidades clínicas y la experiencia del usuario. Se dedica a crear productos que no solo son efectivos sino también cómodos y fáciles de usar."
  },
];

export default function SpecialistsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Conoce a Nuestros Expertos</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            La experiencia colectiva de nuestro equipo es la fuerza impulsora detrás de nuestra innovación.
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
