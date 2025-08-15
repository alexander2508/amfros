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
    name: "Entrenador de Postura Oral",
    price: 79.99,
    image: "https://placehold.co/600x600.png",
    imageHint: "dispositivo medico",
    description: "Entrena tu lengua y mandíbula para una postura oral óptima y una mejor respiración."
  },
  {
    id: "2",
    name: "Ayuda Miofuncional para el Sueño",
    price: 129.99,
    image: "https://placehold.co/600x600.png",
    imageHint: "ayuda para dormir",
    description: "Un dispositivo único para promover la respiración nasal y reducir los ronquidos."
  },
  {
    id: "3",
    name: "Kit de Ejercicios de Respiración",
    price: 49.99,
    image: "https://placehold.co/600x600.png",
    imageHint: "kit de ejercicio",
    description: "Ejercicios guiados y herramientas para fortalecer tu sistema respiratorio."
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Sara J.",
    title: "Cambió mi forma de dormir",
    quote: "He luchado contra los ronquidos durante años. La Ayuda Miofuncional para el Sueño ha cambiado las reglas del juego por completo. Mi pareja y yo dormimos mejor. ¡Lo recomiendo mucho!",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Dr. Marcos R., DDS",
    title: "Excelente para pacientes",
    quote: "Como dentista, recomiendo el Entrenador de Postura Oral a mis pacientes que trabajan en terapia miofuncional. Es una herramienta bien diseñada y eficaz para reforzar buenos hábitos.",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Elena P.",
    title: "Diferencia notable",
    quote: "Después de solo unas semanas con el Kit de Ejercicios de Respiración, he notado una mejora significativa en mi resistencia durante los entrenamientos. Es fácil de usar y muy efectivo.",
    avatar: "https://placehold.co/100x100.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Sección Héroe */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0">
            <Image 
                src="https://placehold.co/1920x1080.png" 
                alt="Una persona respirando aire fresco en un entorno natural" 
                fill
                className="object-cover opacity-20"
                data-ai-hint="persona respirando naturaleza"
            />
        </div>
        <div className="container relative mx-auto px-4 py-20 text-center md:py-32">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Respira Mejor. Vive Plenamente.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
            Descubre soluciones con respaldo científico para mejorar tu respiración, potenciar tu salud oral y liberar tu potencial vital.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-headline bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/shop">Explorar Productos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-headline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/about">Saber Más</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios Clave */}
      <section className="py-16 bg-background sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">La Base de Tu Bienestar</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Una respiración y salud oral adecuadas son los pilares de una vida vibrante. Nuestras soluciones están diseñadas para ayudarte a:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-headline text-lg font-semibold">Aumentar la Vitalidad</h3>
              <p className="mt-2 text-muted-foreground">Mejora los niveles de energía y la función cognitiva con una mejor oxigenación.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-headline text-lg font-semibold">Mejorar el Sueño</h3>
              <p className="mt-2 text-muted-foreground">Promueve un sueño reparador fomentando la respiración nasal y reduciendo los ronquidos.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-headline text-lg font-semibold">Salud Natural</h3>
              <p className="mt-2 text-muted-foreground">Alinea las funciones naturales de tu cuerpo para una salud oral y respiratoria a largo plazo.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-headline text-lg font-semibold">Calidad Profesional</h3>
              <p className="mt-2 text-muted-foreground">Desarrollado con y en la confianza de dentistas, ortodoncistas y especialistas del sueño.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de Productos Destacados */}
      <section className="py-16 bg-secondary sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Productos Destacados</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Comienza tu viaje hacia una mejor salud con nuestras soluciones más populares.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
             <Button asChild size="lg" className="font-headline">
              <Link href="/shop">Ver Todos los Productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-16 bg-background sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Lo que Dice Nuestra Comunidad</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Historias reales de personas que han transformado sus vidas con RespireVital.
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

      {/* Sección CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center sm:py-20">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">¿Listo para Transformar Tu Salud?</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Únete a miles de personas que respiran más fácilmente y viven más plenamente.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="font-headline bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/shop">Comprar Ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
