import { Button } from "@/components/ui/button";
import { Play, Shield, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Shield className="w-4 h-4" />
              100% Licenciado e Gratuito
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl animate-fade-up">
            Bom dia, seja{" "}
            <span className="text-gradient">bem-vindo!</span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-up">
            À nossa plataforma que disponibiliza aos seus visitantes a chance de{" "}
            <span className="font-semibold text-foreground">parar de perder dinheiro</span>{" "}
            no Aviator com nossa ferramenta licenciada.
          </p>

          <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Button variant="hero" size="xl" className="group">
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Iniciar Agora
            </Button>
            <Button variant="outline" size="xl">
              <Play className="w-5 h-5" />
              Abrir Ferramenta
            </Button>
          </div>

          {/* Video Section */}
          <div className="animate-fade-up">
            <p className="mb-6 text-sm font-medium text-muted-foreground">
              Assista um pouco esse vídeo abaixo:
            </p>
            
            <div className="relative mx-auto max-w-4xl">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 glass">
                <iframe
                  src="https://www.youtube.com/embed/ps_bsdlPBwE"
                  title="Aviator Tool - Como Funciona"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};