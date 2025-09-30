import { Button } from "@/components/ui/button";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
            <Plane className="w-4 h-4" />
          </div>
          <span className="font-semibold text-lg">Aviator Tool</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
            Licenciado
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#ferramenta" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Ferramenta
          </a>
          <a href="#estrategias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Estratégias
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Abrir Ferramenta
          </Button>
          <Button variant="hero" size="sm">
            Iniciar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4">
          <nav className="flex flex-col gap-4">
            <a href="#ferramenta" className="text-sm font-medium text-muted-foreground">
              Ferramenta
            </a>
            <a href="#estrategias" className="text-sm font-medium text-muted-foreground">
              Estratégias
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground">
              FAQ
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm">
                Abrir Ferramenta
              </Button>
              <Button variant="hero" size="sm">
                Iniciar Agora
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};