import { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";
import type { Product } from "@/types";

export const metadata: Metadata = {
    title: "Shop",
    description: "Browse our collection of scientifically-designed products for better breathing and oral health.",
};

const products: Product[] = [
    { id: "1", name: "Oral Posture Trainer", price: 79.99, image: "https://placehold.co/600x600.png", imageHint: "medical device", description: "..." },
    { id: "2", name: "Myo-Functional Sleep Aid", price: 129.99, image: "https://placehold.co/600x600.png", imageHint: "sleep aid", description: "..." },
    { id: "3", name: "Breathing Exercise Kit", price: 49.99, image: "https://placehold.co/600x600.png", imageHint: "exercise kit", description: "..." },
    { id: "4", name: "Nasal Dilator Strips (30-pack)", price: 24.99, image: "https://placehold.co/600x600.png", imageHint: "nasal strips", description: "..." },
    { id: "5", name: "Jaw Exercise Tool", price: 34.99, image: "https://placehold.co/600x600.png", imageHint: "jaw exerciser", description: "..." },
    { id: "6", name: "Tongue Scraper (Copper)", price: 14.99, image: "https://placehold.co/600x600.png", imageHint: "tongue scraper", description: "..." },
];

export default function ShopPage() {
    return (
        <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Our Products</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Solutions designed by experts to help you achieve optimal health.
                </p>
            </div>

            <div className="flex justify-between items-center mb-8">
                <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                            <ListFilter className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Popularity</DropdownMenuItem>
                        <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                        <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                        <DropdownMenuItem>Newest</DropdownMenuItem>
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
