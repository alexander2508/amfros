import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Linkedin, Share2, Twitter, MessageCircle } from "lucide-react";

// Esta es una función de prueba. En una aplicación real, obtendrías datos de un CMS.
async function getPostData(slug: string) {
    return {
        slug: "la-sorprendente-conexion-entre-la-postura-oral-y-la-calidad-del-sueno",
        title: "La Sorprendente Conexión Entre la Postura Oral y la Calidad del Sueño",
        author: "Dra. Eleanor Vance",
        authorAvatar: "https://placehold.co/100x100.png",
        date: "26 de Octubre, 2023",
        category: "Investigación Científica",
        image: "https://placehold.co/1200x600.png",
        imageHint: "persona durmiendo pacificamente",
        content: `
            <p class="lead text-lg text-muted-foreground mb-6">Es un escenario con el que muchos están familiarizados: duermes ocho horas completas pero te despiertas sintiéndote aturdido y sin descanso. Si bien muchos factores pueden contribuir a una mala calidad del sueño, uno de los más ignorados es tu postura oral: la forma en que tu lengua, mandíbula y labios se posicionan cuando no estás comiendo o hablando.</p>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">La Postura de Reposo Ideal</h3>
            <p>La postura oral de reposo óptima implica tener los labios sellados sin esfuerzo, los dientes ligeramente separados y la lengua descansando suavemente contra el paladar, justo detrás de los dientes frontales. Esta simple alineación fomenta la respiración nasal, que es fundamental para una buena salud.</p>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Cómo una Mala Postura Altera el Sueño</h3>
            <p>Cuando la lengua no descansa en el paladar, tiende a caer hacia atrás en la vía aérea, especialmente durante el sueño. Esto puede llevar a una cascada de problemas:</p>
            <ul class="list-disc list-inside space-y-2 my-4">
                <li><strong>Respiración Bucal:</strong> Es menos eficiente que la respiración nasal y evita el sistema natural de filtrado y humidificación de la nariz.</li>
                <li><strong>Obstrucción de las Vías Respiratorias:</strong> Una postura baja de la lengua puede estrechar las vías respiratorias, lo que lleva a vibraciones (ronquidos) e incluso a bloqueos parciales o completos (hipopneas y apneas).</li>
                <li><strong>Reducción de la Calidad del Sueño:</strong> Estas interrupciones en la respiración pueden sacarte repetidamente de las etapas de sueño profundo y reparador, incluso si no te despiertas por completo.</li>
            </ul>
            <blockquote class="border-l-4 border-accent pl-4 italic my-6">"Corregir la postura oral es una de las formas más poderosas y no invasivas de mejorar la arquitectura del sueño y la salud en general."</blockquote>
            <h3 class="font-headline text-2xl font-bold mt-8 mb-4">El Papel de la Terapia Miofuncional</h3>
            <p>Aquí es donde entra en juego la terapia miofuncional. A través de una serie de ejercicios específicos, reentrena los músculos orofaciales para alcanzar y mantener la postura correcta. Herramientas como nuestro Entrenador de Postura Oral pueden ayudar a reforzar estos nuevos hábitos, haciendo el proceso más eficaz y eficiente. Al fortalecer la lengua y promover una alineación adecuada, puedes ayudar a mantener tus vías respiratorias abiertas durante toda la noche, lo que conduce a un sueño más profundo y reparador.</p>
            <p class="mt-4">El viaje hacia un mejor sueño puede no comenzar en el dormitorio, sino con la práctica consciente de una postura oral adecuada durante tus horas de vigilia. Es una pieza fundamental del rompecabezas del bienestar que rinde frutos cada noche.</p>
        `,
    };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPostData(params.slug);
    return {
        title: post.title,
        description: `Lee el artículo "${post.title}" en el blog de AMFROS.`,
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostData(params.slug);

    return (
        <article>
            <header className="bg-secondary">
                <div className="container mx-auto px-4 py-12 md:py-20 text-center">
                    <Badge variant="default" className="mb-4 font-headline">{post.category}</Badge>
                    <h1 className="font-headline text-3xl font-bold tracking-tight md:text-5xl max-w-4xl mx-auto">{post.title}</h1>
                    <div className="mt-6 flex justify-center items-center gap-4">
                        <Avatar>
                            <AvatarImage src={post.authorAvatar} alt={post.author} data-ai-hint="professional portrait"/>
                            <AvatarFallback>{post.author.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-sm text-muted-foreground">{post.date}</p>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container mx-auto px-4">
                <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-auto max-h-[500px] object-cover rounded-lg -mt-12 shadow-lg" data-ai-hint={post.imageHint} />
            </div>

            <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
                <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <hr className="my-12" />

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex items-center font-semibold">
                        <Share2 className="mr-3 h-5 w-5"/> Compartir este artículo
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Compartir en Facebook"><Facebook className="h-5 w-5" /></Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Compartir en Twitter"><Twitter className="h-5 w-5" /></Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Compartir en LinkedIn"><Linkedin className="h-5 w-5" /></Link>
                        </Button>
                         <Button variant="outline" size="icon" asChild>
                            <Link href="#" aria-label="Compartir en WhatsApp"><MessageCircle className="h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}
