import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "Administrative dashboard for RespireVital.",
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
                        <CardTitle className="font-headline text-2xl">Admin Panel</CardTitle>
                        <CardDescription>Welcome to the RespireVital administrative area.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-muted-foreground">
                            This section is restricted to authorized personnel. From here, you can manage products, orders, users, and site content.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
