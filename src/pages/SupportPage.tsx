import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Smile, Meh, Frown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function SupportPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const ratings = [
    { icon: Frown, label: 'Insatisfeito', value: 1, color: 'text-destructive' },
    { icon: Meh, label: 'Neutro', value: 2, color: 'text-warning' },
    { icon: Smile, label: 'Satisfeito', value: 3, color: 'text-success' },
  ];

  const handleRatingSubmit = () => {
    if (selectedRating) {
      toast({
        title: 'Obrigado pelo feedback!',
        description: 'Sua avaliação foi registrada com sucesso.',
      });
      setSelectedRating(null);
    }
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/258871009140', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      <main className="container px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Suporte</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* WhatsApp Contact */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Fale Conosco</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Entre em contato através do WhatsApp para suporte direto e rápido.
            </p>
            <Button onClick={handleWhatsAppContact} className="w-full" size="lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Abrir WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              +258 87 100 9140
            </p>
          </Card>

          {/* Rating */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Como está sua experiência?</h2>
            <p className="text-muted-foreground mb-6">
              Avalie sua satisfação com nossa ferramenta
            </p>
            
            <div className="flex justify-around mb-6">
              {ratings.map((rating) => {
                const Icon = rating.icon;
                return (
                  <button
                    key={rating.value}
                    onClick={() => setSelectedRating(rating.value)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                      selectedRating === rating.value
                        ? 'bg-primary/10 border-2 border-primary'
                        : 'hover:bg-muted border-2 border-transparent'
                    }`}
                  >
                    <Icon
                      className={`h-12 w-12 ${
                        selectedRating === rating.value ? rating.color : 'text-muted-foreground'
                      }`}
                    />
                    <span className="text-sm font-medium">{rating.label}</span>
                  </button>
                );
              })}
            </div>

            <Button
              onClick={handleRatingSubmit}
              disabled={selectedRating === null}
              className="w-full"
              size="lg"
            >
              Enviar Avaliação
            </Button>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Como posso começar a usar a ferramenta?</h3>
              <p className="text-muted-foreground text-sm">
                Clique em "Iniciar Agora", crie sua conta no cassino, faça um depósito mínimo de 50 MT
                e depois clique em "Abrir Ferramenta".
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">A ferramenta é gratuita?</h3>
              <p className="text-muted-foreground text-sm">
                Sim! Nossa ferramenta é 100% gratuita e licenciada para uso em Moçambique e Angola.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Qual o depósito mínimo necessário?</h3>
              <p className="text-muted-foreground text-sm">
                O depósito mínimo é de apenas 50 MT usando Mpesa ou Emola.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
