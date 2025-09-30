import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Posso jogar Aviator de graça?",
      answer: "Sim, muitas plataformas oferecem modo demo gratuito para testar o jogo. Nossa ferramenta também é completamente gratuita para usar."
    },
    {
      question: "O jogo Aviator é legítimo?",
      answer: "Sim, o Aviator é um jogo licenciado e regulamentado. É importante jogar apenas em cassinos licenciados e usar ferramentas confiáveis como a nossa."
    },
    {
      question: "O jogo Aviator é uma fraude?",
      answer: "Não, o Aviator é um jogo legítimo quando jogado em plataformas licenciadas. Nossa ferramenta ajuda a maximizar suas chances de sucesso de forma ética."
    },
    {
      question: "Posso ganhar dinheiro a jogar Aviator?",
      answer: "Sim, é possível obter lucros consistentes usando estratégias adequadas e nossa ferramenta de análise. Sempre jogue com responsabilidade."
    },
    {
      question: "É possível adivinhar o resultado do Aviator?",
      answer: "Não é possível prever com 100% de certeza, mas nossa ferramenta analisa padrões históricos para sugerir os melhores momentos para apostar."
    },
    {
      question: "Qual é o depósito mínimo para jogar Aviator?",
      answer: "O depósito mínimo varia por plataforma, mas geralmente é de 50 MT usando Mpesa ou Emola em Moçambique."
    },
    {
      question: "Posso jogar Aviator no meu telemóvel?",
      answer: "Sim, o Aviator é otimizado para dispositivos móveis. Nossa ferramenta também funciona perfeitamente em smartphones e tablets."
    },
    {
      question: "Como funciona o sistema de multiplicadores?",
      answer: "O multiplicador cresce continuamente até 'crash'. O objetivo é retirar antes do crash para garantir o ganho baseado no multiplicador atual."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            FAQ - Aviator em{" "}
            <span className="text-gradient">Moçambique</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Respostas às perguntas mais frequentes sobre o jogo Aviator em Moçambique.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="p-6 pt-0 border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 p-8 border-primary/20 bg-primary/5 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">Ainda tem dúvidas?</h3>
          <p className="text-muted-foreground">
            Nossa equipe de suporte está disponível 24/7 para ajudá-lo com qualquer questão sobre o Aviator.
          </p>
        </Card>
      </div>
    </section>
  );
};