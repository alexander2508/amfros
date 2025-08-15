import { Metadata } from "next";
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

export const metadata: Metadata = {
    title: "User Panel",
    description: "Manage your RespireVital account, orders, and preferences.",
};

const favoriteProducts: Product[] = [
    { id: "2", name: "Myo-Functional Sleep Aid", price: 129.99, image: "https://placehold.co/600x600.png", imageHint: "sleep aid", description: "..." },
    { id: "3", name: "Breathing Exercise Kit", price: 49.99, image: "https://placehold.co/600x600.png", imageHint: "exercise kit", description: "..." },
]

export default function UserPanelPage() {
    return (
        <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Account</h1>
                    <p className="mt-2 text-muted-foreground">Welcome back, User!</p>
                </div>
                <Button variant="outline">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                </Button>
            </div>
            
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                    <TabsTrigger value="profile" className="py-2"><User className="mr-2 h-4 w-4" /> Profile</TabsTrigger>
                    <TabsTrigger value="orders" className="py-2"><Package className="mr-2 h-4 w-4" /> Orders</TabsTrigger>
                    <TabsTrigger value="downloads" className="py-2"><Download className="mr-2 h-4 w-4" /> Downloads</TabsTrigger>
                    <TabsTrigger value="favorites" className="py-2"><Heart className="mr-2 h-4 w-4" /> Favorites</TabsTrigger>
                </TabsList>
                <div className="mt-6">
                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Information</CardTitle>
                                <CardDescription>Update your personal details and password.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" defaultValue="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                                </div>
                                <Separator />
                                 <div className="space-y-2">
                                    <Label htmlFor="current-password">Current Password</Label>
                                    <Input id="current-password" type="password" />
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="new-password">New Password</Label>
                                    <Input id="new-password" type="password" />
                                </div>
                            </CardContent>
                            <CardHeader className="pt-0">
                                <Button className="font-headline">Save Changes</Button>
                            </CardHeader>
                        </Card>
                    </TabsContent>
                    <TabsContent value="orders">
                        <Card>
                            <CardHeader>
                                <CardTitle>Order History</CardTitle>
                                <CardDescription>Review your past purchases.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Order ID</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Total</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">#RV1024</TableCell>
                                            <TableCell>2023-10-26</TableCell>
                                            <TableCell>Shipped</TableCell>
                                            <TableCell className="text-right">$129.99</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">#RV1018</TableCell>
                                            <TableCell>2023-08-15</TableCell>
                                            <TableCell>Delivered</TableCell>
                                            <TableCell className="text-right">$79.99</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="downloads">
                        <Card>
                             <CardHeader>
                                <CardTitle>Your Downloads</CardTitle>
                                <CardDescription>Access your purchased digital guides and resources.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center p-3 rounded-md border">
                                        <span>Breathing Exercises Guide.pdf</span>
                                        <Button variant="outline" size="sm">Download</Button>
                                    </li>
                                    <li className="flex justify-between items-center p-3 rounded-md border">
                                        <span>Oral Posture Quick Start.pdf</span>
                                        <Button variant="outline" size="sm">Download</Button>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="favorites">
                        <Card>
                             <CardHeader>
                                <CardTitle>Saved Items</CardTitle>
                                <CardDescription>Your favorite products, all in one place.</CardDescription>
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
