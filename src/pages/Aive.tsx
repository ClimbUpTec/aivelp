import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { ArrowDown, CheckCircle, Star, Users, TrendingUp, Clock, MessageSquare, Bot, Zap, Shield, Target, Sparkles, AlertCircle, TrendingDown,
         Phone, UserCheck, UserPlus, ArrowUpRight, Folder, FolderPlus, MoveHorizontal, 
         Bell, RefreshCw, Calendar, Link, FileText, Settings, Wrench, X } from "lucide-react";

// Componente para a ampulheta da jornada
const JourneyHourglass = () => (
  <div className="relative w-full max-w-md mx-auto">
    <div className="text-center space-y-6">
      {/* Topo da ampulheta */}
      <div className="relative">
        <div className="bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-lg p-6 border-2 border-primary/30">
          <div className="text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Atração do Lead</p>
            <p className="text-xs text-muted-foreground">Campanhas, redes sociais, Google</p>
          </div>
        </div>
        <ArrowDown className="w-6 h-6 mx-auto mt-4 text-primary animate-bounce" />
      </div>

      {/* Meio - onde Aive atua */}
      <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-elegant">
        <Bot className="w-10 h-10 mx-auto mb-3" />
        <h3 className="font-bold text-lg mb-2">AIVE ATENDE EM TEMPO REAL</h3>
        <ul className="text-sm space-y-1">
          <li>• Qualifica o lead</li>
          <li>• Identifica o perfil</li>
          <li>• Direciona o fluxo</li>
        </ul>
        <div className="mt-4 pt-4 border-t border-primary-foreground/20">
          <p className="text-sm font-medium">⏳ Jornada da Conversa / CRM</p>
          <ul className="text-xs mt-2 space-y-1">
            <li>• Criação de card automático</li>
            <li>• Follow-up e lembretes</li>
            <li>• Reativação de leads parados</li>
          </ul>
        </div>
        <div className="mt-4 pt-4 border-t border-primary-foreground/20">
          <p className="text-sm font-medium">AIVE GERA CONVERSÃO</p>
          <ul className="text-xs mt-2 space-y-1">
            <li>• Agendamento</li>
            <li>• Link de compra</li>
            <li>• Geração de orçamento</li>
          </ul>
        </div>
      </div>

      {/* Base da ampulheta */}
      <div className="relative">
        <ArrowDown className="w-6 h-6 mx-auto mb-4 text-primary animate-bounce" />
        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg p-6 border-2 border-secondary/30">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-secondary" />
            <p className="text-sm font-medium">🔁 Pós-venda e Retorno</p>
            <p className="text-xs text-muted-foreground">Campanhas segmentadas com Climb Up</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Componente da apresentação da Aive
const AivePresentation = () => {
  const features = [
    { name: "Atende 24/7", icon: <Phone className="w-8 h-8" /> },
    { name: "Múltiplos atendimentos em simultâneo", icon: <Users className="w-8 h-8" /> },
    { name: "Qualificação de lead", icon: <UserCheck className="w-8 h-8" /> },
    { name: "Cadastro do cliente", icon: <UserPlus className="w-8 h-8" /> },
    { name: "Direcionamento para equipes", icon: <ArrowUpRight className="w-8 h-8" /> },
    { name: "Criação de cards no CRM", icon: <FolderPlus className="w-8 h-8" /> },
    { name: "Movimentação de cards no CRM", icon: <MoveHorizontal className="w-8 h-8" /> },
    { name: "Follow-up e lembretes", icon: <Bell className="w-8 h-8" /> },
    { name: "Reativação de leads parados", icon: <RefreshCw className="w-8 h-8" /> },
    { name: "Agendamentos automáticos", icon: <Calendar className="w-8 h-8" /> },
    { name: "Links de compra", icon: <Link className="w-8 h-8" /> },
    { name: "Geração de orçamentos", icon: <FileText className="w-8 h-8" /> },
    { name: "Campanhas segmentadas de remarketing", icon: <Target className="w-8 h-8" /> },
    { name: "Personalizada para cada negócio", icon: <Settings className="w-8 h-8" /> },
    { name: "Adaptações constantes", icon: <Wrench className="w-8 h-8" /> }
  ];

  return (
    <div className="p-8">
      <div className="text-center max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Conheça AIVE, a IA da Climb Up que escala suas vendas 24/7
        </h3>
        <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
          Você decide onde a Aive atua e quando ela passa o bastão pro seu time humano. Ela complementa. Ou lidera. Você decide.
        </p>
        
        {/* Carrossel rotativo das funcionalidades */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="h-full hover:scale-105 transition-transform duration-200 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-background to-primary/5">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full text-center space-y-3">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                    <p className="text-sm font-medium text-foreground leading-tight">
                      {feature.name}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

// Componente de comparação Antes vs Depois
const BeforeAfterComparison = () => (
  <div className="grid md:grid-cols-2 gap-8">
    {/* Antes */}
    <Card className="border-destructive/20">
      <CardHeader className="bg-destructive/5">
        <h3 className="text-xl font-bold text-center text-destructive">Antes da Aive</h3>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {[
          "Vendedor sobrecarregado com atendimentos",
          "Leads esquecidos ou mal qualificados", 
          "CRM desatualizado",
          "Sem follow-up ou perda de timing",
          "Baixo aproveitamento da base",
          "Vendas manuais e limitadas ao horário comercial"
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0" />
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </CardContent>
    </Card>

    {/* Depois */}
    <Card className="border-primary/20 shadow-elegant">
      <CardHeader className="bg-primary/5">
        <h3 className="text-xl font-bold text-center text-primary">Depois da Aive</h3>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {[
          "Aive atende todos os leads em tempo real",
          "Aive qualifica e prioriza leads automaticamente",
          "Aive preenche cards e atualiza etapas sozinha", 
          "Aive faz o follow-up na hora certa, sempre",
          "Aive ativa clientes antigos com campanhas automáticas",
          "Aive vende por você 24h por dia, 7 dias por semana"
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm font-medium">{item}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

// Componente das funcionalidades da Climb Up
const ClimbUpFeatures = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Central de atendimento",
        description: "Múltiplos canais → Aive → Equipes"
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "CRM inteligente", 
        description: "Para Aive registrar e acompanhar negociações"
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Campanhas em massa no WhatsApp",
        description: "Aive ativa com inteligência"
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Atendimento multicanal centralizado",
        description: "Para não perder nenhum lead"
      },
      {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Distribuição automática de conversas",
        description: "Para o time humano complementar a IA"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Relatórios em tempo real",
        description: "Com insights gerados pela Aive"
      }
    ].map((feature, index) => (
      <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

// Componente dos casos por nicho
const NicheCases = () => {
  const cases = [
    {
      icon: "🍽️",
      title: "Restaurantes / Pizzarias",
      before: "Muitos pedidos por WhatsApp, mas leads demoravam a ser atendidos ou não recebiam retorno.",
      after: "Atende o cliente assim que ele chama, envia o cardápio, sugere promoções do dia e envia o link do pedido ou carrinho pronto — tudo de forma natural e personalizada.",
      conversion: "Link direto de pedido, cupom ou checkout via delivery próprio ou iFood."
    },
    {
      icon: "🚛", 
      title: "Distribuidoras",
      before: "O vendedor precisava atender cada cliente individualmente, calcular frete, confirmar estoque e fazer follow-up manual.",
      after: "Recebe o pedido, valida o CNPJ, confirma disponibilidade de produtos, gera o orçamento automático, envia para aprovação e já agenda o follow-up de fechamento.",
      conversion: "Geração de pedido formal ou envio de orçamento automatizado via WhatsApp."
    },
    {
      icon: "🧑‍⚕️",
      title: "Clínicas Estéticas e Médicas", 
      before: "Demora no atendimento, agendamentos perdidos e falta de follow-up com clientes que sumiam.",
      after: "Responde prontamente, oferece os serviços certos com base no interesse do lead, envia o link de agendamento online, lembra do horário e até pergunta se deseja remarcar em caso de falta.",
      conversion: "Link para agendamento, confirmação automática e lembrete."
    },
    {
      icon: "📦",
      title: "E-commerce",
      before: "Leads entravam no WhatsApp com dúvidas sobre produto, frete ou pedido e sumiam sem resposta.",
      after: "Responde dúvidas comuns automaticamente, coleta interesse, envia links diretos de produto e faz remarketing com quem não finalizou a compra.",
      conversion: "Checkout direto, carrinho recuperado ou cupom exclusivo no WhatsApp."
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {cases.map((caseItem, index) => (
        <Card key={index} className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{caseItem.icon}</span>
              <h3 className="text-xl font-bold">{caseItem.title}</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Badge variant="destructive" className="mb-2">Antes</Badge>
              <p className="text-sm text-muted-foreground">{caseItem.before}</p>
            </div>
            <div>
              <Badge className="mb-2">Com Aive</Badge>
              <p className="text-sm">{caseItem.after}</p>
            </div>
            <div className="bg-primary/5 p-3 rounded-lg">
              <Badge variant="outline" className="mb-2 border-primary text-primary">🔁 Conversão</Badge>
              <p className="text-sm font-medium">{caseItem.conversion}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Componente principal da página
const Aive = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Chamada Impactante (Herói) */}
      <section 
        className="py-20 px-4 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/53fcc771-6659-4fc3-9368-25accfdd26a4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Venda mais com a AIVE. A IA da Climb Up que escala suas vendas 24/7.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Atende. Qualifica. Preenche o CRM. Faz follow-up. Agenda. Vende.
            Ou, se preferir, passa pro seu time. Tudo 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Teste agora a Aive
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              Quero escalar com Aive
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Está enfrentando isso? */}
      <section 
        className="py-16 px-4 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/2f44a1ee-3680-412b-8561-da78cea652a2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sua empresa está passando por isso?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Enfrentando desafios para gerenciar leads e buscando uma solução eficiente para escalar vendas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            <Card className="p-6 text-center border-primary/30 bg-primary/20 backdrop-blur-sm">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-white" />
              </div>
              <p className="text-base font-medium text-white">
                Equipe sobrecarregada
              </p>
            </Card>

            <Card className="p-6 text-center border-primary/30 bg-primary/20 backdrop-blur-sm">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-white" />
              </div>
              <p className="text-base font-medium text-white">
                Leads aguardam horas ou dias por atendimento
              </p>
            </Card>

            <Card className="p-6 text-center border-primary/30 bg-primary/20 backdrop-blur-sm">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-white" />
              </div>
              <p className="text-base font-medium text-white">
                Equipe não preenche o CRM
              </p>
            </Card>
            
            <Card className="p-6 text-center border-primary/30 bg-primary/20 backdrop-blur-sm">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-white" />
              </div>
              <p className="text-base font-medium text-white">
                Falta tempo para o que realmente importa
              </p>
            </Card>
            
            <Card className="p-6 text-center border-primary/30 bg-primary/20 backdrop-blur-sm">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-white" />
              </div>
              <p className="text-base font-medium text-white">
                Impossível escalar com a estrutura atual
              </p>
            </Card>
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Resolver com AIVE
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Apresentação da Aive */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <AivePresentation />
        </div>
      </section>

      {/* 4. "Mas eu não quero parecer um robô..." */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ❓ "Mas eu não quero parecer um robô..."
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Tom de voz adaptável",
                description: "Aive tem tom de voz adaptável, humanizado e alinhado com a linguagem do seu negócio."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Fluxos personalizados",
                description: "Cada fluxo é escrito à mão, com contexto real do seu atendimento, como se fosse um membro da equipe."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Experiência natural",
                description: "Seus clientes vão se sentir bem atendidos — sem perceber que é IA."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Porque a AIVE é a melhor IA do mercado? */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🧠 Porque a AIVE é a melhor IA do mercado?
            </h2>
            <p className="text-xl text-primary font-semibold mb-6">
              Enquanto outros oferecem uma IA genérica, a Climb Up entrega um ecossistema inteligente 
              com múltiplas IAs integradas E VOCÊ PODE ESCOLHER em qual etapa cada IA atua e quando 
              ela passa o bastão para seu time humano.
            </p>
            <p className="text-lg text-muted-foreground">
              Cada parte da sua operação tem um perfil, uma linguagem e uma etapa de negociação diferente. 
              A Climb Up entende isso — e por isso, a Aive pode ser dividida por áreas, fluxos e comportamentos.
            </p>
          </div>

          {/* Exemplo prático Imobiliária */}
          <Card className="mb-8">
            <CardHeader>
              <h3 className="text-2xl font-bold text-center">🏢 Exemplo: Imobiliária com múltiplas Aives</h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "IA Recepção",
                    subtitle: "(Aive Recepção)",
                    description: "Atende leads gerais, identifica a intenção e direciona para a IA ideal. Ex: \"Quero alugar um imóvel\" → redireciona para IA Aluguel."
                  },
                  {
                    title: "IA Aluguel", 
                    description: "Linguagem mais objetiva, envia opções disponíveis, faz perguntas sobre perfil do inquilino e agenda visita."
                  },
                  {
                    title: "IA Vendas",
                    description: "Tom mais consultivo e envolvente, envia propostas, simula financiamento, responde dúvidas específicas sobre compra."
                  },
                  {
                    title: "IA Financeiro",
                    description: "Responde boletos, segunda via, inadimplência, negociações — com segurança e clareza."
                  }
                ].map((ia, index) => (
                  <Card key={index} className="border-primary/20">
                    <CardHeader className="pb-3">
                      <h4 className="font-bold text-primary">{ia.title}</h4>
                      {ia.subtitle && <p className="text-sm text-muted-foreground">{ia.subtitle}</p>}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{ia.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <p className="text-center font-medium">
                  🔁 Elas se comunicam entre si, entendem o contexto e transferem a conversa com inteligência e fluidez, 
                  sem que o cliente se perca no meio do caminho.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefícios da abordagem */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Mais assertividade: cada IA entende profundamente o tipo de atendimento que vai prestar.",
              "Tom de voz adequado para cada setor: evita parecer genérico ou robótico.",
              "Menos erros e ruídos: evita que a IA \"viaje\" em temas que não domina.",
              "Escalabilidade real: você pode expandir para novos setores criando novas Aives especializadas.",
              "Experiência premium para o cliente: fluidez, clareza e agilidade em qualquer etapa da jornada."
            ].map((benefit, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-4">Frases de impacto:</h3>
            <blockquote className="text-lg font-medium mb-4">
              "A Aive da Climb Up não é uma assistente genérica, é uma equipe de inteligências treinadas para cada etapa da jornada do seu cliente."
            </blockquote>
            <blockquote className="text-lg font-medium">
              "Enquanto outras IAs falam com todo mundo do mesmo jeito, a Aive adapta o tom, o objetivo e a estratégia conforme o momento da conversa."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 6. Aive + Climb Up = Escalada Real */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Aive + Climb Up = Escalada Real
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Aive atua como cérebro comercial. A Climb Up é o corpo que executa com estrutura e tecnologia, 
              a Aive opera, mas você (se quiser) gerencia tudo em tempo real e com relatórios completos.
            </p>
          </div>
          <ClimbUpFeatures />
        </div>
      </section>


      {/* 8. Antes vs. Depois da Aive */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Antes da Aive vs. Depois da Aive
          </h2>
          <BeforeAfterComparison />
        </div>
      </section>

      {/* 9. Aive em Ação: Exemplos por Nicho */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🧩 Aive em Ação: Casos reais por nicho
          </h2>
          <NicheCases />
        </div>
      </section>

      {/* 10. Resultados Reais com Aive */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            📈 Resultados reais com Aive
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Empresas que usam a Aive são mais eficientes no atendimento das conversas, 
            qualificam sem parecer um robô e vendem mais.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "+300%",
                title: "Atendimentos 24/7",
                description: "Aumento na quantidade de leads atendidos fora do horário comercial"
              },
              {
                metric: "+250%", 
                title: "Agendamentos",
                description: "Crescimento em conversões por disponibilidade total da IA"
              },
              {
                metric: "+180%",
                title: "Taxa de Conversão",
                description: "Melhoria no aproveitamento de leads através da qualificação inteligente"
              }
            ].map((result, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">{result.metric}</div>
                  <h3 className="text-xl font-semibold mb-3">{result.title}</h3>
                  <p className="text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Contratar mais pessoas ou ativar inteligência comercial? */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              💰 Contratar mais pessoas ou ativar inteligência comercial?
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja por que centenas de empresas estão escolhendo a Aive em vez de expandir o time manualmente.
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left"></th>
                    <th className="p-4 text-center">Vendedor humano (1 pessoa)</th>
                    <th className="p-4 text-center">Aive (IA de vendas 24/7)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Custo mensal médio", "R$ 2.500 a R$ 3.500", "R$ 399,90/mês"],
                    ["Custo anual médio", "+ de R$ 40.000 (com férias e encargos)", "R$ 4.798,80/ano"],
                    ["Custo de contratação", "Recrutamento, treinamento, estrutura física", "R$ 5.000 (setup único, com entrega pronta)"],
                    ["Disponibilidade", "44h semanais, com pausas, folgas e férias", "24h por dia, 7 dias por semana, sem pausas"],
                    ["Follow-up automático", "❌ Não (depende do humor ou rotina)", "✅ Sim (estratégico e no tempo certo)"],
                    ["Organização no CRM", "❌ Falhas comuns no preenchimento", "✅ Criação automática e anotações inteligentes"],
                    ["Capacidade de atender", "Limitado ao tempo e carga de trabalho", "Ilimitado — atende todos os leads em tempo real"],
                    ["Treinamento", "Mensal, contínuo e sujeito a turnover", "100% treinada por nossa equipe e validada por você"]
                  ].map(([feature, human, ai], index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                      <td className="p-4 font-medium">{feature}</td>
                      <td className="p-4 text-center text-destructive">{human}</td>
                      <td className="p-4 text-center text-primary font-medium">{ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-8 text-center p-6 bg-primary/5 rounded-lg">
            <p className="text-lg font-semibold text-primary">
              💡 Com o valor de 1 mês de salário, você ativa uma inteligência que vende o ano inteiro — 
              sem comissão, sem pausa e sem erro.
            </p>
          </div>
        </div>
      </section>

      {/* 12. Valores e Planos */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary-glow/5 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Com a Aive, sua empresa escala de verdade — e começa em até 30 dias.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Pare de perder leads e vendas por falta de atendimento. A Aive trabalha 24/7 
            para que você tenha mais tempo para focar no que realmente importa: crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="text-lg">
              Quero ativar a Aive agora
            </Button>
            <Button variant="outline" size="xl" className="text-lg">
              Falar com especialista
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            🚀 Setup único de R$ 5.000 + planos a partir de R$ 399,90/mês
          </p>
        </div>
      </section>

      {/* 13. Linha do Tempo de Onboarding (Como Funciona na Prática) */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ⏱️ Linha do tempo de Onboarding Aive
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            De 10 a 30 dias (ajustável conforme urgência e estrutura do cliente)
          </p>

          <div className="space-y-8">
            {[
              {
                phase: "Fase 1",
                title: "Diagnóstico",
                days: "Dia 1 a 5",
                items: [
                  "Reunião para entender estrutura, público e modelo de vendas",
                  "Levantamento de canais, integrações e tipos de atendimento"
                ]
              },
              {
                phase: "Fase 2", 
                title: "Criação de scripts",
                days: "Dia 5 a 15",
                items: [
                  "Desenvolvimento dos fluxos de conversa",
                  "Definição do tom de voz e regras de qualificação",
                  "Aprovação do cliente"
                ]
              },
              {
                phase: "Fase 3",
                title: "Testes e ajustes", 
                days: "Dia 15 a 25",
                items: [
                  "Aive entra em ambiente de testes reais",
                  "Ajustes finos com base no comportamento real do público",
                  "Validação final com o cliente"
                ]
              },
              {
                phase: "Fase 4",
                title: "Ativação",
                days: "Dia 25 a 30", 
                items: [
                  "IA publicada oficialmente",
                  "Relatórios automáticos ativados",
                  "Treinamento da equipe interna (se necessário)"
                ]
              }
            ].map((phase, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                <CardContent className="p-6 pl-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary">{phase.phase}</Badge>
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                    <Badge variant="outline">{phase.days}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQ / Perguntas Frequentes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ❓ Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Vai substituir meu time de vendas?",
                answer: "Não. A Aive não substitui seu time — ela potencializa. Ela cuida das tarefas repetitivas, atende 24h, faz pré-venda e entrega o lead mais quente para seu time fechar. Seu time vende mais com menos esforço, e você ganha produtividade sem precisar contratar mais pessoas."
              },
              {
                question: "Isso vai funcionar pro meu tipo de negócio?",
                answer: "Sim. A Aive é adaptável a qualquer tipo de jornada comercial. Temos casos de sucesso em segmentos muito diferentes como restaurantes, clínicas, e-commerce, advocacia e distribuidoras. Criamos fluxos e abordagens específicas para o seu modelo, seu público e seu objetivo de conversão."
              },
              {
                question: "E se o cliente perceber que está falando com uma IA?",
                answer: "Tudo depende da estratégia de tom de voz. Em alguns nichos, dizemos que é uma IA desde o início (com orgulho!). Em outros, a linguagem é tão natural que o cliente acha que está falando com alguém da equipe. Você escolhe como quer posicionar a Aive — e a gente entrega pronta nesse formato."
              },
              {
                question: "Mas eu não sei nada de automação ou tecnologia...",
                answer: "Você não precisa saber. Nossa equipe faz tudo: Criação dos fluxos, Treinamento da IA, Integração com seu atendimento e CRM, Testes, validações e suporte. Você só precisa nos contar como vende — o resto, a gente escala pra você."
              },
              {
                question: "Isso não vai virar bagunça no meu atendimento?",
                answer: "Muito pelo contrário. A Aive foi feita para organizar. Ela distribui atendimentos de forma automática, cria cards no CRM com todas as informações do cliente e mantém histórico completo. Com ela, sua operação fica mais clara, rápida e previsível."
              },
              {
                question: "E se meu lead preferir falar com uma pessoa?",
                answer: "Sem problema. A Aive sabe o momento certo de passar para um atendente humano. Ela identifica quando o lead precisa de suporte humano e transfere automaticamente, com todas as informações organizadas."
              },
              {
                question: "Quanto tempo leva pra começar?",
                answer: "Em até 30 dias, você já tem a Aive 100% ativa e validada. Em alguns casos, conseguimos colocar no ar em menos de 10 dias. A gente adapta a jornada de onboarding à sua realidade."
              },
              {
                question: "E se mudar meu cardápio, serviço ou campanha?",
                answer: "A Aive é flexível e fácil de atualizar. Sempre que precisar mudar algum texto, ação ou estratégia, você pode solicitar pelo suporte — ou editar direto pela plataforma. E a gente também pode acompanhar com você mensalmente, se desejar."
              },
              {
                question: "É seguro usar IA no atendimento?",
                answer: "Sim! A Aive não toma decisões sozinha sem sua validação. Ela segue scripts, respeita regras pré-definidas e atua com limites. Além disso, toda a operação é monitorada — com histórico, auditoria e segurança de dados."
              },
              {
                question: "É muito caro?",
                answer: "Muito pelo contrário. A Aive custa menos que contratar um vendedor — e trabalha 24h por dia, sem pausa, sem comissão e com performance previsível. Você ganha escala com investimento inteligente."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Aive;