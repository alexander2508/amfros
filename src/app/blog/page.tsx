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
  description:
    "Artículos basados en el Manual de Ortopedia Funcional Mandibular (Clase II) y el AAMF: fundamentos científicos y aplicación clínica.",
};

const blogPosts: BlogPost[] = [
  {
    slug: "fundamentos-del-libro-clase-ii-y-crecimiento-craneofacial",
    title: "Fundamentos del Libro: Clase II y Crecimiento Craneofacial",
    author: "Dra. Rosmery García Ramos",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "6 de Mayo, 2025",
    excerpt:
      "Resumen didáctico del manual: Matriz Funcional, Servosistema, mecanotransducción, plano oclusal, diagnóstico del pico puberal y momento ideal de intervención.",
    category: "Libro",
    content: "",
    image: "https://placehold.co/1200x600.png",
    imageHint: "esquema craneofacial y libro",
  },
  {
    slug: "protocolo-aamf-cpt-en-y-seguimiento-clinico",
    title: "Protocolo AAMF: CPT, EN y Seguimiento Clínico",
    author: "Equipo del Libro",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "6 de Mayo, 2025",
    excerpt:
      "Cómo implementar el AAMF: Cambio de Postura Terapéutica (CPT), Excitación Neural (EN), descompresión articular, propiocepciones y control del plano oclusal.",
    category: "Dispositivo Clínico",
    content: "",
    image: "https://placehold.co/1200x600.png",
    imageHint: "dispositivo ortopédico fijo esquema",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Blog del Manual y AAMF
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Fundamentos científicos y guías clínicas extraídos del libro y su dispositivo AAMF.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden group">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={post.imageHint}
              />
            </Link>
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">
                {post.category}
              </Badge>
              <CardTitle className="font-headline text-xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={post.authorAvatar} alt={post.author} data-ai-hint="professional portrait" />
                  <AvatarFallback>{post.author.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary hover:text-primary/80 flex items-center text-sm font-semibold"
              >
                Leer Más <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
