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
    description: "Explora artículos sobre salud oral, respiración, investigación científica y estilo de vida de los expertos de RespireVital.",
};

const blogPosts: BlogPost[] = [
    {
        slug: "la-sorprendente-conexion-entre-la-postura-oral-y-la-calidad-del-sueno",
        title: "La Sorprendente Conexión Entre la Postura Oral y la Calidad del Sueño",
        author: "Dra. Eleanor Vance",
        authorAvatar: "https://placehold.co/100x100.png",
        date: "26 de Octubre, 2023",
        excerpt: "Descubre cómo la forma en que sostienes la mandíbula y la lengua durante el día puede afectar drásticamente tu sueño por la noche. Profundizamos en la ciencia de la terapia miofuncional.",
        category: "Investigación Científica",
        content: "",
        image: "https://placehold.co/1200x600.png",
        imageHint: "persona durmiendo pacificamente",
    },
    {
        slug: "5-ejercicios-de-respiracion-para-aumentar-tu-energia",
        title: "5 Ejercicios de Respiración para Aumentar tu Energía",
        author: "Dr. Kenji Tanaka",
        authorAvatar: "https://placehold.co/100x100.png",
        date: "15 de Octubre, 2023",
        excerpt: "¿Te sientes perezoso? Estas cinco sencillas técnicas de respiración pueden aumentar la oxigenación y darte un impulso de energía natural, en cualquier momento y lugar.",
        category: "Estilo de Vida",
        content: "",
        image: "https://placehold.co/1200x600.png",
        imageHint: "persona meditando al aire libre",
    },
    {
        slug: "por-que-la-respiracion-nasal-es-un-superpoder",
        title: "Por Qué la Respiración Nasal es un Superpoder que No Sabías que Tenías",
        author: "Dra. Eleanor Vance",
        authorAvatar: "https://placehold.co/100x100.png",
        date: "28 de Septiembre, 2023",
        excerpt: "Respirar por la nariz hace más que solo transportar aire. Lo filtra, calienta y humidifica, a la vez que aumenta el óxido nítrico. Descubre por qué es crucial para tu salud.",
        category: "Salud Oral",
        content: "",
        image: "https://placehold.co/1200x600.png",
        imageHint: "primer plano perfil nariz",
    },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-16">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Blog de RespireVital</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Conocimientos e ideas desde la vanguardia del bienestar respiratorio y oral.
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
                                Leer Más <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
