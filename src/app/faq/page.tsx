import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respuestas sobre el libro de Ortopedia Funcional Mandibular (Clase II) y el AAMF: contenidos, uso clínico, formatos y compra.",
};

const faqItems: FaqItem[] = [
  {
    question: "¿De qué trata el libro?",
    answer:
      "Es una guía clínica y científica en 8 capítulos sobre crecimiento y desarrollo cráneo–naso–maxilo–mandibular, diagnóstico oportuno de la Clase II esquelética y un protocolo con AAMF (Aparato de Adelantamiento Mandibular Fijo). Integra fundamentos como Matriz Funcional, mecanotransducción y teoría del servosistema, y los traduce en pasos clínicos reproducibles.",
  },
  {
    question: "¿A quién está dirigido?",
    answer:
      "A odontólogos, ortodoncistas, odontopediatras, especialistas en ortopedia maxilar y estudiantes avanzados que buscan una ruta práctica para la intervención oportuna de la Clase II esquelética.",
  },
  {
    question: "¿Qué es el AAMF?",
    answer:
      "El AAMF es un aparato ortopédico funcional fijo descrito en el libro. Favorece la descompresión de la ATM, restablece propiocepciones (incisiva, muscular, lingual y de la ATM) y permite lateralidades al no unir maxilar y mandíbula, contribuyendo a un patrón funcional más fisiológico.",
  },
  {
    question: "¿Qué significan CPT y EN en el protocolo?",
    answer:
      "CPT es el Cambio de Postura Terapéutica hasta el límite fisiológico; EN es la Excitación Neural mediante guía anterior/contactos que reactivan la propiocepción. Juntos orientan la adaptación mandibular, la estabilidad y el crecimiento condilar secundario.",
  },
  {
    question: "¿Cuándo es el momento ideal para intervenir?",
    answer:
      "El libro detalla el diagnóstico del pico puberal y criterios complementarios (ej. valoración cervical/carpograma) para decidir el inicio terapéutico y maximizar la respuesta adaptativa.",
  },
  {
    question: "¿Por qué es importante el plano oclusal?",
    answer:
      "La relación del plano oclusal con la rotación y la posición mandibular es clave. El texto explica cómo su control influye en la dirección del crecimiento y en la estabilidad del cambio terapéutico.",
  },
  {
    question: "¿Qué diferencia al AAMF de otros aparatos?",
    answer:
      "Es fijo, cómodo, permite lateralidades, promueve la descompresión de la ATM y facilita la propiocepción. El libro compara sus ventajas frente a dispositivos removibles o fijaciones que limitan la función.",
  },
  {
    question: "¿Incluye casos clínicos o pasos de instalación?",
    answer:
      "Sí. Presenta una ruta paso a paso para diagnóstico, instalación, seguimiento y resolución de problemas, con criterios de control y evaluación de resultados.",
  },
  {
    question: "¿El libro está disponible en formato digital o impreso?",
    answer:
      "Está disponible en PDF (digital) y próximamente en edición impresa. Si compras la versión digital, podrás acceder a futuras correcciones menores sin costo adicional.",
  },
  {
    question: "¿Puedo usar el AAMF sin formación específica?",
    answer:
      "No. El AAMF es un recurso clínico para profesionales formados. El libro es una guía técnica; no sustituye la capacitación, el juicio clínico ni la normativa sanitaria local.",
  },
  {
    question: "¿Qué contenido científico respalda el enfoque?",
    answer:
      "Se apoyan conceptos de Matriz Funcional, mecanotransducción, servosistema/cibernética y evidencia sobre la capacidad adaptativa del cóndilo ante fuerzas adecuadas, integrados en un protocolo clínico.",
  },
  {
    question: "¿Cómo aprovechar mejor el contenido del libro?",
    answer:
      "Estudia los fundamentos, realiza el diagnóstico del pico puberal, planifica el CPT, controla el plano oclusal y sigue el protocolo con indicadores de seguimiento. La reproducibilidad depende de adherirte a cada paso.",
  },
  {
    question: "¿Cuál es la política de compra y soporte del libro?",
    answer:
      "Las compras digitales permiten descarga inmediata. Para dudas editoriales o acceso, usa el canal de contacto del sitio. Las políticas de cambios/devoluciones para la edición impresa se especifican en la página de compra.",
  },
  {
    question: "¿El libro aborda contraindicaciones o precauciones?",
    answer:
      "Incluye consideraciones clínicas y criterios para selección de casos. Toda intervención debe ajustarse al examen integral del paciente, consentimiento informado y normativa vigente.",
  },
];

export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Preguntas Frecuentes
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Encuentra respuestas sobre el libro y el AAMF: fundamentos, protocolo, formatos y compra.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
