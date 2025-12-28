import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cpu, Layers, Scissors, Ruler } from "lucide-react";

export default function ServiciiCNC() {
  return (
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Servicii <span className="text-primary">CNC</span> & Debitare
          </h1>
          <p className="text-lg text-muted-foreground">
            Precizie milimetrică pentru proiecte complexe. Punem la dispoziția partenerilor tehnologia noastră de ultimă generație.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Scissors />, title: "Debitare PAL/MDF", desc: "Tăiere precisă la dimensiuni exacte fără așchieri." },
            { icon: <Layers />, title: "Căntuire ABS", desc: "Aplicare cant cu adezivi performanți pentru rezistență la umezeală." },
            { icon: <Cpu />, title: "Frezare CNC", desc: "Forme complexe, gravuri și decupaje 3D." },
            { icon: <Ruler />, title: "Găurire Multiplă", desc: "Scheme de găurire pentru demontabili și balamale." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical details section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1a1a1a] rounded-3xl p-8 md:p-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Tehnologie de Vârf</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Utilizăm utilaje industriale de mare capacitate care asigură o calitate constantă, indiferent de volumul comenzii. Software-ul nostru de optimizare reduce pierderile de material, oferindu-vă un preț competitiv.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 bg-primary rounded-full"/> Optimizare automată a foilor de material
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 bg-primary rounded-full"/> Etichetare automată a pieselor
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 bg-primary rounded-full"/> Timpi scurți de execuție
              </li>
            </ul>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8">
                Trimite fișier de debitare
              </Button>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden h-[400px]">
            {/* CNC machine operating */}
            <img 
              src="https://pixabay.com/get/gd39b3361bb6877048b56fe5f4dfa03130e297ef13c5182c8edbcb015edd410541745444cce6c53bdfcbd5fdb6ef60bea01c1972b109bd2165bf98b6d47b1eec7_1280.jpg" 
              alt="Utilaj CNC" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
