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
    { name: "Adaptações constantes", icon: <Wrench className="w-8 h-8" /> },
    { name: "E tem mais...", icon: <Sparkles className="w-8 h-8" /> }
  ];

  return (
    <div className="py-16 px-9">
      <div className="text-center max-w-5xl mx-auto">
         <div className="flex items-center justify-center gap-3 mb-8">
           <img src="/lovable-uploads/93fac938-d53c-4030-878a-71acd62dd653.png" alt="Climb Up Icon" className="h-10 w-10" />
           <h3 className="text-3xl md:text-4xl font-bold text-primary" style={{ transform: 'scale(1.1)' }}>
             Conheça AIVE, a IA da Climb Up que escala suas vendas 24/7
           </h3>
         </div>
        <p className="text-xl text-muted-foreground mb-20 max-w-4xl mx-auto" style={{ transform: 'scale(1.1)' }}>
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
            <X className="w-5 h-5 text-destructive flex-shrink-0" />
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
      },
      {
        icon: <Bot className="w-8 h-8" />,
        title: "Espie as conversas sem notificar o cliente",
        description: "E intervenha se necessário"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "Fila de atendimento gerenciada",
        description: "E organizada automaticamente"
      },
      {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Rastreamento dos Leads",
        description: "Facebook Ads, Google Ads, Click-to-WhatsApp"
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Gerenciamento de pagamentos",
        description: "PIX, boleto, cartão dentro da conversa"
      },
      {
        icon: <Settings className="w-8 h-8" />,
        title: "Integrações nativas",
        description: "Webhook, API e apps diversos"
      },
      {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Chat interno",
        description: "Para vendedores e setores"
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
      {/* Cabeçalho com logo da Climb Up */}
      <header className="py-4 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center">
            <img src="/lovable-uploads/8a13c650-dd25-48f3-b333-4cf156097463.png" alt="Climb Up" className="h-12" />
          </div>
        </div>
      </header>

      {/* 1. Chamada Impactante (Herói) */}
      <section 
        className="py-32 px-4 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/53fcc771-6659-4fc3-9368-25accfdd26a4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-500">
            Venda mais com a AIVE. A IA da Climb Up que escala suas vendas 24/7.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Atende. Qualifica. Preenche o CRM. Faz follow-up. Agenda. Vende.
            Ou, se preferir, passa pro seu time. Tudo 24/7.
          </p>
          <div className="flex justify-center">
            <Button variant="hero" size="xl">
              Quero escalar com Aive
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Está enfrentando isso? */}
      <section className="py-16 px-4 relative bg-gray-100">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Sua empresa está passando por isso?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enfrentando desafios para gerenciar leads e buscando uma solução eficiente para escalar vendas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-gray-800" />
              </div>
              <p className="text-base font-medium text-gray-800">
                Equipe sobrecarregada
              </p>
            </Card>

            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-gray-800" />
              </div>
              <p className="text-base font-medium text-gray-800">
                Leads aguardam horas ou dias por atendimento
              </p>
            </Card>

            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-gray-800" />
              </div>
              <p className="text-base font-medium text-gray-800">
                Equipe não preenche o CRM
              </p>
            </Card>
            
            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-gray-800" />
              </div>
              <p className="text-base font-medium text-gray-800">
                Falta tempo para o que realmente importa
              </p>
            </Card>
            
            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-gray-800" />
              </div>
              <p className="text-base font-medium text-gray-800">
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
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-5xl">
          <AivePresentation />
        </div>
      </section>

      {/* 4. Por que a Aive é a melhor IA do mercado? */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🔍 Por que a Aive é diferente de tudo que você já viu?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Enquanto outros oferecem uma IA genérica, a Climb Up entrega um ecossistema inteligente com múltiplas IAs integradas e treinadas para cada etapa da jornada do seu cliente. Elas se comunicam entre si e com seu time humano.
          </p>
          
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {[
              { name: "IA de Atendimento", icon: <MessageSquare className="w-8 h-8" /> },
              { name: "IA de Qualificação", icon: <UserCheck className="w-8 h-8" /> },
              { name: "IA de Vendas", icon: <TrendingUp className="w-8 h-8" /> },
              { name: "IA de Financeiro", icon: <Target className="w-8 h-8" /> },
              { name: "IA de Suporte", icon: <Shield className="w-8 h-8" /> }
            ].map((ia, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-200">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">{ia.icon}</div>
                  <h3 className="font-semibold text-sm">{ia.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Por que funciona:</h3>
              <ul className="space-y-3">
                {[
                  "Mais assertividade: cada IA entende profundamente o tipo de atendimento que vai prestar.",
                  "Tom de voz adequado para cada setor: evita parecer genérico ou robótico.",
                  "Menos erros e ruídos: evita que a IA alucine em temas aleatórios."
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Benefícios:</h3>
              <ul className="space-y-3">
                {[
                  "Escalabilidade real: você pode expandir para novos setores criando novas Aives especializadas.",
                  "Experiência premium para o cliente: fluidez, clareza e agilidade em qualquer etapa da jornada."
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Aive + Climb Up, um ecossistema completo! */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/lovable-uploads/de4c279a-8969-47ca-9a96-f80cc25c1312.png" alt="Climb Up Logo" className="h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Aive + Climb Up, um ecossistema completo!
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Aive atua como cérebro. A Climb Up é o corpo que executa com estrutura e tecnologia. A Aive opera e faz todo trabalho repetitivo, seu time foca no que importa, e você espia e gerencia tudo em tempo real.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Chatbot",
                description: "Fluxogramas completos"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "CRM inteligente", 
                description: "Para Aive, você e SEU TIME registrar e acompanhar negociações"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Campanhas em massa no WhatsApp",
                description: "Para dobrar as vendas com remarketing estratégico"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Relatórios em tempo real",
                description: "De atendimentos, de vendas ao tráfego, não perca nenhuma informação"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Fila de atendimento e Rodízio de leads",
                description: "Distribui e organizada automaticamente"
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Gerenciamento de pagamentos",
                description: "PIX, boleto, cartão de crédito direto na conversa"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Integrações nativas",
                description: "Webhook, API, N8N, Make, etc."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Rastreamento dos Leads",
                description: "Facebook Ads, Google Ads, Click-to-WhatsApp"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Distribuição automática de conversas",
                description: "Para o time humano complementar a IA"
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Espie as conversas sem notificar o cliente",
                description: "E intervenha se necessário"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Central de atendimento",
                description: "Múltiplos canais → Aive → Equipes"
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Chat interno",
                description: "Para vendedores e setores"
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
        </div>
      </section>

      {/* 6. "Mas eu não quero parecer um robô..." */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            "Mas eu não quero parecer um robô..."
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
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
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Bases de conhecimento",
                description: "Cada detalhe do seu negócio será memorizado e atualizado constantemente."
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


      {/* 7. Antes vs. Depois da Aive */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Antes da Aive vs. Depois da Aive
          </h2>
          <BeforeAfterComparison />
        </div>
      </section>

      {/* 8. Aive em Ação: Exemplos por Nicho */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🧩 Aive em Ação: Casos reais por nicho
          </h2>
          <NicheCases />
        </div>
      </section>

      {/* 9. Contratar mais pessoas ou ativar inteligência pra potencializar o time? */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contratar mais pessoas ou ativar inteligência pra potencializar o time?
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
                    ["Custo mensal médio", "Salário + encargos", "Menor que 1 salário mínimo"],
                    ["Custo anual médio", "13º, férias, encargos", "Custo fixo anual"],
                    ["Custo de contratação", "Recrutamento, treinamento, estrutura física", "Setup único, com entrega pronta"],
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
              Com o valor de 1 mês de salário, você ativa uma inteligência que vende o ano inteiro, 
              sem comissão, sem pausa e sem erro.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Prova Social + Chamada Final + Formulário */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary-glow/5 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Lado esquerdo: Prova Social */}
            <div className="text-center md:text-left">
              <div className="grid grid-cols-3 gap-8 mb-12">
                {[
                  { metric: "+2000", title: "Clientes ativos" },
                  { metric: "+200k", title: "Interações por mês" },
                  { metric: "+2M", title: "Mensagens por mês" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                    <p className="text-sm font-medium">{stat.title}</p>
                  </div>
                ))}
              </div>
              
               <div className="flex items-center gap-3 mb-6">
                <img src="/lovable-uploads/93fac938-d53c-4030-878a-71acd62dd653.png" alt="Climb Up Icon" className="h-8 w-8" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Com a Aive, sua empresa escala de verdade
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Pare de perder leads e vendas por falta de atendimento. A Aive trabalha 24/7 
                para que você tenha mais tempo para focar no que realmente importa: crescer.
              </p>
              <div className="flex flex-col gap-4">
                <Button variant="outline" size="xl" className="text-lg">
                  Quero ativar a Aive agora
                </Button>
                <Button variant="outline" size="xl" className="text-lg">
                  Falar com especialista
                </Button>
              </div>

              {/* Carousel de logos de clientes */}
              <div className="mt-12">
                <p className="text-sm text-muted-foreground mb-6">Empresas que confiam na Climb Up:</p>
                 <div className="flex items-center justify-center md:justify-start space-x-8 opacity-60">
                  <img src="/lovable-uploads/de4c279a-8969-47ca-9a96-f80cc25c1312.png" alt="Cliente 1" className="h-8 grayscale opacity-70" />
                  <img src="/lovable-uploads/9d5a96f4-256f-45c2-be07-c296cf145fb2.png" alt="Cliente 2" className="h-8 grayscale opacity-70" />
                  <img src="/lovable-uploads/93fac938-d53c-4030-878a-71acd62dd653.png" alt="Cliente 3" className="h-8 grayscale opacity-70" />
                </div>
              </div>
            </div>

            {/* Lado direito: Formulário */}
            <div>
              <Card>
                 <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <img src="/lovable-uploads/93fac938-d53c-4030-878a-71acd62dd653.png" alt="Climb Up Icon" className="h-6 w-6" />
                    <h3 className="text-2xl font-bold">O futuro está a uma mensagem de distância.</h3>
                  </div>
                  <p className="text-muted-foreground">Invista em conversas que vendem e escale com a Climb Up.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nome completo</label>
                    <input type="text" className="w-full p-3 border rounded-lg mt-1" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full p-3 border rounded-lg mt-1" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">WhatsApp</label>
                    <input type="tel" className="w-full p-3 border rounded-lg mt-1" placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Empresa</label>
                    <input type="text" className="w-full p-3 border rounded-lg mt-1" placeholder="Nome da empresa" />
                  </div>
                  <Button className="w-full" size="lg">
                    Quero conhecer a Aive
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Linha do Tempo de Onboarding (visual horizontal) */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Linha do tempo de Onboarding Aive
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            De 10 a 30 dias (ajustável conforme urgência)
          </p>

          <div className="relative">
            {/* Linha horizontal conectora */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-primary/30 hidden md:block"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  phase: "1",
                  title: "Diagnóstico",
                  days: "Dia 1 a 5",
                  items: [
                    "Reunião para entender estrutura, público e modelo de vendas",
                    "Levantamento de canais, integrações e tipos de atendimentos"
                  ]
                },
                {
                  phase: "2", 
                  title: "Criação de scripts",
                  days: "Dia 5 a 15",
                  items: [
                    "Desenvolvimento dos fluxos de conversa",
                    "Desenvolvimento de base de conhecimento",
                    "Definição do tom de voz e regras gerais",
                    "Aprovação do cliente"
                  ]
                },
                {
                  phase: "3",
                  title: "Testes e ajustes", 
                  days: "Dia 15 a 25",
                  items: [
                    "Testes reais com leads",
                    "Ajustes finos com base no comportamento do público",
                    "Validação final com o cliente"
                  ]
                },
                {
                  phase: "4",
                  title: "Ativação",
                  days: "Dia 25 a 30", 
                  items: [
                    "IA publicada oficialmente",
                    "Treinamento da equipe interna (se necessário)"
                  ]
                }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  {/* Ícone circular numerado */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                      {phase.phase}
                    </div>
                  </div>
                  
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                      <Badge variant="outline" className="mb-4">{phase.days}</Badge>
                      <ul className="space-y-2 text-sm text-left">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ / Perguntas Frequentes */}
      <section className="py-16 px-4 bg-gray-50">
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

      {/* 13. Rodapé */}
      <footer className="py-12 px-4 bg-orange-500 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center mb-8">
            <img src="/lovable-uploads/b6be5d2e-869c-4875-8764-39a3640600e6.png" alt="Climb Up" className="h-12" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Endereço</h4>
              <p className="text-sm text-white/90">
                Climb Up<br />
                Av. Padre Cacique, 122/702 – Praia de Belas<br />
                Porto Alegre (Ed. Park Offices)<br />
                CNPJ: 40.328.259/0001-80
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Nos acompanhe</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Target className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-sm text-white/90 mb-2">(51) 98143-5937</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                Falar com especialista
              </Button>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-white/80">
              Copyright 2024 © Climb Up. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Aive;