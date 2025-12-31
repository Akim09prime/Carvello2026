import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Ruler, Layout, Image as ImageIcon, Map, ArrowRight, Monitor } from "lucide-react";

const services = [
  { 
    title: "Măsurători la Fața Locului", 
    desc: "Releveu laser de precizie. Documentăm fiecare detaliu pentru potrivire perfectă.",
    icon: <Map className="w-7 h-7" />,
    tag: "RLV"
  },
  { 
    title: "Proiectare Tehnică", 
    desc: "Documentație completă: cote, liste de debitare, scheme de găurire. Optimizare pentru producție.",
    icon: <Layout className="w-7 h-7" />,
    tag: "CAD"
  },
  { 
    title: "Randări Fotorealiste", 
    desc: "Vizualizezi proiectul înainte de execuție. Texturi, lumini, materiale — totul la detaliu.",
    icon: <ImageIcon className="w-7 h-7" />,
    tag: "3D"
  },
  { 
    title: "Configurare Feronerie", 
    desc: "Proiecte de găurire pentru sisteme Blum, Hettich, Häfele. Compatibilitate garantată.",
    icon: <Ruler className="w-7 h-7" />,
    tag: "Hardware"
  }
];

const benefits = [
  "Eliminarea erorilor de producție",
  "Optimizare consum materiale",
  "Aprobare vizuală înainte de execuție",
  "Documentație pentru montaj rapid"
];

export default function Proiectare() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-brass uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Design & Tehnic
            </p>
            <h1 className="text-foreground mb-6">
              Proiectare <span className="text-brass italic">3D</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transformăm ideile în proiecte executabile. Randări fotorealiste, 
              documentație tehnică completă, optimizare pentru producție.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-brass/10 border border-brass/20 rounded-xl flex items-center justify-center text-brass group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-brass bg-brass/10 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto order-2 lg:order-1">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200')` 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-card via-card/50 to-transparent lg:via-transparent" />
              </div>
              <div className="p-10 lg:p-14 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Monitor className="w-6 h-6 text-brass" />
                  <p className="text-brass uppercase tracking-[0.15em] text-sm font-medium">
                    Beneficii
                  </p>
                </div>
                <h2 className="text-3xl mb-6">De Ce Proiectare Profesională?</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Investiția în proiectare se recuperează de multe ori prin 
                  eliminarea erorilor de producție și optimizarea consumului de materiale.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground/90">
                      <div className="w-2 h-2 bg-brass rounded-full shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 lg:p-14"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-serif text-brass mb-2">48h</div>
                <p className="text-muted-foreground">Randări gata în 48 ore</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-brass mb-2">3</div>
                <p className="text-muted-foreground">Revizii incluse gratuit</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-brass mb-2">100%</div>
                <p className="text-muted-foreground">Compatibil producție</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brass/5" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-4">Gata să proiectăm?</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Oferim servicii de proiectare pentru clienți finali și ateliere 
              care doresc externalizarea părții tehnice.
            </p>
            <Link href="/cerere-oferta?tip=proiectare">
              <Button 
                size="lg"
                className="btn-primary text-lg px-10 py-7 rounded-full font-semibold group"
                data-testid="button-cta-proiectare"
              >
                Cere Ofertă Proiectare
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
