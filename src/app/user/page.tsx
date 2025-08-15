
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Heart, Package, User, Download, LogOut } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types";
import { getAllProducts } from "@/lib/products";

const favoriteProducts: Product[] = getAllProducts();

export default function UserPanelPage() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return (
            <div className="container mx-auto px-4 py-8 sm:py-12 text-center">
                <p>Cargando...</p>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Mi Cuenta</h1>
                    <p className="mt-2 text-muted-foreground">¡Bienvenido de nuevo, {user.displayName || user.email}!</p>
                </div>
                <Button variant="outline" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar Sesión
                </Button>
            </div>
            
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                    <TabsTrigger value="profile" className="py-2"><User className="mr-2 h-4 w-4" /> Perfil</TabsTrigger>
                    <TabsTrigger value="orders" className="py-2"><Package className="mr-2 h-4 w-4" /> Pedidos</TabsTrigger>
                    <TabsTrigger value="downloads" className="py-2"><Download className="mr-2 h-4 w-4" /> Descargas</TabsTrigger>
                    <TabsTrigger value="favorites" className="py-2"><Heart className="mr-2 h-4 w-4" /> Favoritos</TabsTrigger>
                </TabsList>
                <div className="mt-6">
                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle>Información del Perfil</CardTitle>
                                <CardDescription>Actualiza tus datos personales y contraseña.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre Completo</Label>
                                    <Input id="name" defaultValue={user.displayName || ""} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo Electrónico</Label>
                                    <Input id="email" type="email" defaultValue={user.email || ""} disabled />
                                </div>
                                <Separator />
                                 <div className="space-y-2">
                                    <Label htmlFor="current-password">Contraseña Actual</Label>
                                    <Input id="current-password" type="password" placeholder="Dejar en blanco para no cambiar" />
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="new-password">Nueva Contraseña</Label>
                                    <Input id="new-password" type="password" placeholder="Dejar en blanco para no cambiar" />
                                </div>
                                <Button className="font-headline">Guardar Cambios</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="orders">
                        <Card>
                            <CardHeader>
                                <CardTitle>Historial de Pedidos</CardTitle>
                                <CardDescription>Revisa tus compras anteriores.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ID de Pedido</TableHead>
                                            <TableHead>Fecha</TableHead>
                                            <TableHead>Estado</TableHead>
                                            <TableHead className="text-right">Total</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">#RV1024</TableCell>
                                            <TableCell>2023-10-26</TableCell>
                                            <TableCell>Enviado</TableCell>
                                            <TableCell className="text-right">$99.99</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">#RV1018</TableCell>
                                            <TableCell>2023-08-15</TableCell>
                                            <TableCell>Entregado</TableCell>
                                            <TableCell className="text-right">$320.00</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="downloads">
                        <Card>
                             <CardHeader>
                                <CardTitle>Tus Descargas</CardTitle>
                                <CardDescription>Accede a tus guías y recursos digitales comprados.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center p-3 rounded-md border">
                                        <span>Manual de Ortopedia Funcional.pdf</span>
                                        <Button variant="outline" size="sm">Descargar</Button>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="favorites">
                        <Card>
                             <CardHeader>
                                <CardTitle>Artículos Guardados</CardTitle>
                                <CardDescription>Tus productos favoritos, todo en un solo lugar.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {favoriteProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}
