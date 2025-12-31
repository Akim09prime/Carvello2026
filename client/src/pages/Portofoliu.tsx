import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FadeInSection from "@/components/FadeInSection";
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
    <div className="min-h-screen bg-[#1F1F1F] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
              Portofoliu
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              O selecție de proiecte care definesc standardul nostru de calitate și atenția la detalii.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                type="text"
                placeholder="Caută după titlu sau locație..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-[#2A2A2A] border-[#3A3A3A] text-white placeholder:text-gray-500 focus:border-[#BE9A5A]"
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
                    ? "bg-[#BE9A5A] text-black hover:bg-[#D4AF6A]"
                    : "border-[#3A3A3A] text-gray-400 hover:text-white hover:border-[#BE9A5A]"
                }`}
                data-testid={`button-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </FadeInSection>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#BE9A5A] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Nu am găsit proiecte care să corespundă căutării.</p>
          </div>
        ) : (
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#BE9A5A] via-[#BE9A5A]/50 to-transparent" />

            <div className="space-y-12">
              {filteredProjects.map((project, idx) => (
                <FadeInSection key={project.id} delay={idx * 0.1}>
                  <div className={`relative flex items-start gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-1.5 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-[#1F1F1F] border-2 border-[#BE9A5A] z-10" />

                    <div className="hidden md:block w-1/2" />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="ml-12 md:ml-0 w-full md:w-1/2 bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl overflow-hidden group"
                      data-testid={`card-project-${project.id}`}
                    >
                      <Link href={`/proiect/${project.id}`}>
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={project.cover}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <span className="absolute bottom-4 left-4 px-3 py-1 bg-[#BE9A5A]/90 text-black text-sm font-medium rounded-full">
                            {project.category}
                          </span>
                        </div>

                        <div className="p-6">
                          <h3 className="font-serif text-xl text-white mb-2 group-hover:text-[#BE9A5A] transition-colors">
                            {project.title}
                          </h3>
                          
                          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {project.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(project.date)}
                            </span>
                          </div>

                          <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                            {project.summary}
                          </p>

                          <span className="inline-flex items-center text-[#BE9A5A] text-sm font-medium group-hover:gap-2 transition-all">
                            Vezi proiectul
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        )}

        <FadeInSection>
          <div className="text-center mt-20">
            <p className="text-gray-400 mb-6">Aveți un proiect în minte?</p>
            <Link href="/cerere-oferta">
              <Button className="bg-[#BE9A5A] hover:bg-[#D4AF6A] text-black px-8" data-testid="button-cta-quote">
                Cere ofertă gratuită
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
