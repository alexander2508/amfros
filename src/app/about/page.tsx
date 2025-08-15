import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce la misión, los valores y el equipo detrás de las innovadoras soluciones de salud de RespireVital.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center sm:py-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Nuestra Misión: Un Mundo Más Sano, Una Respiración a la Vez</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            Somos un equipo de profesionales de la salud, científicos e innovadores apasionados por desbloquear el potencial humano a través de los pilares fundamentales de la salud: la respiración y el bienestar oral.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">La Historia de RespireVital</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                RespireVital nació de una simple pero profunda constatación: millones de personas sufren problemas crónicos que pueden atribuirse a patrones de respiración disfuncionales y a una mala postura oral. Desde trastornos del sueño hasta baja energía y problemas dentales, las consecuencias son de gran alcance.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Frustrados por la falta de soluciones accesibles y no invasivas, nuestros fundadores reunieron a expertos líderes en odontología, terapia miofuncional y ciencia respiratoria. Nuestro objetivo era crear herramientas eficaces y basadas en la evidencia que capacitaran a las personas para recuperar su salud de forma natural. Hoy, RespireVital está a la vanguardia de esta revolución del bienestar.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/800x600.png"
                alt="El equipo de RespireVital colaborando"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Valores Fundamentales</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Estos principios guían todo lo que hacemos, desde el desarrollo de productos hasta el soporte al cliente.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Rigor Científico</h3>
                        <p className="mt-2 text-muted-foreground">Cada producto está respaldado por investigaciones científicas y desarrollado en colaboración con profesionales médicos.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Empoderamiento a Través de la Educación</h3>
                        <p className="mt-2 text-muted-foreground">Creemos en proporcionar conocimientos y herramientas que te den el control sobre tu viaje hacia la salud.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Calidad Incomprometible</h3>
                        <p className="mt-2 text-muted-foreground">Utilizamos únicamente materiales biocompatibles de la más alta calidad para garantizar la seguridad y la eficacia.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
