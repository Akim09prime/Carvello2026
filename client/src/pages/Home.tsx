import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Cpu, Paintbrush, Box, Settings, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroScale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], prefersReducedMotion ? [1, 1] : [1, 0]);
  
  const animationProps = prefersReducedMotion 
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
  
  const scrollAnimationProps = prefersReducedMotion
    ? { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
    : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } };

  const trustBadges = [
    { label: "4 CNC Industriale", sublabel: "Precizie 0.1mm" },
    { label: "Finisaj Premium", sublabel: "Lacuri 2K" },
    { label: "Proiectare 3D", sublabel: "Vizualizare completă" },
    { label: "București", sublabel: "Montaj rapid" }
  ];

  const services = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Prelucrare CNC",
      desc: "Precizie industrială pentru componente complexe. Debitare, frezare, gravură.",
      href: "/servicii-cnc",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Vopsitorie MDF",
      desc: "Finisaje premium în cabină profesională. Lacuri 2K, suprafețe impecabile.",
      href: "/vopsitorie",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Proiectare 3D",
      desc: "Vizualizare fotorealistă înainte de producție. Ajustări nelimitate.",
      href: "/proiectare",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Mobilier Complet",
      desc: "De la concept la montaj. Bucătării, dressing-uri, living-uri.",
      href: "/servicii",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const processSteps = [
    { step: "01", title: "Consultanță", desc: "Înțelegem viziunea ta și stabilim parametrii proiectului." },
    { step: "02", title: "Design 3D", desc: "Creăm randări fotorealiste pentru aprobare." },
    { step: "03", title: "Producție", desc: "Execuție precisă pe utilaje CNC industriale." },
    { step: "04", title: "Montaj", desc: "Instalare profesională, fără compromisuri." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: heroScale }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000')` }}
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background z-10" />
        <div className="absolute inset-0 hero-gradient z-10" />
        
        <motion.div 
          className="container relative z-20 px-4 md:px-6 text-center max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brass uppercase tracking-[0.3em] text-sm font-medium mb-6">
              Atelier Premium București
            </p>
            
            <h1 className="text-foreground mb-8 leading-[1.1]">
              Mobilier la comandă,{" "}
              <span className="text-brass italic">fără compromisuri.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Proiectăm, producem și montăm în fabrica noastră din București. 
              Precizie CNC. Finisaje premium. Garanție extinsă.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/cerere-oferta">
                <Button 
                  size="lg" 
                  className="btn-primary text-lg px-10 py-7 rounded-full font-semibold group" 
                  data-testid="button-hero-cta"
                >
                  Cere Ofertă Gratuită
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="badge-trust">
                <span className="font-semibold">{badge.label}</span>
                <span className="text-muted-foreground hidden sm:inline">|</span>
                <span className="text-muted-foreground text-xs hidden sm:inline">{badge.sublabel}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-brass rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-brass uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Ce Oferim
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-foreground mb-6">
              Servicii Premium
            </motion.h2>
            <motion.div variants={fadeUp} className="h-px w-24 bg-gradient-to-r from-transparent via-brass to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link href={service.href}>
                  <div className="glass-card group cursor-pointer h-full overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    </div>
                    <div className="p-6 relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brass/10 border border-brass/20 flex items-center justify-center text-brass">
                          {service.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                      <div className="flex items-center text-brass text-sm font-medium group-hover:gap-2 transition-all">
                        <span>Detalii</span>
                        <ChevronRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-card/50 relative">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.p variants={fadeUp} className="text-brass uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Cum Lucrăm
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-foreground mb-6">
              Procesul Nostru
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto">
              De la prima discuție până la montajul final — transparență și profesionalism la fiecare pas.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass/30 to-transparent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {processSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative text-center"
                >
                  <div className="relative z-10 bg-background md:bg-card/50 p-6 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-brass/10 border border-brass/30 text-brass font-bold text-xl flex items-center justify-center mx-auto mb-6 glow-brass">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="container px-4 mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-10 text-xs uppercase tracking-[0.3em] font-medium"
          >
            Parteneri de Încredere
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6"
          >
            {["EGGER", "BLUM", "HETTICH", "HAFELE"].map((partner, idx) => (
              <span 
                key={idx} 
                className="text-2xl font-serif text-muted-foreground/50 hover:text-brass transition-colors duration-300 cursor-default"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brass/5" />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground mb-6">
              Pregătit să începi proiectul?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Programează o consultanță gratuită. Discutăm despre viziunea ta și îți oferim o estimare transparentă.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cerere-oferta">
                <Button 
                  size="lg" 
                  className="btn-primary text-lg px-10 py-7 rounded-full font-semibold"
                >
                  Cere Ofertă Gratuită
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="btn-outline text-lg px-10 py-7"
                >
                  Contactează-ne
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
