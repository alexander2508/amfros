import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, ShoppingCart, Star } from 'lucide-react';
import Script from 'next/script';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Manual de Ortopedia Funcional Mandibular en Clases II Esqueléticas";
  return {
    title,
    description: `Guía clínica y científica en 8 capítulos: crecimiento craneofacial, diagnóstico oportuno y protocolo con AAMF.`,
    openGraph: {
      title,
      description: `Guía clínica y científica en 8 capítulos: crecimiento craneofacial, diagnóstico oportuno y protocolo con AAMF.`,
      type: 'product',
    },
    alternates: { canonical: '/shop/book-01' },
  };
}

export default function ProductPage() {
  // Datos del LIBRO (derivados del manuscrito)
  const book = {
    id: "book-01",
    title: "Manual de Ortopedia Funcional Mandibular en Clases II Esqueléticas",
    subtitle:
      "Guía clínica en 8 capítulos: crecimiento craneofacial, diagnóstico del pico puberal y protocolo con AAMF.",
    coverImage: "https://placehold.co/800x1000.png",
    author: {
      name: "Dra. Rosmery García Ramos",
      avatar: "https://placehold.co/100x100.png",
      bio: "Autora principal. Integra bases biológicas del crecimiento craneofacial con protocolos reproducibles para Clase II esquelética.",
    },
    collaborators: [
      "Dr. Daniel Afanador",
      "Dr. Carlos Eduardo Barboza García",
      "Dr. David Alejandro Novoa García",
    ],
    price: 99.99,
    shortDescription:
      "Obra clínica y científica que explica el crecimiento cráneo-naso-maxilo-mandibular, teorías funcionales y protocolo con AAMF como alternativa fija.",
    features: [
      "Tipos de crecimiento craneofacial y relevancia clínica.",
      "Teoría de la Matriz Funcional y mecanotransducción (Moss).",
      "Teoría del Servosistema/Cibernética (Petrovick) aplicada a la clínica.",
      "Relación del plano oclusal con rotación y posición mandibular.",
      "Diagnóstico del pico puberal y momento ideal de intervención.",
      "Protocolo paso a paso con el AAMF (CPT y EN) y consideraciones de seguimiento.",
    ],
    preview:
      "Este volumen explica el crecimiento normal del complejo cráneo-naso-maxilo-mandibular y cómo intervenir exitosamente en la Clase II.",
    testimonials: [
      {
        quote:
          "Integra evidencia moderna con decisiones clínicas claras. Indispensable para el manejo temprano de Clase II.",
        author: "Dra. L. C., Ortodoncista",
      },
      {
        quote:
          "El capítulo de AAMF resume ventajas funcionales y una ruta de instalación/seguimiento precisa.",
        author: "Dr. M. R., DDS",
      },
    ],
    technicalDetails: {
      format: "Digital (PDF) / Impreso",
      chapters: 8,
      publisher: "Ediciones clínicas",
      language: "Español",
      publishDate: "2025",
      extra: "Incluye glosario y bibliografía científica",
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* SEO JSON-LD (Book) */}
      <Script id="ld-json-book" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: [{ "@type": "Person", name: book.author.name }],
            about: [
              "Crecimiento craneofacial",
              "Clase II esquelética",
              "Aparato de Adelantamiento Mandibular Fijo (AAMF)"
            ],
            bookFormat: "https://schema.org/EBook",
            inLanguage: "es",
            numberOfPages: 8,
            offers: {
              "@type": "Offer",
              price: book.price.toFixed(2),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://tudominio.com/shop/book-01"
            }
          })
        }}
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Portada */}
        <div>
          <Image
            src={book.coverImage}
            alt={`Portada de ${book.title}`}
            width={800}
            height={1000}
            className="rounded-lg shadow-xl w-full"
            data-ai-hint="portada libro ortopedia funcional"
          />
        </div>

        {/* Información */}
        <div className="space-y-6">
          <h1 className="font-headline text-3xl md:text-4xl font-bold leading-tight">
            {book.title}
          </h1>
          <p className="text-lg text-muted-foreground">{book.subtitle}</p>

          <p className="text-lg text-primary bg-primary/10 p-4 rounded-md">
            👉 {book.shortDescription}
          </p>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-3xl font-bold text-primary font-headline">
                  ${book.price.toFixed(2)}
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Formatos disponibles:</p>
                  <p className="font-semibold">
                    {book.technicalDetails.format}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button size="lg" className="font-headline w-full">
                  Comprar Ahora
                </Button>
                <Button size="lg" variant="outline" className="font-headline w-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Añadir al Carrito
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enlace al AAMF como producto relacionado */}
          <div className="text-sm">
            <span className="text-muted-foreground">¿Eres clínico? </span>
            <Link href="/shop/aamf-01" className="underline hover:text-primary">
              Consulta el AAMF descrito en el libro
            </Link>
            .
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-10">
          {/* Descripción */}
          <section>
            <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
              Descripción Detallada
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Objetivo:</strong> Unificar conocimientos sobre crecimiento y
                desarrollo craneofacial y su aplicación clínica en el manejo temprano de la
                Clase II esquelética; identificar el momento ideal de intervención y aplicar
                protocolos reproducibles.
              </p>
              <p>
                Incluye fundamentos de Matriz Funcional y mecanotransducción (Moss),
                Servosistema/Cibernética (Petrovick), relación del plano oclusal con la
                rotación y posición mandibular, y evidencia del cóndilo como centro de
                crecimiento adaptativo ante fuerzas de propulsión mandibular.
              </p>
              <p>
                Valor agregado: descripción y justificación del{" "}
                <strong>AAMF</strong> como alternativa fija con Cambio de Postura Terapéutica
                (CPT) y Excitación Neural (EN), restableciendo propiocepciones y favoreciendo
                la descompresión de la ATM.
              </p>
              <p>
                <strong>Dirigido a:</strong> Odontólogos, ortodoncistas, odontopediatras,
                especialistas en ortopedia maxilar y estudiantes avanzados.
              </p>
            </div>
          </section>

          {/* Características */}
          <section>
            <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
              Contenidos Clave
            </h2>
            <ul className="space-y-3">
              {book.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Beneficios */}
          <section>
            <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
              Beneficios para el Profesional
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Protocolos claros para decisiones clínicas consistentes.</li>
              <li>Optimización de resultados en el tiempo ideal (pico puberal).</li>
              <li>Traducción de la evidencia a pasos prácticos en consulta.</li>
              <li>Apoyo didáctico para docencia y formación avanzada.</li>
            </ul>
          </section>

          {/* Testimonios (placeholder) */}
          <section>
            <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
              Opiniones de Especialistas
            </h2>
            <div className="space-y-6">
              {book.testimonials.map((t, i) => (
                <Card key={i} className="bg-secondary">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="italic text-muted-foreground">
                      "{t.quote}"
                    </blockquote>
                    <p className="text-right font-semibold mt-2">- {t.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar: Autor + Detalles */}
        <aside className="space-y-8">
          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Vista Previa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic text-muted-foreground">
                "{book.preview}"
              </p>
            </CardContent>
          </Card>

          {/* Autor */}
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-2">
                <AvatarImage
                  src={book.author.avatar}
                  alt={book.author.name}
                  data-ai-hint="mujer profesional retrato"
                />
                <AvatarFallback>
                  {book.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="font-headline text-xl">
                {book.author.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                {book.author.bio}
              </p>
              <h4 className="font-semibold mt-4 mb-2">Colaboradores:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {book.collaborators.map(name => <li key={name}>{name}</li>)}
              </ul>
            </CardContent>
          </Card>

          {/* Detalles Técnicos */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Detalles Técnicos</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Formato:</strong> {book.technicalDetails.format}</li>
                <li><strong>Capítulos:</strong> {book.technicalDetails.chapters}</li>
                <li><strong>Editorial:</strong> {book.technicalDetails.publisher}</li>
                <li><strong>Idioma:</strong> {book.technicalDetails.language}</li>
                <li><strong>Publicación:</strong> {book.technicalDetails.publishDate}</li>
                <li>{book.technicalDetails.extra}</li>
              </ul>
            </CardContent>
          </Card>

          <div className="sticky top-24">
            <Button size="lg" className="font-headline w-full text-lg py-6">
              Comprar Ahora por ${book.price.toFixed(2)}
            </Button>
            <p className="text-xs text-center mt-2 text-muted-foreground">
              ¿Preguntas? <Link href="/contact" className="underline hover:text-primary">Contáctanos</Link>.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
