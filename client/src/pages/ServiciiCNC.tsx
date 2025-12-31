import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cpu, Layers, Grid, Frame } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const services = [
  { 
    icon: <Cpu className="w-8 h-8" />, 
    title: "Frezări CNC de Precizie", 
    desc: "Decupaje complexe, îmbinări pe muchie, perforări și gravuri cu toleranțe sub 0.1mm. Ideal pentru mobilier tehnic și decorativ." 
  },
  { 
    icon: <Layers className="w-8 h-8" />, 
    title: "Riflaje / Fluted Panels", 
    desc: "Panouri MDF cu riflaje verticale sau orizontale pentru fronturi de mobilier, pereți accent și elemente de design interior." 
  },
  { 
    icon: <Frame className="w-8 h-8" />, 
    title: "Fronturi Bucătărie", 
    desc: "Fronturi MDF frezate sau riflate, pregătite pentru vopsire sau furniruite. Compatibile cu orice sistem de bucătărie." 
  },
  { 
    icon: <Grid className="w-8 h-8" />, 
    title: "Panouri Decorative & Branding", 
    desc: "Logo-uri 3D, plăci signalectice, elemente decorative pentru recepții, hoteluri și spații comerciale." 
  }
];

export default function ServiciiCNC() {
  return (
    <div className="min-h-screen bg-[#1F1F1F] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Servicii <span className="text-[#BE9A5A]">CNC</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Precizie milimetrică pentru proiecte complexe. Trei mașini CNC industriale la dispoziția partenerilor noștri.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((item, idx) => (
            <FadeInSection key={idx} delay={idx * 0.1}>
              <div className="bg-[#2A2A2A] border border-[#3A3A3A] p-8 rounded-2xl hover:border-[#BE9A5A]/30 transition-colors group">
                <div className="w-14 h-14 bg-[#BE9A5A]/10 rounded-xl flex items-center justify-center text-[#BE9A5A] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl text-white mb-6">Tehnologie de Vârf</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Utilizăm trei utilaje CNC industriale care asigură capacitate mare de producție și calitate constantă. 
                  Software-ul nostru de optimizare reduce pierderile de material, oferindu-vă un preț competitiv.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-[#BE9A5A] rounded-full"/>
                    Toleranțe sub 0.1mm pentru proiecte tehnice
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-[#BE9A5A] rounded-full"/>
                    Capacitate de procesare PAL, MDF, placaj, lemn masiv
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-[#BE9A5A] rounded-full"/>
                    Frezare 2D, 2.5D și 3D pentru forme complexe
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden h-[350px]">
                <img 
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=1200" 
                  alt="Utilaj CNC în acțiune" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-8 md:p-10 mb-16">
            <h2 className="font-serif text-2xl text-white mb-6">Ce fișiere poți trimite?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["PDF", "DXF", "DWG", "SVG"].map((format) => (
                <div key={format} className="bg-[#1F1F1F] rounded-xl p-4 text-center">
                  <span className="text-[#BE9A5A] font-mono text-lg font-bold">.{format.toLowerCase()}</span>
                  <p className="text-gray-500 text-sm mt-1">{format}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Acceptăm și poze de inspirație sau schițe de mână. Echipa noastră vă poate ajuta cu proiectarea tehnică.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center">
            <h2 className="font-serif text-2xl text-white mb-4">Aveți un proiect CNC?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Trimiteți-ne fișierele sau o descriere a proiectului și vă vom oferi o estimare de preț în 24 de ore.
            </p>
            <Link href="/cerere-oferta?tip=cnc">
              <Button 
                className="bg-[#BE9A5A] hover:bg-[#D4AF6A] text-black px-10 py-6 text-lg"
                data-testid="button-cta-cnc"
              >
                Cere ofertă CNC
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
