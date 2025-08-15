
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProductCard } from "@/components/product-card";
import type { Product, Testimonial } from "@/types";
import { Award, BookOpen, CheckCircle2, Lightbulb, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

/** --- PRODUCTS: only items discussed in the book --- */
const featuredProducts: Product[] = [
  {
    id: "book-01",
    name: "Manual de Ortopedia Funcional en Clase II (Libro)",
    price: 49.00,
    image: "https://placehold.co/800x1000.png",
    imageHint: "portada del libro de ortopedia funcional",
    description:
      "Guía práctica en 8 capítulos sobre crecimiento craneofacial, diagnóstico y manejo temprano de la Clase II. Incluye el AAMF como alternativa fija."
  },
  {
    id: "aamf-01",
    name: "AAMF – Arco de Adelantamiento Mandibular Fijo",
    price: 320.00,
    image: "https://placehold.co/800x800.png",
    imageHint: "dispositivo ortopédico funcional fijo",
    description:
      "Aparato ortopédico funcional fijo descrito en el libro. Favorece la descompresión articular y el crecimiento condilar secundario."
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Dra. Laura C., Ortodoncista",
    title: "Aplicable desde el día 1",
    quote:
      "El libro resume teoría moderna y protocolos claros. El AAMF me ha permitido mejorar tiempos de tratamiento en Clase II con excelente tolerancia del paciente.",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Dr. Marcos R., DDS",
    title: "Base científica sólida",
    quote:
      "Integra genética, epigenética y mecanotransducción con una ruta clínica muy práctica. Ideal para residentes y clínicos.",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    name: "Ana P.",
    title: "Lectura clara y útil",
    quote:
      "Aunque no soy odontóloga, la parte de beneficios clínicos y preguntas frecuentes me ayudó a entender el proceso de manera sencilla.",
    avatar: "https://placehold.co/100x100.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* --- SEO: JSON-LD for Book & Product --- */}
      <Script id="ld-json-book" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Manual de Ortopedia Funcional en Clase II",
            author: [{ "@type": "Person", name: "Dra. Rosmery García Ramos" }],
            about: [
              "Crecimiento craneofacial",
              "Clase II esquelética",
              "Aparato ortopédico funcional fijo (AAMF)"
            ],
            bookFormat: "EBook",
            inLanguage: "es",
            numberOfPages: 8,
            offers: {
              "@type": "Offer",
              price: "49.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://tudominio.com/shop/book-01"
            }
          })
        }}
      />
      <Script id="ld-json-aamf" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "AAMF – Arco de Adelantamiento Mandibular Fijo",
            description:
              "Aparato ortopédico funcional fijo descrito en el libro Manual de Ortopedia Funcional en Clase II.",
            brand: { "@type": "Brand", name: "AMFROS" },
            offers: {
              "@type": "Offer",
              price: "320.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://tudominio.com/shop/aamf-01"
            }
          })
        }}
      />

      {/* --- HERO: focus on the book --- */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Portada del libro y esquema craneofacial"
            fill
            className="object-cover opacity-15"
            data-ai-hint="libro y anatomía craneofacial"
          />
        </div>
        <div className="container relative mx-auto px-4 py-16 text-center md:py-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Manual de Ortopedia Funcional en Clase II
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/85 md:text-xl">
            Guía clínica en 8 capítulos: crecimiento craneofacial, diagnóstico oportuno y protocolo con AAMF para
            restablecer el equilibrio sagital y vertical. Escrito en un lenguaje claro y aplicable.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4 px-8">
            <Button asChild size="lg" className="font-headline bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/shop/book-01">Comprar el Libro</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-headline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/about">Sobre la Autora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- WHY THIS BOOK: beneficios concretos --- */}
      <section className="py-16 bg-background sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">¿Por qué este libro?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Conecta fundamentos científicos (genética, epigenética, mecanotransducción) con decisiones clínicas
              simples y efectivas para Clase II esquelética.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-headline text-lg font-semibold">Guía en 8 capítulos</h3>
              <p className="mt-2 text-muted-foreground">Del crecimiento normal a la intervención clínica y glosario útil.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-headline text-lg font-semibold">Diagnóstico temprano</h3>
              <p className="mt-2 text-muted-foreground">Identifica el momento ideal y selecciona la terapia más indicada.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-headline text-lg font-semibold">Protocolo con AAMF</h3>
              <p className="mt-2 text-muted-foreground">Aparato fijo cómodo, 24/7, que favorece la descompresión articular y el crecimiento condilar.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-headline text-lg font-semibold">Resultados consistentes</h3>
              <p className="mt-2 text-muted-foreground">Protocolos reproducibles y explicaciones paso a paso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUÉ INCLUYE EL LIBRO --- */}
      <section className="py-16 bg-secondary sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Qué encontrarás en el libro</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Un recorrido claro desde la biología del crecimiento hasta la aplicación clínica con AAMF.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {[
              "Crecimiento craneofacial: endocondral, intramembranoso y remodelado.",
              "Teorías clave: control genético, sutural, matriz funcional y servosistema.",
              "Importancia del plano oclusal posterior y rotación mandibular.",
              "Diagnóstico del pico puberal (cervical y carpograma).",
              "Mecanotransducción y bases epigenéticas del cambio.",
              "Diseño y ventajas clínicas del AAMF vs aparatos removibles/fijos clásicos.",
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-base font-headline">
                    <Zap className="h-5 w-5 mt-0.5 flex-shrink-0" /> <span>{item}</span>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="font-headline">
              <Link href="/shop/book-01">Comprar el Libro</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- PRODUCTOS DEL LIBRO (solo los tratados) --- */}
      <section className="py-16 bg-background sm:py-20" id="productos">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Productos del Manual</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Compra el libro y el dispositivo AAMF descritos y justificados en el contenido.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="font-headline">
              <Link href="/shop">Ver tienda</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIOS --- */}
      <section className="py-16 bg-secondary sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Lo que dice la comunidad</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Opiniones de profesionales y lectores del manual.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-headline">{t.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">"{t.quote}"</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={t.avatar} alt={t.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- MINI FAQ DEL LIBRO --- */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {[
              {
                q: "¿A quién va dirigido?",
                a: "Odontólogos, ortodoncistas, odontopediatras y residentes que tratan Clase II esquelética."
              },
              {
                q: "¿Formato disponible?",
                a: "Edición digital (PDF). Próximamente impreso. Incluye actualizaciones menores sin costo."
              },
              {
                q: "¿Qué diferencia al AAMF?",
                a: "Es fijo, cómodo, no une maxilar y mandíbula (permite lateralidades) y favorece la descompresión de la ATM."
              },
              {
                q: "¿Incluye protocolos?",
                a: "Sí. Criterios de diagnóstico, momento ideal, pasos de instalación, seguimiento y resolución de problemas."
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg font-headline">{item.q}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{item.a}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center sm:py-20">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Listo para empezar</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Adquiere el manual y, si eres clínico, añade el AAMF para llevar el protocolo a tu consulta.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4 px-8">
            <Button asChild size="lg" className="font-headline bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/shop/book-01">Comprar el Libro</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-headline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/shop/aamf-01">Ver AAMF</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
