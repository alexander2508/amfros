import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Linkedin, Share2, Twitter, MessageCircle } from "lucide-react";

// Simulación de un CMS: dos posts basados en el libro y el AAMF
const POSTS = {
  "fundamentos-del-libro-clase-ii-y-crecimiento-craneofacial": {
    slug: "fundamentos-del-libro-clase-ii-y-crecimiento-craneofacial",
    title: "Fundamentos del Libro: Clase II y Crecimiento Craneofacial",
    author: "Dra. Rosmery García Ramos",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "6 de Mayo, 2025",
    category: "Libro",
    image: "https://placehold.co/1200x600.png",
    imageHint: "esquema craneofacial y libro",
    content: `
      <p class="lead text-lg text-muted-foreground mb-6">
        El manual integra bases biológicas y evidencia contemporánea para guiar decisiones clínicas en Clase II esquelética.
        Este resumen presenta los pilares: Matriz Funcional, Servosistema, mecanotransducción, plano oclusal y diagnóstico del pico puberal.
      </p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Matriz Funcional y Mecanotransducción</h3>
      <p>
        La morfogénesis del complejo cráneo–naso–maxilo–mandibular está influenciada por cargas funcionales
        que inducen respuestas celulares (mecanotransducción). Una función adecuada orienta crecimiento y remodelado.
      </p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Teoría Cibernética / Servosistema</h3>
      <p>
        El crecimiento se regula por entradas funcionales y moduladores neuro–hormonales. La propiocepción y la guía anterior
        contribuyen a la adaptación mandibular, con impacto en la posición sagital y estabilidad.
      </p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Plano Oclusal y Rotación Mandibular</h3>
      <p>
        El control del plano oclusal influye en la dirección del crecimiento y en la rotación mandibular, siendo un factor crítico
        para consolidar cambios terapéuticos estables.
      </p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Pico Puberal y Momento Ideal</h3>
      <p>
        Se detallan criterios para identificar el pico puberal (valoración cervical/carpograma) y planificar la intervención
        en el momento de mayor potencial adaptativo.
      </p>
      <blockquote class="border-l-4 border-accent pl-4 italic my-6">
        "Comprender cuándo y cómo intervenir es tan importante como qué aparato utilizar."
      </blockquote>
      <p class="mt-4">
        El manual traduce estos fundamentos en pasos clínicos claros, con énfasis en reproducibilidad y control.
      </p>
    `,
  },

  "protocolo-aamf-cpt-en-y-seguimiento-clinico": {
    slug: "protocolo-aamf-cpt-en-y-seguimiento-clinico",
    title: "Protocolo AAMF: CPT, EN y Seguimiento Clínico",
    author: "Equipo del Libro",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "6 de Mayo, 2025",
    category: "Dispositivo Clínico",
    image: "https://placehold.co/1200x600.png",
    imageHint: "dispositivo ortopédico fijo esquema",
    content: `
      <p class="lead text-lg text-muted-foreground mb-6">
        El AAMF es un aparato ortopédico funcional fijo descrito en el manual como alternativa cómoda y fisiológica.
        Este artículo resume su racional y los pasos clínicos principales.
      </p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Cambio de Postura Terapéutica (CPT)</h3>
      <p>
        El CPT busca la nueva posición mandibular dentro del límite fisiológico, contribuyendo a la descompresión de la ATM
        y a la reorganización neuromuscular. El AAMF sostiene esta posición de modo constante (24/7).
      </p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Excitación Neural (EN) y Propiocepción</h3>
      <p>
        Mediante guía anterior y contactos adecuados, se restablecen propiocepciones (incisiva, muscular, lingual y de la ATM).
        Esta excitación neural favorece la adaptación funcional y la estabilidad del cambio.
      </p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">No une Maxilar y Mandíbula</h3>
      <p>
        Una ventaja clave del AAMF es que permite lateralidades y funciones fisiológicas, evitando la fijación rígida intermaxilar
        que limita la dinámica natural.
      </p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Seguimiento y Control</h3>
      <ul class="list-disc list-inside space-y-2 my-4">
        <li>Evaluación periódica de contactos y plano oclusal.</li>
        <li>Revisión de signos de descompresión articular y comodidad.</li>
        <li>Indicadores de adaptación condilar y progreso del caso.</li>
      </ul>
      <blockquote class="border-l-4 border-accent pl-4 italic my-6">
        "La reproducibilidad del protocolo depende del cumplimiento ordenado de cada paso y del control regular."
      </blockquote>
      <p class="mt-4">
        El manual especifica criterios de selección de casos, consideraciones de instalación y resolución de problemas
        para consolidar resultados estables.
      </p>
    `,
  },
};

async function getPostData(slug: string) {
  return POSTS[slug as keyof typeof POSTS] ?? Object.values(POSTS)[0];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);
  return {
    title: post.title,
    description: `Lee "${post.title}" en el blog del manual y AAMF.`,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  return (
    <article>
      <header className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-20 text-center">
          <Badge variant="default" className="mb-4 font-headline">{post.category}</Badge>
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl max-w-4xl mx-auto">
            {post.title}
          </h1>
          <div className="mt-6 flex justify-center items-center gap-4">
            <Avatar>
              <AvatarImage src={post.authorAvatar} alt={post.author} data-ai-hint="professional portrait" />
              <AvatarFallback>{post.author.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg -mt-12 shadow-lg"
          data-ai-hint={post.imageHint}
        />
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="my-12" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center font-semibold">
            <Share2 className="mr-3 h-5 w-5" /> Compartir este artículo
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="#" aria-label="Compartir en Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="#" aria-label="Compartir en Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="#" aria-label="Compartir en LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="#" aria-label="Compartir en WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
