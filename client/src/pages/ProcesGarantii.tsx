import { ShieldCheck, Clock, CheckCircle } from "lucide-react";

export default function ProcesGarantii() {
  return (
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center">
          Proces & <span className="text-primary">Garanții</span>
        </h1>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="space-y-12">
            {[
              { title: "1. Consultanță și Măsurători", desc: "Ne întâlnim pentru a înțelege nevoile tale. Facem măsurători precise cu laser și discutăm bugetul." },
              { title: "2. Proiectare 3D și Ofertare", desc: "Primești randări fotorealiste și o ofertă detaliată transparentă." },
              { title: "3. Semnare Contract", desc: "Stabilim termenele de execuție și detaliile finale ale materialelor." },
              { title: "4. Execuție în Fabrică", desc: "Mobilierul intră în producție pe utilajele noastre CNC." },
              { title: "5. Transport și Montaj", desc: "Echipa noastră asigură montajul. La final, curățăm spațiul de lucru." },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 md:gap-12 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_rgba(190,154,90,0.4)]">
                    {i + 1}
                  </div>
                  {i !== 4 && <div className="w-0.5 h-full bg-white/10 group-hover:bg-primary/50 transition-colors mt-2" />}
                </div>
                <div className="pb-12 pt-2">
                  <h3 className="text-2xl font-bold font-serif mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-panel p-8 rounded-2xl text-center">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">Garanție 24 Luni</h3>
            <p className="text-muted-foreground">
              Pentru orice defect de fabricație sau montaj. Intervenim rapid pentru remedieri.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl text-center">
            <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">Durată de Viață</h3>
            <p className="text-muted-foreground">
              Mobilierul nostru este proiectat să reziste peste 15 ani în condiții normale de utilizare.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">Feronerie Premium</h3>
            <p className="text-muted-foreground">
              Garanție pe viață oferită de producătorii Blum și Hettich pentru balamale și glisiere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
