
'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Trash2, ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { cartItems, cartCount, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8">
        Tu Carrito de Compras
      </h1>

      {cartCount > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Resumen de Productos ({cartCount})</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          data-ai-hint={item.imageHint}
                        />
                      </div>
                      <div className="flex-1">
                        <Link href={`/shop/${item.id}`} className="font-semibold hover:text-primary">
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          Precio unitario: ${item.price.toFixed(2)}
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <label htmlFor={`quantity-${item.id}`} className="text-sm">Cantidad:</label>
                          <Input
                            id={`quantity-${item.id}`}
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                            className="h-9 w-16"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Eliminar artículo"
                          className="text-muted-foreground hover:text-destructive mt-2"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Eliminar
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>Gratis</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full font-headline">
                  <Link href="/checkout">Proceder al Pago</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 text-center border-2 border-dashed rounded-lg py-24">
            <ShoppingCart className="h-20 w-20 text-muted-foreground" />
            <h2 className="text-2xl font-semibold font-headline">Tu carrito está vacío</h2>
            <p className="text-muted-foreground max-w-sm">
              No has añadido ningún producto todavía. Explora nuestra tienda para encontrar lo que necesitas.
            </p>
            <Button asChild className="mt-4">
              <Link href="/shop">Ir a la Tienda</Link>
            </Button>
          </div>
      )}
    </div>
  );
}
