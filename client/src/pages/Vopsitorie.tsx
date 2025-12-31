import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Droplets, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const finishes = [
  { 
    title: "Finisaj Mat", 
    desc: "Aspect elegant, non-reflexiv, catifelat la atingere. Ideal pentru stiluri nordice și minimaliste.",
    popular: false
  },
  { 
    title: "Finisaj Satinat", 
    desc: "Echilibrul perfect între mat și lucios. Ușor de întreținut, ascunde amprentele.",
    popular: true
  },
  { 
    title: "Finisaj Lucios", 
    desc: "Efect de oglindă spectaculos. Perfect pentru spații moderne și luxoase.",
    popular: false
  }
];

const processSteps = [
  "Pregătire riguroasă a suprafeței",
  "Grunduire în straturi succesive",
  "Șlefuire intermediară fină (P320-P400)",
  "Aplicare lac în cabină ventilată",
  "Uscare controlată la 60°C",
  "Inspecție finală și ambalare"
];

export default function Vopsitorie() {
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
              Finisaje Premium
            </p>
            <h1 className="text-foreground mb-6">
              Vopsitorie <span className="text-brass italic">MDF</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cabină profesională de vopsire. Lacuri poliuretanice 2K de înaltă rezistență. 
              Orice culoare din paletarele RAL și NCS.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finishes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 relative group"
              >
                {item.popular && (
                  <span className="absolute -top-3 right-6 text-xs font-medium text-brass bg-brass/10 border border-brass/20 px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="w-12 h-12 bg-brass/10 border border-brass/20 rounded-xl flex items-center justify-center text-brass mb-6 group-hover:scale-110 transition-transform">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
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
              <div className="p-10 lg:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-brass" />
                  <p className="text-brass uppercase tracking-[0.15em] text-sm font-medium">
                    Culori Nelimitate
                  </p>
                </div>
                <h2 className="text-3xl mb-6">Paletare RAL & NCS</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Reproducem orice nuanță din paletarele internaționale. 
                  Folosim lacuri poliuretanice și acrilice premium care 
                  garantează rezistența culorii în timp și la UV.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 border border-white/5 rounded-xl p-4">
                    <span className="text-2xl font-bold text-brass">RAL</span>
                    <p className="text-muted-foreground text-sm">213 culori standard</p>
                  </div>
                  <div className="bg-background/50 border border-white/5 rounded-xl p-4">
                    <span className="text-2xl font-bold text-brass">NCS</span>
                    <p className="text-muted-foreground text-sm">1950+ nuanțe</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-auto">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200')` 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent lg:via-transparent" />
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
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-brass uppercase tracking-[0.2em] text-sm font-medium mb-4">
                Proces
              </p>
              <h2 className="text-3xl">Etapele Vopsirii Premium</h2>
            </div>
            
            <div className="space-y-4">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 glass-card p-5"
                >
                  <div className="w-10 h-10 bg-brass/10 border border-brass/20 rounded-full flex items-center justify-center text-brass font-bold text-sm shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <span className="text-foreground/90">{step}</span>
                </motion.div>
              ))}
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
            <h2 className="text-3xl mb-4">Proiect de vopsitorie?</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Trimiteți-ne dimensiunile și culoarea dorită. Oferim estimare în 24 de ore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cerere-oferta?tip=vopsitorie">
                <Button 
                  size="lg"
                  className="btn-primary text-lg px-10 py-7 rounded-full font-semibold group"
                  data-testid="button-cta-vopsitorie"
                >
                  Cere Ofertă Vopsitorie
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portofoliu">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="btn-outline text-lg px-10 py-7"
                >
                  Vezi Portofoliu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
