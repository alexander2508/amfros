import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, ShoppingCart, Star } from 'lucide-react';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    // En una aplicación real, obtendrías los datos del producto
    const title = "Manual de Ortopedia Funcional Mandibular";
    return {
        title,
        description: `Detalles del producto: ${title}`,
    };
}

export default function ProductPage() {
    // Datos del libro (en una app real vendrían de una API)
    const book = {
        title: "Manual de Ortopedia Funcional Mandibular en Clases II Esqueléticas",
        subtitle: "Una guía práctica y completa para el diagnóstico y manejo temprano de la Clase II Esquelética en Odontopediatría y Ortodoncia.",
        coverImage: "https://placehold.co/800x1000.png",
        author: {
            name: "Dra. Rosmery García Ramos",
            avatar: "https://placehold.co/100x100.png",
            bio: "La Dra. García es una reconocida especialista en ortopedia maxilar con amplia experiencia en el tratamiento de maloclusiones esqueléticas."
        },
        collaborators: ["Dr. Daniel Afanador", "Dr. Carlos Eduardo Barboza García", "Dr. David Alejandro Novoa García"],
        price: 99.99,
        shortDescription: "Este libro ofrece un enfoque práctico y científico para el manejo ortopédico de pacientes con retrognatismo mandibular, introduciendo un innovador Aparato Ortopédico Funcional fijo (AAMF) que supera las limitaciones de tratamientos tradicionales.",
        features: [
            "Explica el crecimiento y desarrollo cráneo-naso-maxilo-mandibular.",
            "Incluye fundamentos genéticos, epigenéticos y biomecánicos.",
            "Presenta un nuevo aparato fijo (AAMF) más cómodo y eficaz que los removibles.",
            "Guía paso a paso para el diagnóstico y tratamiento de Clase II Esquelética división I.",
            "Glosario con definiciones clave para el uso clínico diario.",
            "Referencias científicas actualizadas."
        ],
        preview: "Hasta ahora no ha sido publicado nada satisfactorio. Este volumen explica cómo se produce el crecimiento normal del complejo cráneo-naso-maxilo-mandibular y cómo intervenir exitosamente en las Clases II Esqueléticas.",
        testimonials: [
            {
                quote: "Una obra indispensable para quienes buscamos soluciones prácticas en ortopedia maxilar.",
                author: "Dr. Juan Pérez, Ortodoncista"
            },
            {
                quote: "La claridad y el enfoque clínico hacen de este manual una herramienta invaluable.",
                author: "Dra. Ana González, Odontopediatra"
            }
        ],
        technicalDetails: {
            format: "Impreso / Digital (PDF)",
            chapters: 8,
            publisher: "Ediciones AMFROS",
            language: "Español",
            publishDate: "2025",
            extra: "Incluye glosario y bibliografía científica"
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Columna de la Imagen */}
                <div>
                    <Image
                        src={book.coverImage}
                        alt={`Portada de ${book.title}`}
                        width={800}
                        height={1000}
                        className="rounded-lg shadow-xl w-full"
                        data-ai-hint="portada libro medico"
                    />
                </div>

                {/* Columna de Información */}
                <div className="space-y-6">
                    <h1 className="font-headline text-3xl md:text-4xl font-bold leading-tight">{book.title}</h1>
                    <p className="text-lg text-muted-foreground">{book.subtitle}</p>

                    <p className="text-lg text-primary bg-primary/10 p-4 rounded-md">
                        👉 {book.shortDescription}
                    </p>

                    <Card>
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <p className="text-3xl font-bold text-primary font-headline">${book.price.toFixed(2)}</p>
                                <div className="text-sm text-muted-foreground">
                                    <p>Formatos disponibles:</p>
                                    <p className="font-semibold">{book.technicalDetails.format}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Button size="lg" className="font-headline w-full">Comprar Ahora</Button>
                                <Button size="lg" variant="outline" className="font-headline w-full">
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Añadir al Carrito
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-10">
                    {/* Descripción Larga */}
                    <section>
                        <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">Descripción Detallada</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p><strong>Objetivo del libro:</strong> Ser una guía práctica para diagnósticos y planificación temprana en ortopedia maxilar.</p>
                            <p>Este manual es una herramienta esencial que combina evidencia científica con aplicaciones clínicas prácticas. A lo largo de sus 8 capítulos, desglosa el crecimiento craneofacial, las teorías modernas del desarrollo y los fundamentos genéticos y biomecánicos.</p>
                            <p>El principal valor agregado es la presentación del innovador <strong>Aparato Ortopédico Funcional fijo (AAMF)</strong>, una solución diseñada para ser más cómoda y eficaz que los aparatos removibles tradicionales. El libro guía al profesional en el diagnóstico y tratamiento paso a paso de la Clase II Esquelética, respaldado por casos clínicos y una amplia bibliografía.</p>
                            <p><strong>Dirigido a:</strong> Odontólogos, ortodoncistas, odontopediatras, especialistas en ortopedia maxilar y estudiantes avanzados.</p>
                        </div>
                    </section>

                    {/* Características Clave */}
                    <section>
                        <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">Características Clave</h2>
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
                        <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">Beneficios para el Profesional</h2>
                        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                           <li>Mejora la práctica clínica con protocolos claros.</li>
                           <li>Optimiza los resultados en tratamientos tempranos.</li>
                           <li>Integra ciencia actual con aplicaciones prácticas.</li>
                           <li>Facilita la enseñanza para estudiantes avanzados.</li>
                        </ul>
                    </section>

                    {/* Testimonios */}
                    <section>
                        <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">Opiniones de Especialistas</h2>
                        <div className="space-y-6">
                            {book.testimonials.map((testimonial, i) => (
                                <Card key={i} className="bg-secondary">
                                    <CardContent className="pt-6">
                                        <div className="flex items-center mb-2">
                                            {[...Array(5)].map((_, s) => <Star key={s} className="h-5 w-5 text-yellow-400 fill-current" />)}
                                        </div>
                                        <blockquote className="italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                                        <p className="text-right font-semibold mt-2">- {testimonial.author}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                     {/* Preview */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">Vista Previa</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="italic text-muted-foreground">"{book.preview}"</p>
                        </CardContent>
                    </Card>
                
                    {/* Autor */}
                    <Card>
                        <CardHeader className="text-center">
                             <Avatar className="h-24 w-24 mx-auto mb-2">
                                <AvatarImage src={book.author.avatar} alt={book.author.name} data-ai-hint="mujer profesional retrato"/>
                                <AvatarFallback>{book.author.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <CardTitle className="font-headline text-xl">{book.author.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground text-center">{book.author.bio}</p>
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
                             ¿Tienes preguntas? <Link href="/contact" className="underline hover:text-primary">Contáctanos aquí</Link>.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
