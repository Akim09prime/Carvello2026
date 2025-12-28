import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Placeholder projects
const projects = [
  { id: 1, title: "Penthouse Herăstrău", category: "Bucătărie", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Vila Pipera", category: "Living", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Apartament Aviației", category: "Dressing", img: "https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Birouri IT", category: "Comercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Residence One", category: "Bucătărie", img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Casa Corbeanca", category: "Living", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["Toate", "Bucătărie", "Living", "Dressing", "Comercial"];

export default function Portofoliu() {
  const [activeCategory, setActiveCategory] = useState("Toate");

  const filteredProjects = activeCategory === "Toate" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Portofoliu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            O selecție de proiecte care ne definesc standardul de calitate și atenția la detalii.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "border-white/10 text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-2xl font-serif font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                <span className="text-primary font-medium mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
