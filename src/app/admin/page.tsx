import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Panel de Administración",
    description: "Panel administrativo de AMFROS.",
    robots: {
        index: false,
        follow: false,
    }
};

export default function AdminPage() {
    return (
        <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                            <Shield className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-headline text-2xl">Panel de Administración</CardTitle>
                        <CardDescription>Bienvenido al área administrativa de AMFROS.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-muted-foreground">
                            Esta sección está restringida al personal autorizado. Desde aquí, puede gestionar productos, pedidos, usuarios y contenido del sitio.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
