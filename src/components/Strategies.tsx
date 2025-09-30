import { Card } from "@/components/ui/card";
import { TrendingDown, PiggyBank, Eye, Lightbulb } from "lucide-react";

export const Strategies = () => {
  const strategies = [
    {
      icon: TrendingDown,
      title: "Estratégia de Multiplicadores Baixos",
      description: "Foque em multiplicadores entre 1.2x e 2x para ganhos consistentes",
      tips: [
        "Retire sempre entre 1.2x - 1.5x",
        "Mantenha disciplina e não seja ganancioso", 
        "Esta estratégia tem 70% de taxa de sucesso"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: PiggyBank,
      title: "Gestão de Banca Inteligente", 
      description: "Nunca aposte mais de 5% do seu saldo total por rodada",
      tips: [
        "Divida seu saldo em 20 partes iguais",
        "Pare quando perder 3 apostas seguidas",
        "Aumente a aposta apenas após 5 vitórias"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Eye,
      title: "Padrão de Observação",
      description: "Observe os padrões antes de apostar grandes quantias",
      tips: [
        "Observe pelo menos 10 rodadas antes de apostar",
        "Identifique sequências de multiplicadores baixos", 
        "Entre após 3 crashes consecutivos abaixo de 2x"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="estrategias" className="py-20 lg:py-32 bg-surface/30">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            3 Melhores{" "}
            <span className="text-gradient">Estratégias</span>{" "}
            Aviator
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Estratégias comprovadas para maximizar seus ganhos e minimizar perdas no jogo Aviator
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {strategies.map((strategy, index) => {
            const IconComponent = strategy.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 group">
                <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg ${strategy.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${strategy.color}`} />
                </div>
                
                <h3 className="mb-3 text-lg font-semibold group-hover:text-primary transition-colors">
                  {strategy.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {strategy.description}
                </p>
                
                <ul className="space-y-2">
                  {strategy.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-medium">•</span>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 border-primary/20 bg-primary/5">
          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Dica Importante:</p>
              <p className="text-sm text-muted-foreground">
                Nossa ferramenta combina essas estratégias automaticamente para otimizar seus resultados!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};