import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowToUse } from "@/components/HowToUse";
import { Strategies } from "@/components/Strategies";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowToUse />
        <Strategies />
        <FAQ />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-surface/30 py-8">
        <div className="container px-4 md:px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Aviator Tool. Sistema licenciado e gratuito para uso em Moçambique.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
