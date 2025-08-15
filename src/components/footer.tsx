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
              <span className="font-bold text-lg font-headline">RespireVital</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Dedicated to improving health through better breathing and oral posture.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary" /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/specialists" className="text-muted-foreground hover:text-primary">Our Experts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold">Stay Informed</h3>
            <p className="mt-4 text-sm text-muted-foreground">Subscribe to our newsletter for the latest research and product updates.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" className="font-headline">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RespireVital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
