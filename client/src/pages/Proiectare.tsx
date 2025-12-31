import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Ruler, Layout, Image as ImageIcon, Map, CheckCircle2 } from "lucide-react";

export default function Proiectare() {
  const services = [
    { 
      title: "Cote + liste de debitare", 
      desc: "Documentație tehnică completă pentru producție, optimizată pentru consum minim.",
      icon: <Layout className="h-8 w-8" />
    },
    { 
      title: "Proiect de găurire", 
      desc: "Detalii precise pentru feronerie și sisteme de asamblare (Blum, Hettich, etc).",
      icon: <CheckCircle2 className="h-8 w-8" />
    },
    { 
      title: "Randări fotorealiste", 
      desc: "Vizualizezi proiectul înainte de execuție cu detalii incredibile de textură și lumină.",
      icon: <ImageIcon className="h-8 w-8" />
    },
    { 
      title: "RLV / Releveu", 
      desc: "Măsurători laser de precizie la fața locului pentru a asigura potrivirea perfectă.",
      icon: <Map className="h-8 w-8" />
    }
  ];

  return (
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Proiectare mobilier & Randare
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformăm ideile tale în proiecte tehnice executabile. Precizia în proiectare elimină erorile de producție și montaj.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5 flex gap-6 items-start">
              <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1a1a1a] rounded-3xl p-12 text-center border border-white/5">
          <h2 className="text-3xl font-serif font-bold mb-6">Gata să punem ideile pe hârtie?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Oferim servicii de proiectare atât pentru clienți finali cât și pentru ateliere care doresc externalizarea părții tehnice.
          </p>
          <Link href="/cerere-oferta?tip=proiectare">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold px-12" data-testid="button-cta-proiectare">
              Cere ofertă proiectare
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
