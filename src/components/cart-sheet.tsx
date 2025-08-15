
'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/cart-context';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function CartSheet() {
  const { cartItems, cartCount, cartTotal, removeFromCart, updateQuantity } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleCheckout = () => {
    if (user) {
      router.push('/checkout');
    } else {
      toast({
        title: 'Inicio de Sesión Requerido',
        description: 'Debes iniciar sesión para continuar con la compra.',
        variant: 'destructive',
      });
      router.push('/login');
    }
  };


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {cartCount}
            </span>
          )}
          <span className="sr-only">Carrito de Compras</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6">
          <SheetTitle>Tu Carrito ({cartCount})</SheetTitle>
        </SheetHeader>
        <Separator />
        {cartCount > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              <ul className="flex flex-col gap-4 py-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        data-ai-hint={item.imageHint}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Eliminar artículo"
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <Separator />
            <SheetFooter className="bg-secondary px-6 py-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Button onClick={handleCheckout} className="w-full font-headline" size="lg">
                    Ir a Pagar
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/cart">Ver Carrito</Link>
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingCart className="h-20 w-20 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Tu carrito está vacío</h2>
            <p className="text-muted-foreground">
              Parece que no has añadido nada. ¡Empieza a explorar!
            </p>
            <Button asChild>
              <Link href="/shop">Ir a la Tienda</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
