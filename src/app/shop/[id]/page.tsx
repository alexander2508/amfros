
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, ShoppingCart, Star } from 'lucide-react';
import Script from 'next/script';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/types';
import { getProductData } from '@/lib/products';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = React.useState<Product | undefined>(undefined);
  const { addToCart } = useCart();
  const { toast } = useToast();

  React.useEffect(() => {
    const productData = getProductData(params.id);
    setProduct(productData);
  }, [params.id]);

  if (!product) {
    // Idealmente, esto debería llevar a una página 404
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: 'Añadido al carrito',
      description: `${product.name} ha sido añadido a tu carrito.`,
    });
  };

  const isBook = product.id === 'book-01';

  return (
    <div className="container mx-auto px-4 py-12">
      {/* SEO JSON-LD */}
      <Script id={`ld-json-${product.id}`} type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": isBook ? "Book" : "Product",
            name: product.name,
            ...(isBook && { author: [{ "@type": "Person", name: product.details.author.name }] }),
            description: product.description,
            image: product.image,
            offers: {
              "@type": "Offer",
              price: product.price.toFixed(2),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `https://tudominio.com/shop/${product.id}`
            }
          })
        }}
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Imagen del Producto */}
        <div>
          <Image
            src={product.image}
            alt={`Imagen de ${product.name}`}
            width={800}
            height={isBook ? 1000 : 800}
            className="rounded-lg shadow-xl w-full"
            data-ai-hint={product.imageHint}
          />
        </div>

        {/* Información del Producto */}
        <div className="space-y-6">
          <h1 className="font-headline text-3xl md:text-4xl font-bold leading-tight">
            {product.name}
          </h1>
          {product.details.subtitle && <p className="text-lg text-muted-foreground">{product.details.subtitle}</p>}

          {product.details.shortDescription && <p className="text-lg text-primary bg-primary/10 p-4 rounded-md">
            👉 {product.details.shortDescription}
          </p>}

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-3xl font-bold text-primary font-headline">
                  ${product.price.toFixed(2)}
                </p>
                {product.details.technicalDetails.format && (
                    <div className="text-sm text-muted-foreground">
                        <p>Formatos disponibles:</p>
                        <p className="font-semibold">
                        {product.details.technicalDetails.format}
                        </p>
                    </div>
                )}
              </div>
              <Button size="lg" className="font-headline w-full" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Añadir al Carrito
              </Button>
            </CardContent>
          </Card>
          
          {isBook && (
            <div className="text-sm">
                <span className="text-muted-foreground">¿Eres clínico? </span>
                <Link href="/shop/aamf-01" className="underline hover:text-primary">
                Consulta el AAMF descrito en el libro
                </Link>
                .
            </div>
          )}
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-10">
          {/* Descripción Detallada */}
          <section>
            <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
              Descripción Detallada
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{product.description}</p>
              {isBook && (
                <>
                    <p>
                        <strong>Objetivo:</strong> Unificar conocimientos sobre crecimiento y
                        desarrollo craneofacial y su aplicación clínica en el manejo temprano de la
                        Clase II esquelética; identificar el momento ideal de intervención y aplicar
                        protocolos reproducibles.
                    </p>
                    <p>
                        Incluye fundamentos de Matriz Funcional y mecanotransducción (Moss),
                        Servosistema/Cibernética (Petrovick), relación del plano oclusal con la
                        rotación y posición mandibular, y evidencia del cóndilo como centro de
                        crecimiento adaptativo ante fuerzas de propulsión mandibular.
                    </p>
                    <p>
                        <strong>Dirigido a:</strong> Odontólogos, ortodoncistas, odontopediatras,
                        especialistas en ortopedia maxilar y estudiantes avanzados.
                    </p>
                </>
              )}
            </div>
          </section>

          {/* Características */}
          <section>
            <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
              Contenidos y Características Clave
            </h2>
            <ul className="space-y-3">
              {product.details.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {isBook && product.details.testimonials && (
              <section>
                <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
                Opiniones de Especialistas
                </h2>
                <div className="space-y-6">
                {product.details.testimonials.map((t: any, i: number) => (
                    <Card key={i} className="bg-secondary">
                    <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, s) => (
                            <Star key={s} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                        </div>
                        <blockquote className="italic text-muted-foreground">
                        "{t.quote}"
                        </blockquote>
                        <p className="text-right font-semibold mt-2">- {t.author}</p>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </section>
          )}

        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {isBook && product.details.author && (
            <>
                <Card>
                    <CardHeader>
                    <CardTitle className="font-headline text-xl">Vista Previa</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="italic text-muted-foreground">
                        "{product.details.preview}"
                    </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-2">
                        <AvatarImage
                        src={product.details.author.avatar}
                        alt={product.details.author.name}
                        data-ai-hint="mujer profesional retrato"
                        />
                        <AvatarFallback>
                        {product.details.author.name.split(' ').map((n: string) => n[0]).join('')}
                        </AvatarFallback>
                    </Avatar>
                    <CardTitle className="font-headline text-xl">
                        {product.details.author.name}
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                        {product.details.author.bio}
                    </p>
                    <h4 className="font-semibold mt-4 mb-2">Colaboradores:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                        {product.details.collaborators.map((name: string) => <li key={name}>{name}</li>)}
                    </ul>
                    </CardContent>
                </Card>
            </>
          )}

          {/* Detalles Técnicos */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Detalles Técnicos</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-2 text-muted-foreground">
                {Object.entries(product.details.technicalDetails).map(([key, value]) => (
                    <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value as string}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="sticky top-24">
            <Button size="lg" className="font-headline w-full text-lg py-6" onClick={handleAddToCart}>
              Añadir al Carrito por ${product.price.toFixed(2)}
            </Button>
            <p className="text-xs text-center mt-2 text-muted-foreground">
              ¿Preguntas? <Link href="/contact" className="underline hover:text-primary">Contáctanos</Link>.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
