import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lightbox from "@/components/Lightbox";
import FadeInSection from "@/components/FadeInSection";
import type { PortfolioProject } from "@shared/schema";

const stepColors: Record<string, string> = {
  "Proiectare": "border-blue-500",
  "Randare": "border-purple-500",
  "Producție": "border-orange-500",
  "Montaj": "border-green-500",
};

export default function Proiect() {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { data: project, isLoading, error } = useQuery<PortfolioProject>({
    queryKey: ['/api/portfolio', id],
    enabled: !!id,
  });

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("ro-RO", {
      year: "numeric",
      month: "long",
    });
  };

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1F1F1F] pt-24 pb-16 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#BE9A5A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-[#1F1F1F] pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl text-white mb-4">Proiect negăsit</h1>
          <Link href="/portofoliu">
            <Button className="bg-[#BE9A5A] hover:bg-[#D4AF6A] text-black">
              Înapoi la portofoliu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const allGalleryImages = [
    ...project.steps.flatMap(s => s.media),
    ...project.gallery,
  ];

  return (
    <div className="min-h-screen bg-[#1F1F1F] pt-20">
      <div 
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.cover})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link href="/portofoliu">
              <Button 
                variant="ghost" 
                className="text-white/70 hover:text-white mb-6"
                data-testid="button-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi la portofoliu
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-[#BE9A5A]/20 text-[#BE9A5A] text-sm rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-white mb-4" data-testid="text-project-title">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-400">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(project.date)}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <FadeInSection>
          <p className="text-gray-300 text-lg max-w-3xl mb-16" data-testid="text-project-summary">
            {project.summary}
          </p>
        </FadeInSection>

        {project.videoUrl && (
          <FadeInSection>
            <div className="mb-16">
              <h2 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                <Play className="w-6 h-6 text-[#BE9A5A]" />
                Video Proiect
              </h2>
              <div className="aspect-video rounded-2xl overflow-hidden bg-[#2A2A2A]">
                {getYouTubeId(project.videoUrl) ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(project.videoUrl)}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-testid="video-embed"
                  />
                ) : (
                  <video
                    src={project.videoUrl}
                    controls
                    className="w-full h-full object-cover"
                    data-testid="video-local"
                  />
                )}
              </div>
            </div>
          </FadeInSection>
        )}

        <FadeInSection>
          <h2 className="font-serif text-2xl text-white mb-8 flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#BE9A5A]" />
            Procesul proiectului
          </h2>
          
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#BE9A5A] to-[#3A3A3A]" />
            
            <div className="space-y-12">
              {project.steps.map((step, idx) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative pl-16"
                >
                  <div className={`absolute left-3.5 w-5 h-5 rounded-full bg-[#1F1F1F] border-2 ${stepColors[step.label] || "border-[#BE9A5A]"}`} />
                  
                  <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl p-6">
                    <h3 className="font-serif text-xl text-white mb-4">{step.label}</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {step.media.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          onClick={() => openLightbox(step.media, imgIdx)}
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                          data-testid={`img-step-${idx}-${imgIdx}`}
                        >
                          <img
                            src={img}
                            alt={`${step.label} ${imgIdx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {project.gallery.length > 0 && (
          <FadeInSection>
            <div className="mt-16">
              <h2 className="font-serif text-2xl text-white mb-8">Galerie finală</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(project.gallery, idx)}
                    className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                    data-testid={`img-gallery-${idx}`}
                  >
                    <img
                      src={img}
                      alt={`Galerie ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        )}

        <FadeInSection>
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Vă place acest proiect? Contactați-ne pentru unul similar.</p>
            <Link href="/cerere-oferta">
              <Button 
                className="bg-[#BE9A5A] hover:bg-[#D4AF6A] text-black px-8"
                data-testid="button-request-quote"
              >
                Cere ofertă
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>

      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
