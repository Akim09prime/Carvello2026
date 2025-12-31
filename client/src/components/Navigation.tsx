import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Acasă" },
    { href: "/despre", label: "Despre" },
    { href: "/servicii", label: "Servicii" },
    {
      label: "Servicii CNC",
      dropdown: [
        { href: "/servicii-cnc#frezari", label: "Frezări CNC" },
        { href: "/servicii-cnc#riflaje", label: "Riflaje / Fluted" },
        { href: "/servicii-cnc#fronturi", label: "Fronturi bucătărie" },
        { href: "/servicii-cnc#decor", label: "Panouri decorative / Gravură" },
      ]
    },
    { href: "/vopsitorie", label: "Vopsitorie" },
    { href: "/proiectare", label: "Proiectare" },
    { href: "/portofoliu", label: "Portofoliu" },
    { href: "/magazin", label: "Magazin", isSoon: true },
    { href: "/proces-garantii", label: "Proces" },
    { href: "/recenzii", label: "Recenzii" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl border-white/[0.06] py-3"
          : "bg-transparent border-transparent py-5"
      }`}
      style={{ 
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none' 
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-foreground">
          Carvello<span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            item.dropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary outline-none ${
                  location.startsWith("/servicii-cnc") ? "text-primary" : "text-muted-foreground"
                }`}>
                  {item.label} <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1a1a1a] border-white/10 text-white min-w-[200px]">
                  {item.dropdown.map((subItem) => (
                    <DropdownMenuItem key={subItem.href} asChild className="focus:bg-white/5 focus:text-primary cursor-pointer">
                      <Link href={subItem.href}>{subItem.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
                {item.isSoon && (
                  <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-primary/30 text-primary uppercase font-bold bg-primary/5">
                    În curând
                  </Badge>
                )}
              </Link>
            )
          ))}
          <Link href="/cerere-oferta">
            <Button
              variant="default"
              className="btn-primary font-semibold px-6"
              data-testid="button-nav-cta"
            >
              Cere Ofertă
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="xl:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-white/5">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1a1a1a] border-l border-white/10 w-[300px] p-0">
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-serif font-bold text-foreground">
                    Carvello<span className="text-primary">.</span>
                  </span>
                </div>
                
                <div className="flex flex-col gap-4 overflow-y-auto">
                  {navItems.map((item) => (
                    item.dropdown ? (
                      <div key={item.label} className="space-y-3">
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">{item.label}</span>
                        <div className="flex flex-col gap-3 pl-4 border-l border-white/5">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={`text-base font-medium transition-colors hover:text-primary ${
                                location === subItem.href ? "text-primary" : "text-muted-foreground"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary ${
                          location === item.href ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                        {item.isSoon && (
                          <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-primary/30 text-primary uppercase font-bold bg-primary/5">
                            În curând
                          </Badge>
                        )}
                      </Link>
                    )
                  ))}
                  <div className="h-px bg-white/10 my-4 shrink-0" />
                  <Link href="/cerere-oferta" onClick={() => setIsOpen(false)}>
                    <Button className="w-full btn-primary font-semibold">
                      Cere Ofertă
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
