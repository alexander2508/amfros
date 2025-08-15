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
  description: "Encuentra respuestas a preguntas comunes sobre los productos RespireVital, envíos y nuestro enfoque de la salud.",
};

const faqItems: FaqItem[] = [
  {
    question: "¿Qué es la terapia miofuncional?",
    answer: "La terapia miofuncional es un programa de ejercicios que ayuda a reeducar los músculos de la boca, la lengua y la cara para que funcionen correctamente. A menudo se utiliza para corregir la deglución, la respiración y las posturas de reposo incorrectas de la lengua y los labios, que pueden afectar la salud dental, el sueño y más."
  },
  {
    question: "¿Son seguros sus productos?",
    answer: "Absolutamente. Todos los productos de RespireVital están hechos de materiales biocompatibles de alta calidad y de grado médico. Están diseñados en consulta con dentistas y expertos médicos para garantizar que sean seguros y efectivos cuando se usan según las indicaciones."
  },
  {
    question: "¿Cuánto tiempo se tarda en ver resultados?",
    answer: "Los resultados pueden variar según el individuo y el producto específico. Muchos usuarios informan mejoras notables a las pocas semanas de uso constante. Para obtener los mejores resultados, recomendamos seguir las instrucciones incluidas y usar los productos como parte de una rutina diaria."
  },
  {
    question: "¿Puedo usar sus productos si tengo brackets u otro trabajo dental?",
    answer: "Depende del producto y de su situación dental específica. Recomendamos encarecidamente consultar con su dentista u ortodoncista antes de comenzar a usar cualquier dispositivo oral nuevo para asegurarse de que sea apropiado para usted."
  },
  {
    question: "¿Cuál es su política de devoluciones?",
    answer: "Ofrecemos una garantía de satisfacción de 30 días en la mayoría de nuestros productos. Si no está completamente satisfecho con su compra, puede devolverla en un plazo de 30 días para obtener un reembolso completo. Consulte nuestra página de Envíos y Devoluciones para obtener información detallada."
  },
  {
    question: "¿Hacen envíos internacionales?",
    answer: "Sí, enviamos a muchos países de todo el mundo. Los costos y tiempos de envío variarán según su ubicación. Puede ver las opciones de envío disponibles durante el proceso de pago."
  },
];

export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Preguntas Frecuentes</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          ¿Tienes una pregunta? Estamos aquí para ayudar.
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
