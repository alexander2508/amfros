import { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";
import type { Product } from "@/types";

export const metadata: Metadata = {
    title: "Tienda",
    description: "Explora nuestra colección de productos diseñados científicamente para una mejor respiración y salud oral.",
};

const products: Product[] = [
    { id: "1", name: "Entrenador de Postura Oral", price: 79.99, image: "https://placehold.co/600x600.png", imageHint: "dispositivo medico", description: "..." },
    { id: "2", name: "Ayuda Miofuncional para el Sueño", price: 129.99, image: "https://placehold.co/600x600.png", imageHint: "ayuda para dormir", description: "..." },
    { id: "3", name: "Kit de Ejercicios de Respiración", price: 49.99, image: "https://placehold.co/600x600.png", imageHint: "kit de ejercicios", description: "..." },
    { id: "4", name: "Tiras Dilatadoras Nasales (paquete de 30)", price: 24.99, image: "https://placehold.co/600x600.png", imageHint: "tiras nasales", description: "..." },
    { id: "5", name: "Herramienta para Ejercitar la Mandíbula", price: 34.99, image: "https://placehold.co/600x600.png", imageHint: "ejercitador de mandibula", description: "..." },
    { id: "6", name: "Raspador de Lengua (Cobre)", price: 14.99, image: "https://placehold.co/600x600.png", imageHint: "raspador de lengua", description: "..." },
];

export default function ShopPage() {
    return (
        <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Nuestros Productos</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Soluciones diseñadas por expertos para ayudarte a alcanzar una salud óptima.
                </p>
            </div>

            <div className="flex justify-between items-center mb-8">
                <p className="text-sm text-muted-foreground">Mostrando {products.length} productos</p>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                            <ListFilter className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filtro</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Popularidad</DropdownMenuItem>
                        <DropdownMenuItem>Precio: de menor a mayor</DropdownMenuItem>
                        <DropdownMenuItem>Precio: de mayor a menor</DropdownMenuItem>
                        <DropdownMenuItem>Más nuevos</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
