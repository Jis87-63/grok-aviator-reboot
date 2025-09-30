import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserPlus, CreditCard, Zap } from "lucide-react";

export const HowToUse = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "1",
      title: "Crie uma nova conta",
      description: "Clique no botão 'INICIAR AGORA' e preencha o formulário de registro no cassino. Aceite que é maior de idade e clique em registrar.",
      highlight: "Totalmente gratuito"
    },
    {
      icon: CreditCard,
      number: "2", 
      title: "Faça seu primeiro depósito",
      description: "Último passo: Faça o seu primeiro depósito no mínimo 50 MT usando o Mpesa ou Emola.",
      highlight: "Apenas 50 MT"
    },
    {
      icon: Zap,
      number: "3",
      title: "Comece a usar",
      description: "E é só isso! Depois clique no botão 'ABRIR FERRAMENTA AGORA' e comece a maximizar seus ganhos.",
      highlight: "Pronto para usar"
    }
  ];

  return (
    <section id="ferramenta" className="py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Como Usar Nossa{" "}
            <span className="text-gradient">Ferramenta</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Para iniciar com a nossa ferramenta é simples, não precisa de pagar nada, comprar nada.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <h3 className="mb-12 text-xl font-semibold text-center text-muted-foreground">
            Tudo que é necessário é:
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative p-6 border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h4 className="mb-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="inline-flex items-center rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                    ✓ {step.highlight}
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Iniciar Agora
            </Button>
            <Button variant="outline" size="xl">
              Abrir Ferramenta Agora
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">*</span> Ferramenta 100% gratuita e licenciada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};