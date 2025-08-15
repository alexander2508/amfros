import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: "book-01",
    name: "Manual de Ortopedia Funcional Mandibular en Clases II Esqueléticas",
    price: 99.99,
    image: "https://placehold.co/800x1000.png",
    imageHint: "portada libro ortopedia funcional",
    description: "Guía clínica en 8 capítulos: crecimiento craneofacial, diagnóstico del pico puberal y protocolo con AAMF.",
    details: {
        subtitle:
          "Guía clínica en 8 capítulos: crecimiento craneofacial, diagnóstico del pico puberal y protocolo con AAMF.",
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
    }
  },
  {
    id: "aamf-01",
    name: "AAMF – Arco de Adelantamiento Mandibular Fijo",
    price: 320.00,
    image: "https://placehold.co/800x800.png",
    imageHint: "dispositivo ortopédico funcional fijo",
    description: "Aparato fijo descrito en el libro: CPT y EN; no une maxilar y mandíbula, permite lateralidades y favorece la descompresión de la ATM.",
    details: {
        subtitle: "Dispositivo ortopédico funcional fijo para el adelantamiento mandibular.",
        shortDescription: "El AAMF es una alternativa cómoda y fisiológica para la corrección de la Clase II esquelética, permitiendo una función más natural.",
        features: [
            "Favorece la descompresión de la ATM.",
            "Restablece la propiocepción (incisiva, muscular, lingual).",
            "Permite movimientos de lateralidad.",
            "Actúa 24/7 para resultados eficientes.",
            "Fabricado con materiales biocompatibles de alta calidad.",
            "Protocolo clínico detallado en el manual complementario."
        ],
        technicalDetails: {
            material: "Acero inoxidable de grado médico y acrílico",
            compatibilidad: "Adaptable a aparatología fija convencional (brackets)",
            incluye: "Dispositivo AAMF (par)",
            requerimiento: "Requiere toma de impresión y laboratorio dental para su confección."
        }
    }
  },
];

export function getProductData(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getAllProducts(): Product[] {
  return products;
}
