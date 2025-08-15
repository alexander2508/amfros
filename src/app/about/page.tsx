import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre el Libro",
  description:
    "Conoce la misión, fundamentos científicos, objetivos y autores del libro: guía clínica y científica sobre crecimiento craneofacial, Clase II esquelética y el AAMF.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero: Libro */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center sm:py-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Sobre el Libro: Crecimiento Craneofacial y Clase II Esquelética
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            Una obra clínica y científica que integra crecimiento y desarrollo craneofacial,
            diagnóstico oportuno y protocolos terapéuticos, incluyendo el Aparato de
            Adelantamiento Mandibular Fijo (AAMF).
          </p>
        </div>
      </section>

      {/* Historia / Propósito del libro */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Origen y Propósito
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                El libro surge para unificar conocimientos sobre el crecimiento y desarrollo
                craneofacial y su aplicación clínica en el manejo temprano de las maloclusiones,
                con énfasis en la Clase II esquelética. Integra avances en genética, bioingeniería
                y métodos biológicos cuantitativos, y los traduce en decisiones terapéuticas
                prácticas y oportunas.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Su objetivo es ofrecer una guía clara y aplicable para profesionales y
                residentes: comprender las bases biológicas del crecimiento, identificar el
                momento ideal de intervención y aplicar protocolos reproducibles que favorezcan
                resultados estables a largo plazo.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/800x600.png"
                alt="Materiales del libro y esquema craneofacial"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
                data-ai-hint="book materials and craniofacial scheme"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fundamentos científicos (resumen didáctico) */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Fundamentos Científicos Clave
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              El libro integra teorías y evidencia moderna para explicar cómo y cuándo
              intervenir en el complejo cráneo–naso–maxilo–mandibular.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-headline text-xl font-semibold">
                  Matriz Funcional (Moss)
                </h3>
                <p className="mt-2 text-muted-foreground">
                  La morfogénesis está regulada por factores epigenéticos; las cargas
                  funcionales inducen respuestas celulares (mecanotransducción) que
                  modifican crecimiento y remodelado.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-headline text-xl font-semibold">
                  Teoría Cibernética / Servosistema (Petrovick)
                </h3>
                <p className="mt-2 text-muted-foreground">
                  El crecimiento es un sistema regulado por entradas funcionales y
                  moduladores neuro–hormonales; la posición sagital y la propiocepción
                  guían la adaptación mandibular.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-headline text-xl font-semibold">
                  Mecanotransducción y Condilo Adaptativo
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Estímulos mecánicos repetidos inducen cambios celulares e histológicos
                  en el cóndilo, explicando su capacidad de crecimiento y remodelación ante
                  terapias de propulsión mandibular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué cubre el libro */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Qué encontrarás en el libro
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Tipos de crecimiento craneofacial y su relevancia clínica.",
              "Diagnóstico del pico puberal y momento ideal de intervención.",
              "Relación del plano oclusal con la rotación y posición mandibular.",
              "Bases genéticas y epigenéticas: del gen a la función.",
              "Protocolos terapéuticos paso a paso para Clase II esquelética.",
              "Descripción y principios del AAMF como alternativa fija.",
            ].map((item, i) => (
              <div key={i} className="flex items-start bg-card rounded-lg p-5 shadow-sm">
                <CheckCircle className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AAMF (resumen clínico) */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                AAMF: Aparato de Adelantamiento Mandibular Fijo
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Aparato ortopédico funcional fijo que favorece la descompresión de la ATM,
                restablece la propiocepción (incisiva, muscular, lingual y de la ATM) y promueve
                crecimiento condilar secundario. No une maxilar y mandíbula, permitiendo
                lateralidades y una función más fisiológica.
              </p>
              <ul className="mt-6 space-y-2 text-muted-foreground">
                <li>• Cambio de Postura Terapéutica (CPT) hasta el límite fisiológico.</li>
                <li>• Excitación Neural (EN) mediante guía anterior y contactos incisivos.</li>
                <li>• Estabilidad de la nueva posición mientras se descomprime la ATM.</li>
              </ul>
            </div>
            <div>
              <Image
                src="https://placehold.co/800x600.png"
                alt="Esquema del AAMF y su acción en el complejo craneofacial"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
                data-ai-hint="AAMF device scheme"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Autores */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Autores
          </h2>
          <div className="mt-10 max-w-3xl mx-auto text-center text-muted-foreground">
            <p>
              Trabajo analítico y dedicado de la <strong>Dra. Rosmery García Ramos</strong>,
              con la colaboración de los Dres. <strong>Daniel Afanador</strong>,{" "}
              <strong>Carlos Eduardo Barboza García</strong> y{" "}
              <strong>David Alejandro Novoa García</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center sm:py-20">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Profundiza y lleva estos conceptos a la práctica
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Accede al índice completo, casos y protocolos detallados dentro del libro.
          </p>
          <div className="mt-8">
            <a
              href="/shop/book-01"
              className="inline-block rounded-lg bg-accent px-6 py-3 font-headline text-lg font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Ver el Libro
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
