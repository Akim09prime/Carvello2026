import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Palette, Droplets, CheckCircle2, ArrowRight } from "lucide-react";

export default function Vopsitorie() {
  return (
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Vopsitorie MDF Premium
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferim servicii de vopsire profesională pentru MDF și lemn, folosind tehnologii de ultimă oră și materiale de cea mai înaltă calitate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Finisaj Mat", desc: "Aspect elegant, non-reflexiv, catifelat la atingere." },
            { title: "Finisaj Satinat", desc: "Echilibrul perfect între mat și lucios, ușor de întreținut." },
            { title: "Finisaj Lucios", desc: "Efect de oglindă spectaculos pentru spații moderne." }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5">
              <Droplets className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">Culori Nelimitate (RAL / NCS)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Putem reproduce orice nuanță din paletarele internaționale RAL și NCS. Folosim vopsele poliuretanice și acrilice premium care garantează rezistența culorii în timp.
            </p>
            <ul className="space-y-3">
              {["Pregătire riguroasă a suprafeței", "Grunduire în straturi succesive", "Șlefuire intermediară fină", "Vopsire în mediu controlat"].map((step, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video shadow-2xl">
            <img src="https://images.unsplash.com/photo-1562254492-377a3ac576f4?auto=format&fit=crop&q=80" alt="Vopsitorie" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact?tip=vopsitorie">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold px-8">
              Cere ofertă vopsitorie
            </Button>
          </Link>
          <Link href="/portofoliu">
            <Button size="lg" variant="outline" className="rounded-full border-white/10 text-white px-8">
              Vezi portofoliu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
