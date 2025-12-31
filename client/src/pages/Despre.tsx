import { motion } from "framer-motion";
import { CheckCircle2, Factory, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: <Clock className="w-6 h-6" />, value: "10+", label: "Ani Experiență" },
  { icon: <Factory className="w-6 h-6" />, value: "4", label: "CNC Industriale" },
  { icon: <Users className="w-6 h-6" />, value: "500+", label: "Proiecte Finalizate" },
  { icon: <Award className="w-6 h-6" />, value: "5", label: "Ani Garanție" }
];

const team = [
  { name: "Alexandru Popa", role: "Fondator & Lead Designer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Maria Ionescu", role: "Arhitect de Interior", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
  { name: "Ioan Radu", role: "Șef Producție", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
];

export default function Despre() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-brass uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Despre Noi
            </p>
            <h1 className="text-foreground mb-6">
              Povestea <span className="text-brass italic">Carvello</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Născuți din pasiune pentru lemn și design, am construit un atelier 
              unde tradiția întâlnește tehnologia modernă.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y border-white/[0.06]">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-brass/10 border border-brass/20 rounded-xl flex items-center justify-center text-brass mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-serif text-brass mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square glass-card"
            >
              <img 
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=1200" 
                alt="Atelier Carvello" 
                className="object-cover w-full h-full"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-brass uppercase tracking-[0.15em] text-sm font-medium">
                Filosofia Noastră
              </p>
              <h2 className="text-3xl">Mai mult decât mobilier</h2>
              <p className="text-muted-foreground leading-relaxed">
                Carvello StudioCraft nu este doar o fabrică de mobilă. Este locul unde ideile 
                tale prind contur. Cu o echipă de artizani experimentați și designeri creativi, 
                transformăm materiale brute în piese de artă funcționale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Credem că fiecare casă are o personalitate unică. De aceea, nu credem în soluții 
                "de-a gata". Fiecare proiect este unicat, adaptat milimetric spațiului și 
                stilului tău de viață.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Materiale certificate Egger",
                  "Feronerie Blum & Hettich",
                  "Garanție 5 ani",
                  "Finisaje premium 2K"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brass h-5 w-5 shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-brass uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Echipa
            </p>
            <h2 className="text-3xl">Oamenii din Spatele Proiectelor</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center group"
              >
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 border-2 border-brass/20 group-hover:border-brass/40 transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-brass text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
