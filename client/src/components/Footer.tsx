import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-serif font-bold text-foreground block">
              Carvello<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Mobilier la comandă definit prin precizie, materiale premium și design atemporal. Fabricat cu mândrie în București.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Navigare</h3>
            <ul className="space-y-2">
              {[
                { label: "Acasă", href: "/" },
                { label: "Despre Noi", href: "/despre" },
                { label: "Servicii", href: "/servicii" },
                { label: "Portofoliu", href: "/portofoliu" },
                { label: "Magazin", href: "/magazin" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Servicii</h3>
            <ul className="space-y-2">
              {[
                { label: "Bucătării Custom", href: "/servicii" },
                { label: "Dressing & Dulapuri", href: "/servicii" },
                { label: "Mobilier Living", href: "/servicii" },
                { label: "Servicii CNC", href: "/servicii-cnc" },
                { label: "Proiectare 3D", href: "/servicii" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Strada Exemplului Nr. 10, Sector 1, București</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+40 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">contact@carvello.ro</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Carvello StudioCraft. Toate drepturile rezervate.</p>
          <div className="flex gap-6">
            <Link href="/proces-garantii" className="hover:text-primary transition-colors">Termeni și Condiții</Link>
            <Link href="/proces-garantii" className="hover:text-primary transition-colors">Politica de Confidențialitate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
