import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/shop/${product.id}`} className="block">
          <div className="aspect-square relative w-full overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.imageHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-headline leading-tight">
          <Link href={`/shop/${product.id}`} className="hover:text-primary">
            {product.name}
          </Link>
        </CardTitle>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="text-xl font-semibold font-headline text-primary">
          ${product.price.toFixed(2)}
        </p>
        <Button size="sm" className="font-headline">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
