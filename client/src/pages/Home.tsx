import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Ruler, Award, Wrench, PenTool, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      title: "Producție Proprie",
      description: "Fabrica noastră din București este echipată cu tehnologie de ultimă oră pentru precizie absolută."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Materiale Certificate",
      description: "Folosim exclusiv materiale premium de la Egger, Blum și Hettich pentru durabilitate garantată."
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Montaj Curat",
      description: "Echipa noastră lasă locul impecabil. Montajul este realizat cu grijă și profesionalism."
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Design 3D",
      description: "Vizualizezi proiectul înainte de producție cu randări fotorealiste detaliate."
    }
  ];

  const services = [
    {
      title: "Bucătării",
      desc: "Funcționalitate și estetică într-un spațiu gândit pentru pasiunea ta culinară.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Dressing & Dulapuri",
      desc: "Organizare inteligentă și finisaje elegante pentru garderoba ta.",
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Living",
      desc: "Mobilier care devine piesa centrală a zonei de relaxare.",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Birouri",
      desc: "Spații de lucru ergonomice care inspiră productivitate.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Dark luxury workshop interior */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000')` }}
        />
        <div className="absolute inset-0 bg-[#1F1F1F]/90 z-10" />
        
        <div className="container relative z-20 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Mobilier la comandă, <br />
              <span className="text-primary italic">fără compromisuri.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Proiectăm, producem și montăm în fabrica noastră din București — cu calitate premium la fiecare detaliu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(190,154,90,0.3)] hover:shadow-[0_0_30px_rgba(190,154,90,0.5)] transition-all">
                  Cere Ofertă
                </Button>
              </Link>
              <Link href="/portofoliu">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                  Vezi Portofoliu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">De ce Carvello?</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Serviciile Noastre</h2>
              <p className="text-muted-foreground max-w-md">Soluții complete de amenajare pentru fiecare colț al casei tale.</p>
            </div>
            <Link href="/servicii">
              <Button variant="link" className="text-primary hover:text-primary/80 p-0 text-lg group">
                Vezi toate serviciile <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[300px] lg:h-[400px] overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Service interior image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-serif font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">{service.title}</h3>
                  <p className="text-gray-300 max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Procesul Nostru</h2>
            <p className="text-muted-foreground">De la idee la realitate în 4 pași simpli</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultanță", desc: "Discutăm nevoile și bugetul tău." },
                { step: "02", title: "Design 3D", desc: "Proiectăm spațiul în detaliu." },
                { step: "03", title: "Producție", desc: "Execuție precisă în fabrică." },
                { step: "04", title: "Montaj", desc: "Instalare rapidă și curată." }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 text-center bg-background md:bg-transparent p-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(190,154,90,0.2)]">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 border-t border-white/5 bg-[#1a1a1a]">
        <div className="container px-4 mx-auto text-center">
          <p className="text-muted-foreground mb-8 text-sm uppercase tracking-widest font-semibold">Parteneri de Încredere</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Partner Logos (Text placeholders for simplicity, replace with SVGs ideally) */}
            <span className="text-2xl font-bold font-serif hover:text-primary transition-colors cursor-default">EGGER</span>
            <span className="text-2xl font-bold font-serif hover:text-primary transition-colors cursor-default">BLUM</span>
            <span className="text-2xl font-bold font-serif hover:text-primary transition-colors cursor-default">HETTICH</span>
            <span className="text-2xl font-bold font-serif hover:text-primary transition-colors cursor-default">HAFELE</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Pregătit să începi proiectul?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Programează o consultanță gratuită și hai să discutăm despre mobilierul visurilor tale.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 rounded-full font-bold shadow-xl">
              Contactează-ne
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
