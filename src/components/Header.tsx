import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">Aviator Tool</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("ferramenta")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Como Usar
            </button>
            <button 
              onClick={() => scrollToSection("estrategias")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Estratégias
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <Link to="/support">
              <Button variant="ghost" size="sm">Suporte</Button>
            </Link>
            <ThemeToggle />
            <a href="https://www.megagamelive.com/affiliates/?btag=2084979" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">
                Começar Agora
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button 
              onClick={() => scrollToSection("ferramenta")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Como Usar
            </button>
            <button 
              onClick={() => scrollToSection("estrategias")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Estratégias
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <Link to="/support" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full">Suporte</Button>
            </Link>
            <a href="https://www.megagamelive.com/affiliates/?btag=2084979" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm" className="w-full">
                Começar Agora
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};