import { Link } from "wouter";
import { ShieldCheck, Clock, CheckCircle, Ruler, PenTool, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";

const steps = [
  { 
    icon: <Ruler className="w-6 h-6" />,
    title: "Consultanță și Măsurători", 
    desc: "Ne întâlnim pentru a înțelege nevoile dumneavoastră. Facem măsurători precise cu laser și discutăm bugetul și preferințele." 
  },
  { 
    icon: <PenTool className="w-6 h-6" />,
    title: "Proiectare 3D și Ofertare", 
    desc: "Primești randări fotorealiste care îți permit să vezi mobilierul înainte de producție, plus o ofertă detaliată și transparentă." 
  },
  { 
    icon: <Factory className="w-6 h-6" />,
    title: "Execuție în Fabrică", 
    desc: "Mobilierul intră în producție pe cele trei utilaje CNC din atelierul nostru din București. Control riguros la fiecare etapă." 
  },
  { 
    icon: <Truck className="w-6 h-6" />,
    title: "Transport și Montaj", 
    desc: "Echipa noastră de montatori profesioniști asigură instalarea. La final, curățăm complet spațiul de lucru." 
  },
];

const warranties = [
  {
    icon: <ShieldCheck className="w-14 h-14" />,
    title: "Garanție 24 Luni",
    desc: "Pentru orice defect de fabricație sau montaj. Intervenim rapid pentru remedieri, fără costuri suplimentare."
  },
  {
    icon: <Clock className="w-14 h-14" />,
    title: "Durată de Viață Extinsă",
    desc: "Mobilierul nostru este proiectat să reziste peste 15 ani în condiții normale de utilizare."
  },
  {
    icon: <CheckCircle className="w-14 h-14" />,
    title: "Feronerie Premium",
    desc: "Garanție pe viață oferită de producătorii Blum și Hettich pentru balamale și glisiere."
  }
];

export default function ProcesGarantii() {
  return (
    <div className="min-h-screen bg-[#1F1F1F] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
              Proces & <span className="text-[#BE9A5A]">Garanții</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transparență la fiecare pas. De la prima discuție până la montajul final, știi exact ce se întâmplă cu proiectul tău.
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto mb-24">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#BE9A5A] to-transparent" />
            
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <FadeInSection key={idx} delay={idx * 0.15}>
                  <div className="relative pl-16">
                    <div className="absolute left-3.5 w-5 h-5 rounded-full bg-[#BE9A5A] flex items-center justify-center text-black text-xs font-bold">
                      {idx + 1}
                    </div>
                    
                    <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-8 hover:border-[#BE9A5A]/30 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#BE9A5A]/10 rounded-xl flex items-center justify-center text-[#BE9A5A]">
                          {step.icon}
                        </div>
                        <h3 className="font-serif text-xl text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>

        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-white mb-4">Angajamentele Noastre</h2>
            <p className="text-gray-400">Calitate garantată, fără surprize neplăcute.</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {warranties.map((item, idx) => (
            <FadeInSection key={idx} delay={idx * 0.1}>
              <div className="bg-[#2A2A2A] border border-[#3A3A3A] p-8 rounded-2xl text-center hover:border-[#BE9A5A]/30 transition-colors">
                <div className="text-[#BE9A5A] mx-auto mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl text-white mb-6">Ce acoperă garanția?</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-400">
                <div>
                  <h3 className="text-white font-medium mb-3">Materiale</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#BE9A5A] mt-1 shrink-0" />
                      Defecte de fabricație ale PAL/MDF
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#BE9A5A] mt-1 shrink-0" />
                      Desprindere cant sau furnir
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#BE9A5A] mt-1 shrink-0" />
                      Defecte ale finisajului vopsit
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-3">Manoperă</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#BE9A5A] mt-1 shrink-0" />
                      Probleme apărute din asamblare
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#BE9A5A] mt-1 shrink-0" />
                      Reglaje balamale și glisiere
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#BE9A5A] mt-1 shrink-0" />
                      Ajustări post-montaj necesare
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Pregătit să începem?</p>
            <Link href="/cerere-oferta">
              <Button className="bg-[#BE9A5A] hover:bg-[#D4AF6A] text-black px-10" data-testid="button-cta-quote">
                Cere ofertă gratuită
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
