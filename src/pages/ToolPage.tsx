import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ToolPage() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with Timer */}
      <header className="border-b border-border bg-surface/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Tempo restante:</span>
            <div className={`text-2xl font-bold tabular-nums ${
              timeLeft < 60 ? 'text-destructive' : 'text-primary'
            }`}>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
      </header>

      {/* Alert Message */}
      {showAlert && timeLeft > 0 && (
        <div className="container px-4 py-4">
          <Alert className="bg-primary/10 border-primary/20">
            <AlertCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm">
              <strong>Importante:</strong> Registre-se e faça seu primeiro depósito antes que o tempo chegue a 0:00 para iniciar a ferramenta.
            </AlertDescription>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => setShowAlert(false)}
            >
              ✕
            </Button>
          </Alert>
        </div>
      )}

      {/* Iframe Container */}
      <div className="flex-1 container px-4 py-6">
        <div className="relative h-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-surface">
          <iframe
            src="https://www.megagamelive.com/affiliates/?btag=2084979"
            className="w-full h-full min-h-[600px]"
            title="Aviator Tool"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>

      {timeLeft === 0 && (
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-40">
          <div className="text-center space-y-4 p-8">
            <h2 className="text-3xl font-bold text-destructive">Tempo Esgotado!</h2>
            <p className="text-muted-foreground">
              Por favor, registre-se e faça seu primeiro depósito para continuar.
            </p>
            <Button onClick={() => navigate('/')} size="lg">
              Voltar ao Início
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
