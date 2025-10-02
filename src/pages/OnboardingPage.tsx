import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { ChevronRight } from 'lucide-react';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { updateData } = useOnboarding();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    budget: '',
    country: '',
    gameType: '',
  });

  const handleSelect = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      updateData({ ...answers, completed: true });
      navigate('/');
    }
  };

  const isStepComplete = () => {
    if (step === 1) return answers.budget !== '';
    if (step === 2) return answers.country !== '';
    if (step === 3) return answers.gameType !== '';
    return false;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <Card className="w-full max-w-2xl p-8 md:p-12">
        <div className="mb-8">
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  i <= step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          <h1 className="text-3xl font-bold mb-2">Vamos definir o seu espaço</h1>
          <p className="text-muted-foreground">
            Passo {step} de 3
          </p>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Com quanto você inicia a jogar?</h2>
            <div className="grid gap-3">
              {['50 a 100 MT', '200 a 500 MT', '1000 a 5000 MT'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('budget', option)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:border-primary ${
                    answers.budget === option
                      ? 'border-primary bg-primary/5'
                      : 'border-border'
                  }`}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Em que país você está?</h2>
            <div className="grid gap-3">
              {['Angola', 'Moçambique'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('country', option)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:border-primary ${
                    answers.country === option
                      ? 'border-primary bg-primary/5'
                      : 'border-border'
                  }`}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Que jogos você gosta?</h2>
            <div className="grid gap-3">
              {['Jogos Crash Aviator', 'Jogos Desportivos'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('gameType', option)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:border-primary ${
                    answers.gameType === option
                      ? 'border-primary bg-primary/5'
                      : 'border-border'
                  }`}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={handleNext}
          disabled={!isStepComplete()}
          size="lg"
          className="w-full mt-8"
        >
          {step === 3 ? 'Finalizar' : 'Continuar'}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </Card>
    </div>
  );
}
