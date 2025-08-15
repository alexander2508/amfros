import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="font-bold text-lg font-headline">AMFROS</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Dedicados a mejorar la salud a través de una mejor respiración y postura oral.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary" /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold">Explorar</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">Sobre Nosotros</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-primary">Productos</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/specialists" className="text-muted-foreground hover:text-primary">Nuestros Expertos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold">Soporte</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary">Preguntas Frecuentes</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contáctanos</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary">Envíos y Devoluciones</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold">Mantente Informado</h3>
            <p className="mt-4 text-sm text-muted-foreground">Suscríbete a nuestro boletín para recibir las últimas investigaciones y actualizaciones de productos.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Ingresa tu correo" className="bg-background" />
              <Button type="submit" className="font-headline">Suscribirse</Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AMFROS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
