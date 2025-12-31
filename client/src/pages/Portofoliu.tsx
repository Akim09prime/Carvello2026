import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { PortfolioProject } from "@shared/schema";

const categories = ["Toate", "Bucătărie", "Dressing", "Living", "Birou", "Comercial"];

export default function Portofoliu() {
  const [activeCategory, setActiveCategory] = useState("Toate");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: projects = [], isLoading } = useQuery<PortfolioProject[]>({
    queryKey: ['/api/portfolio'],
  });

  const filteredProjects = useMemo(() => {
    let filtered = [...projects];
    
    if (activeCategory !== "Toate") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query)
      );
    }
    
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [projects, activeCategory, searchQuery]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("ro-RO", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-brass uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Proiecte Finalizate
            </p>
            <h1 className="text-foreground mb-6">Portofoliu</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              O selecție de proiecte care definesc standardul nostru de calitate și atenția la detalii.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Caută după titlu sau locație..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-card border-white/10 text-foreground placeholder:text-muted-foreground focus:border-brass"
                  data-testid="input-search"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full ${
                    activeCategory === cat
                      ? "bg-brass text-background hover:bg-brass/90"
                      : "border-white/10 text-muted-foreground hover:text-foreground hover:border-brass/50"
                  }`}
                  data-testid={`button-filter-${cat.toLowerCase()}`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-brass border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Nu am găsit proiecte care să corespundă căutării.</p>
            </div>
          ) : (
            <div className="relative max-w-4xl mx-auto">
              <div className="timeline-line" />

              <div className="space-y-12">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`relative flex items-start gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-brass z-10 glow-brass" />

                    <div className="hidden md:block w-1/2" />

                    <div className="ml-12 md:ml-0 w-full md:w-1/2 glass-card overflow-hidden group">
                      <Link href={`/proiect/${project.id}`}>
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={project.cover}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <span className="absolute bottom-4 left-4 px-3 py-1 bg-brass/90 text-background text-sm font-medium rounded-full">
                            {project.category}
                          </span>
                        </div>

                        <div className="p-6">
                          <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-brass transition-colors">
                            {project.title}
                          </h3>
                          
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {project.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(project.date)}
                            </span>
                          </div>

                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {project.summary}
                          </p>

                          <span className="inline-flex items-center text-brass text-sm font-medium group-hover:gap-2 transition-all">
                            Vezi proiectul
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-muted-foreground mb-6">Aveți un proiect în minte?</p>
            <Link href="/cerere-oferta">
              <Button className="btn-primary px-8" data-testid="button-cta-quote">
                Cere ofertă gratuită
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
