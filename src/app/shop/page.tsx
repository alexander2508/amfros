import { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Explora los productos del manual: el libro y el AAMF (Aparato de Adelantamiento Mandibular Fijo).",
  alternates: { canonical: "/shop" },
};

const products: Product[] = [
  {
    id: "book-01",
    name: "Manual de Ortopedia Funcional Mandibular (Libro)",
    price: 99.99,
    image: "https://placehold.co/600x600.png",
    imageHint: "libro medico portada",
    description:
      "Guía clínica en 8 capítulos: crecimiento craneofacial, diagnóstico del pico puberal y protocolo con AAMF.",
  },
  {
    id: "aamf-01",
    name: "AAMF – Arco de Adelantamiento Mandibular Fijo",
    price: 320.00,
    image: "https://placehold.co/600x600.png",
    imageHint: "dispositivo ortopédico funcional fijo",
    description:
      "Aparato fijo descrito en el libro: CPT y EN; no une maxilar y mandíbula, permite lateralidades y favorece la descompresión de la ATM.",
  },
];

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Productos del Manual
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Adquiere el libro y, si eres clínico, el AAMF descrito y justificado en su contenido.
        </p>
      </div>

      <div className="flex justify-end mb-8">
        <Button variant="outline" size="sm" className="h-8">
          Ordenar por: Relevancia
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
