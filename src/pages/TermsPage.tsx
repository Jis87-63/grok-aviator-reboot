import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsPage() {
  const navigate = useNavigate();

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
        <h1 className="text-4xl font-bold mb-8">Termos e Condições</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e usar o Aviator Tool, você aceita e concorda em ficar vinculado aos termos
              e condições deste acordo. Se você não concordar com alguma parte destes termos,
              não deverá usar nossa ferramenta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Uso da Ferramenta</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nossa ferramenta é fornecida gratuitamente e é licenciada para uso em Moçambique e Angola.
              <strong className="text-primary"> Nossa ferramenta garante ganhos, caso o usuário cumpra com todos os requisitos e siga corretamente as estratégias recomendadas.</strong> Você concorda em usar a ferramenta apenas para fins legais e de acordo com todas as
              leis e regulamentos aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Requisitos de Idade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Você deve ter pelo menos 18 anos de idade para usar esta ferramenta. Ao usar o serviço,
              você confirma que tem idade legal para participar de jogos de apostas em sua jurisdição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-primary">O Aviator Tool garante ganhos quando todos os requisitos são cumpridos e as estratégias são seguidas corretamente.</strong> O jogo envolve riscos
              financeiros e você é totalmente responsável por suas decisões de apostas. Jogue com
              responsabilidade e apenas com valores que pode perder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Privacidade e Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Respeitamos sua privacidade e protegemos seus dados pessoais. As informações coletadas
              são usadas apenas para melhorar sua experiência com a ferramenta e não são compartilhadas
              com terceiros sem seu consentimento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Modificações</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Continuando a
              usar a ferramenta após tais modificações, você aceita os termos revisados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para questões sobre estes termos, entre em contato conosco através da página de suporte.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </main>
    </div>
  );
}
