
'use client';

import { useEffect } from 'react';
import { useCart } from '@/context/cart-context';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      toast({
        title: 'Acceso Denegado',
        description: 'Debes iniciar sesión para acceder a esta página.',
        variant: 'destructive'
      })
      router.push('/login');
    }
  }, [user, loading, router, toast]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // En una aplicación real, aquí se procesaría el pago
    console.log('Procesando pago...');
    
    toast({
      title: '¡Pedido Realizado!',
      description: 'Gracias por tu compra. Te hemos enviado un correo de confirmación.',
    });
    
    clearCart();
    router.push('/');
  };

  if (loading || !user) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <p>Cargando...</p>
        </div>
    )
  }

  if (cartItems.length === 0) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
            <p className="text-muted-foreground mb-6">No puedes proceder al pago sin productos.</p>
            <Button asChild>
                <Link href="/shop">Volver a la Tienda</Link>
            </Button>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8 text-center">
        Finalizar Compra
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="order-2 lg:order-1">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto y Envío</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" defaultValue={user.email || ''} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Tu apellido" required />
                    </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input id="address" placeholder="Calle Falsa 123" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Ciudad</Label>
                    <Input id="city" placeholder="Ciudad" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">Estado/Provincia</Label>
                    <Input id="state" placeholder="Estado" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">Código Postal</Label>
                    <Input id="zip" placeholder="12345" required />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Información de Pago</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="card-number">Número de Tarjeta</Label>
                        <Input id="card-number" placeholder="**** **** **** 1234" required />
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="expiry-date">Fecha de Expiración</Label>
                            <Input id="expiry-date" placeholder="MM/AA" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" required />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Button type="submit" size="lg" className="w-full mt-8 font-headline text-lg">
              Pagar ${cartTotal.toFixed(2)}
            </Button>
          </form>
        </div>

        <div className="order-1 lg:order-2">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Resumen de tu Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>Gratis</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
