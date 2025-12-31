import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cpu, Layers, Grid, Frame, ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const services = [
  { 
    icon: <Cpu className="w-7 h-7" />, 
    title: "Frezare CNC de Precizie", 
    desc: "Toleranțe sub 0.1mm. Decupaje complexe, îmbinări, perforări și gravuri pentru mobilier tehnic și decorativ.",
    highlight: "Precizie 0.1mm"
  },
  { 
    icon: <Layers className="w-7 h-7" />, 
    title: "Riflaje / Fluted Panels", 
    desc: "Panouri MDF cu riflaje verticale sau orizontale. Fronturi, pereți accent, elemente de design interior.",
    highlight: "Trend 2024"
  },
  { 
    icon: <Frame className="w-7 h-7" />, 
    title: "Fronturi Bucătărie", 
    desc: "Fronturi MDF frezate sau riflate, pregătite pentru vopsire. Compatibile cu orice sistem de bucătărie.",
    highlight: "Orice dimensiune"
  },
  { 
    icon: <Grid className="w-7 h-7" />, 
    title: "Panouri Decorative", 
    desc: "Logo-uri 3D, plăci signalectice, elemente pentru recepții, hoteluri și spații comerciale.",
    highlight: "Branding 3D"
  }
];

const specs = [
  { label: "Mașini CNC", value: "4" },
  { label: "Precizie", value: "0.1mm" },
  { label: "Timp estimare", value: "24h" },
  { label: "Materiale", value: "MDF/PAL/Lemn" }
];

export default function ServiciiCNC() {
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
              Servicii Industriale
            </p>
            <h1 className="text-foreground mb-6">
              Prelucrare <span className="text-brass italic">CNC</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Patru utilaje CNC industriale. Capacitate mare de producție. 
              Precizie milimetrică pentru proiecte complexe.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {specs.map((spec, idx) => (
                <div key={idx} className="badge-trust">
                  <span className="font-bold">{spec.value}</span>
                  <span className="text-muted-foreground text-xs">{spec.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass-card p-8 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-brass/10 border border-brass/20 rounded-xl flex items-center justify-center text-brass group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-brass bg-brass/10 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
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
                <p className="text-brass uppercase tracking-[0.15em] text-sm font-medium mb-4">
                  Infrastructură
                </p>
                <h2 className="text-3xl mb-6">Tehnologie de Vârf</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Utilizăm patru utilaje CNC industriale de ultimă generație. 
                  Software-ul nostru de optimizare reduce pierderile de material 
                  și asigură eficiență maximă în producție.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Toleranțe sub 0.1mm pentru proiecte tehnice",
                    "Procesare MDF, PAL, placaj, lemn masiv, aluminiu",
                    "Frezare 2D, 2.5D și 3D pentru forme complexe",
                    "Optimizare automată pentru minim deșeuri"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-brass shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] lg:h-auto">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=1200')` 
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
            className="glass-card p-10 lg:p-14"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="text-2xl mb-4">Formate Acceptate</h2>
                <p className="text-muted-foreground max-w-lg">
                  Trimiteți fișiere tehnice sau schițe. Echipa noastră poate converti 
                  orice format în trasee CNC.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["PDF", "DXF", "DWG", "SVG", "AI"].map((format) => (
                  <div key={format} className="bg-background border border-white/10 rounded-xl px-6 py-4 text-center min-w-[80px]">
                    <span className="text-brass font-mono text-lg font-bold">.{format.toLowerCase()}</span>
                  </div>
                ))}
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
            <h2 className="text-3xl mb-4">Aveți un proiect CNC?</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Trimiteți fișierele sau descrierea proiectului. Răspundem cu estimare de preț în 24 de ore.
            </p>
            <Link href="/cerere-oferta?tip=cnc">
              <Button 
                size="lg"
                className="btn-primary text-lg px-10 py-7 rounded-full font-semibold group"
                data-testid="button-cta-cnc"
              >
                Cere Ofertă CNC
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
