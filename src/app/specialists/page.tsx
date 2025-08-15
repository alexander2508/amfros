import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Specialist } from "@/types";

export const metadata: Metadata = {
  title: "Autores y Colaboradores",
  description:
    "Conoce al equipo académico y clínico detrás del libro: crecimiento craneofacial, Clase II esquelética y el AAMF.",
};

const specialists: Specialist[] = [
  {
    id: "rosmery-garcia-ramos",
    name: "Dra. Rosmery García Ramos",
    title: "Autora principal",
    avatar: "https://placehold.co/240x240.png",
    avatarHint: "retrato mujer profesional",
    bio: "Autora principal del libro. Su trabajo integra bases biológicas del crecimiento y desarrollo craneofacial con una ruta clínica clara para el manejo de la Clase II esquelética. Presenta y sistematiza el AAMF (Aparato de Adelantamiento Mandibular Fijo) como alternativa fija que favorece la descompresión de la ATM, la propiocepción y el crecimiento condilar secundario.",
  },
  {
    id: "daniel-afanador",
    name: "Dr. Daniel Afanador",
    title: "Colaborador",
    avatar: "https://placehold.co/240x240.png",
    avatarHint: "retrato hombre profesional",
    bio: "Colaborador del libro. Aporta a la explicación del diagnóstico oportuno, pico puberal y relación del plano oclusal con la rotación y posición mandibular, conectando la evidencia reciente con decisiones terapéuticas reproducibles.",
  },
  {
    id: "carlos-eduardo-barboza-garcia",
    name: "Dr. Carlos Eduardo Barboza García",
    title: "Colaborador",
    avatar: "https://placehold.co/240x240.png",
    avatarHint: "retrato hombre profesional",
    bio: "Colaborador del libro. Contribuye al marco teórico-práctico de la Matriz Funcional (Moss), la Teoría Cibernética/Servosistema (Petrovick) y la mecanotransducción, facilitando la traducción de fundamentos biológicos a la práctica clínica.",
  },
  {
    id: "david-alejandro-novoa-garcia",
    name: "Dr. David Alejandro Novoa García",
    title: "Colaborador",
    avatar: "https://placehold.co/240x240.png",
    avatarHint: "retrato hombre profesional",
    bio: "Colaborador del libro. Apoya la sistematización de protocolos del AAMF y la comprensión del cóndilo como centro de crecimiento adaptativo frente a fuerzas de propulsión mandibular, articulando evidencia experimental con aplicaciones clínicas.",
  },
];

export default function SpecialistsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Autores y Colaboradores del Libro
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Equipo académico y clínico que integra evidencia científica y protocolos prácticos
            para el diagnóstico e intervención en Clase II esquelética, incluyendo el AAMF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist) => (
            <Card
              key={specialist.id}
              className="text-center transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader className="items-center">
                <Avatar className="h-32 w-32 mb-4 border-4 border-primary/10">
                  <AvatarImage
                    src={specialist.avatar}
                    alt={specialist.name}
                    data-ai-hint={specialist.avatarHint}
                  />
                  <AvatarFallback>
                    {specialist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-2xl">
                  {specialist.name}
                </CardTitle>
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
