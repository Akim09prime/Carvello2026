import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const servicesList = [
  {
    title: "Bucătării Custom",
    desc: "Inima casei tale merită cea mai mare atenție. Creăm bucătării ergonomice, durabile și spectaculoase, folosind feronerie Blum și fronturi MDF vopsit sau înfoliat.",
    details: ["Compartimentare inteligentă", "Insule de bucătărie", "Sisteme de iluminat integrate", "Organizare sertare"],
    img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Dressing & Dulapuri",
    desc: "Spații de depozitare optimizate care arată impecabil. De la dressing-uri walk-in la dulapuri încastrate, fiecare centimetru este valorificat.",
    details: ["Uși culisante sau batante", "Oglinzi integrate", "Sisteme de lift haine", "Sertare cu organizatoare"],
    img: "https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Mobilier Living & Dining",
    desc: "Piese centrale care definesc atmosfera casei. Biblioteci, comode TV, mese de dining și vitrine realizate la milimetru.",
    details: ["Design minimalist sau clasic", "Placări pereți", "Mese din lemn masiv", "Mascări calorifere"],
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Mobilier Comercial & Birouri",
    desc: "Soluții profesionale pentru spații de birouri, recepții, magazine sau restaurante. Durabilitate și design care impresionează clienții.",
    details: ["Recepții custom", "Birouri ergonomice", "Săli de conferință", "Spații de depozitare arhivă"],
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Servicii() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-brass uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Ce Oferim
            </p>
            <h1 className="text-foreground mb-6">Servicii Premium</h1>
            <p className="text-muted-foreground text-lg">
              Acoperim toată gama de mobilier la comandă, de la rezidențial la comercial, 
              cu aceeași atenție obsesivă la detalii.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-32">
            {servicesList.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="flex-1 w-full aspect-video lg:aspect-auto lg:h-[450px] rounded-2xl overflow-hidden glass-card">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl">{service.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{service.desc}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground/80">
                        <span className="w-2 h-2 rounded-full bg-brass shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Link href="/cerere-oferta">
                      <Button className="btn-outline group">
                        Solicită ofertă personalizată
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brass/5" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="container px-4 md:px-6 mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-4">Ai nevoie de servicii CNC?</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Oferim servicii de prelucrare CNC de precizie pentru alți producători sau pasionați DIY.
            </p>
            <Link href="/servicii-cnc">
              <Button size="lg" className="btn-primary text-lg px-10 py-7 rounded-full font-semibold group">
                Vezi Servicii CNC
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
