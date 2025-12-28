import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Servicii Premium</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acoperim toată gama de mobilier la comandă, de la rezidențial la comercial, cu aceeași atenție obsesivă la detalii.
          </p>
        </div>

        <div className="space-y-24">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 w-full aspect-video lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-white">{service.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{service.desc}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full px-6">
                      Solicită ofertă personalizată
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CNC Banner */}
        <div className="mt-32 rounded-3xl bg-gradient-to-r from-primary to-yellow-600 p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Ai nevoie de debitare sau frezare CNC?</h2>
            <p className="mb-8 opacity-90 text-lg">Oferim servicii de prelucrare CNC de precizie pentru alți producători sau pasionați DIY.</p>
            <Link href="/servicii-cnc">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold rounded-full border-0">
                Vezi Servicii CNC
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
