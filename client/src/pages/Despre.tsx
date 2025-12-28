import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Despre() {
  return (
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Povestea <span className="text-primary">Carvello</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Născuți din pasiune pentru lemn și design, am construit un atelier unde tradiția întâlnește tehnologia modernă.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square"
          >
             {/* Workshop craftsman working */}
            <img 
              src="https://pixabay.com/get/gb3ca7a62fb62de9da160b701d7eceea44ac8e2dbcda5561e40a844604882ce93d18afc2ee737cf89f1af4cdfbad21928fd784ca5f54b3dad5e936956452ed490_1280.jpg" 
              alt="Atelier Carvello" 
              className="object-cover w-full h-full"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold">Mai mult decât mobilier</h2>
            <p className="text-muted-foreground leading-relaxed">
              Carvello StudioCraft nu este doar o fabrică de mobilă. Este locul unde ideile tale prind contur. Cu o echipă de artizani experimentați și designeri creativi, transformăm materiale brute în piese de artă funcționale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Credem că fiecare casă are o personalitate unică. De aceea, nu credem în soluții "de-a gata". Fiecare proiect este unicat, adaptat milimetric spațiului și stilului tău de viață.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "Peste 10 ani de experiență",
                "Garanție extinsă",
                "Consultanță dedicată",
                "Finisaje premium"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Echipa Noastră</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alexandru Popa", role: "Fondator & Lead Designer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
              { name: "Maria Ionescu", role: "Arhitect de Interior", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
              { name: "Ioan Radu", role: "Șef Producție", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
            ].map((member, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl text-center hover-lift">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white/5">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
