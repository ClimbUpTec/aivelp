import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { ArrowDown, CheckCircle, Star, Users, TrendingUp, Clock, MessageSquare, Bot, Zap, Shield, Target, Sparkles, AlertCircle, TrendingDown,
         Phone, UserCheck, UserPlus, ArrowUpRight, Folder, FolderPlus, MoveHorizontal, 
         Bell, RefreshCw, Calendar, Link, FileText, Settings, Wrench, X, MessageCircle, Linkedin, Instagram, Facebook, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

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
    { name: "Insere resumos nos cards no CRM", icon: <MoveHorizontal className="w-8 h-8" /> },
    { name: "Follow-up e lembretes", icon: <Bell className="w-8 h-8" /> },
    { name: "Reativação de leads parados", icon: <RefreshCw className="w-8 h-8" /> },
    { name: "Agendamentos automáticos", icon: <Calendar className="w-8 h-8" /> },
    { name: "Links de compra", icon: <Link className="w-8 h-8" /> },
    { name: "Geração de orçamentos", icon: <FileText className="w-8 h-8" /> },
    { name: "Campanhas segmentadas de remarketing", icon: <Target className="w-8 h-8" /> },
    { name: "Personalizada para cada negócio", icon: <Settings className="w-8 h-8" /> },
    { name: "Adaptações constantes", icon: <Wrench className="w-8 h-8" /> },
    
  ];

  return (
    <div className="py-16 px-9 bg-muted">
      <div className="text-center max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary" style={{ transform: 'scale(1.1)' }}>
          Conheça a AIVE, a IA da <img src="/lovable-uploads/a437aa98-8118-4292-8f30-e470fd0582f4.png" alt="Climb Up" className="inline h-14 md:h-16 mx-2" />
        </h3>
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
        
        {/* Botão CTA */}
        <div className="text-center mt-12">
          <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary hover:bg-primary/90">
            Quero AIVE
          </Button>
        </div>
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
          "Vendedores sobrecarregados e improdutivos",
          "Leads esquecidos ou mal qualificados", 
          "CRM incompleto ou desatualizado",
          "Falta de follow-up no timing certo",
          "Perda de vendas fora do horário comercial"
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
          "Atendimento imediato a todos os leads, 24/7",
          "Qualificação e priorização automáticas",
          "CRM atualizado em tempo real, sem esforço", 
          "Follow-up estratégico sempre no momento ideal",
          "Vendas mesmo enquanto você dorme"
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

// Função para redirecionar para WhatsApp
const redirectToWhatsApp = () => {
  const phoneNumber = "5551981435937"; // (51) 98143-5937
  const message = "Olá! Gostaria de conhecer mais sobre a AIVE e como ela pode transformar meu atendimento e vendas.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

// Componente do botão flutuante do WhatsApp
const FloatingWhatsAppButton = () => (
  <div className="fixed bottom-6 right-6 z-50">
    <button
      onClick={redirectToWhatsApp}
      className="bg-green-500 hover:bg-green-600 text-white rounded-full p-6 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </button>
  </div>
);

// Componente principal da página
const Aive = () => {
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Chamada Impactante (Herói) */}
      <section 
        className="py-32 px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/53fcc771-6659-4fc3-9368-25accfdd26a4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'calc(center - 5cm) center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Logo Climb Up - Superior Esquerdo */}
        <div className="absolute top-8 left-8 z-30 flex items-center">
          <img src="/lovable-uploads/a437aa98-8118-4292-8f30-e470fd0582f4.png" alt="Climb Up" className="h-16" />
        </div>

        {/* Botão Contratar Agora - Superior Direito */}
        <div className="absolute top-8 right-8 z-30 flex items-center">
          <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary text-white hover:bg-primary/90">
            Contratar agora
          </Button>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#FF5B04' }}>
            Venda mais com a AIVE. A IA da Climb Up que escala suas vendas 24/7.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Atende. Qualifica. Preenche o CRM. Faz follow-up. Agenda. Vende.
            Ou, se preferir, passa pro seu time. Tudo 24/7.
          </p>
          <div className="flex justify-center">
            <Button onClick={redirectToWhatsApp} variant="hero" size="xl">
              Quero escalar com Aive
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Está enfrentando isso? */}
      <section className="py-16 px-4 relative bg-gradient-to-br from-orange-400 to-orange-600">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sua empresa está passando por isso?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Enfrentando dificuldades para gerar vendas e manter a operação no ritmo que o mercado exige?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-red-500" />
              </div>
              <p className="text-base font-medium text-red-500">
                Leads esperando por resposta
              </p>
            </Card>

            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-red-500" />
              </div>
              <p className="text-base font-medium text-red-500">
                Falta de follow-up
              </p>
            </Card>

            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-red-500" />
              </div>
              <p className="text-base font-medium text-red-500">
                Equipe sobrecarregada
              </p>
            </Card>
            
            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-red-500" />
              </div>
              <p className="text-base font-medium text-red-500">
                CRM desatualizado
              </p>
            </Card>
            
            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-red-500" />
              </div>
              <p className="text-base font-medium text-red-500">
                Crescimento travado
              </p>
            </Card>

            <Card className="p-6 text-center border-gray-300 bg-white">
              <div className="mb-3">
                <X className="w-10 h-10 mx-auto text-red-500" />
              </div>
              <p className="text-base font-medium text-red-500">
                Perdendo vendas p/ concorrentes
              </p>
            </Card>
          </div>
          
          <div className="text-center">
            <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary text-white hover:bg-primary/90">
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
      <section className="py-8 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Por que a Aive é diferente de tudo que você já viu?
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
                  "Experiência premium para o cliente: fluidez, clareza e agilidade em qualquer etapa da jornada.",
                  "Uma equipe inteira que trabalha sem folgas, pra você e seus clientes."
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Botão CTA */}
          <div className="text-center mt-12">
            <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary hover:bg-primary/90">
              Quero AIVE
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Aive + Climb Up, um ecossistema completo! */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Aive + <img src="/lovable-uploads/a437aa98-8118-4292-8f30-e470fd0582f4.png" alt="Climb Up" className="inline h-12 md:h-14 mx-2" />, um ecossistema completo!
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Aive atua como cérebro. A Climb Up é o corpo que executa com estrutura e tecnologia. A Aive opera e faz todo trabalho repetitivo, seu time foca no que importa, e você espia e gerencia tudo em tempo real.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "CRM inteligente", 
                description: "Para Aive, você e seu time registrar e acompanhar negociações"
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
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Chatbot + IA",
                description: "Fluxogramas completos"
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
          
          {/* Botão CTA */}
          <div className="text-center mt-12">
            <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary hover:bg-primary/90">
              Quero AIVE
            </Button>
          </div>
        </div>
      </section>

      {/* 6. "Mas eu não quero parecer um robô..." */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-secondary/20 to-orange-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            "Mas eu não quero parecer um robô..."
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
          
          {/* Botão CTA */}
          <div className="text-center mt-12">
            <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary hover:bg-primary/90">
              Quero AIVE
            </Button>
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
          
          {/* Botão CTA */}
          <div className="text-center mt-12">
            <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary hover:bg-primary/90">
              Quero AIVE
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Produtividade de um time inteiro pelo valor de 1 colaborador júnior */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Produtividade de um time inteiro pelo valor de 1 colaborador júnior
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Atende e vende como uma equipe completa, mas sem salário, férias, folgas ou encargos.
            </p>
          </div>


          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left"></th>
                    <th className="p-4 text-center">Vendedor humano (1 pessoa)</th>
                    <th className="p-4 text-center"><img src="/lovable-uploads/3ca28316-d1d1-4c3d-8066-a40e8a89e409.png" alt="IA de vendas" className="inline h-6 mx-2" /> (IA de vendas 24/7)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Custo", "Salário + encargos", "Valor fixo e menor que contratar mais um funcionário"],
                    ["Disponibilidade", "44h semanais", "24h/dia, 7 dias por semana"],
                    ["Follow-up", "Depende de rotina", "Sempre no timing certo"],
                    ["Organização", "Falhas no CRM", "Atualização automática e inteligente"],
                    ["Atendimentos", "Limitado à carga de trabalho", "Ilimitado e imediato"],
                    ["Treinamento", "Mensal e sujeito a turnover", "Pronto e validado pela sua equipe"]
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
              💡 Com o valor de um único colaborador júnior por mês, você ativa a Aive, que entrega a produtividade ilimitada, o ano inteiro, sem comissão e sem erro.
            </p>
          </div>
          
          {/* Botão CTA */}
          <div className="text-center mt-8">
            <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary hover:bg-primary/90">
              Quero AIVE
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Clientes Ativos e Empresas que Confiam */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Empresas que confiam na <img src="/lovable-uploads/a437aa98-8118-4292-8f30-e470fd0582f4.png" alt="Climb Up" className="inline h-16 md:h-18 mx-2" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Centenas de empresas já trocaram a expansão da equipe por uma inteligência que vende o ano inteiro, sem pausas e com um ecossistema robusto.
            </p>
            
            {/* Métricas de clientes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+2000</div>
                <p className="text-muted-foreground">Clientes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+200k</div>
                <p className="text-muted-foreground">Interações por mês</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Taxa de satisfação</p>
              </div>
            </div>

            {/* Logos das empresas */}
            <div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="h-24 w-32 flex items-center justify-center">
                  <img src="/lovable-uploads/b50cf148-a9f5-4926-ae36-c0513e64ce37.png" alt="Comfy Pizza Napoletana" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="h-24 w-32 flex items-center justify-center">
                  <img src="/lovable-uploads/a886ce68-444c-48dc-b4ce-dc29c234dc87.png" alt="Litifica Geologia e Meio Ambiente" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="h-24 w-32 flex items-center justify-center">
                  <img src="/lovable-uploads/9ea355fc-e40f-41f6-83f7-a490d2c881b7.png" alt="Alligator Parts" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="h-24 w-32 flex items-center justify-center">
                  <img src="/lovable-uploads/bc88886d-9bb1-41f0-a8fb-de885822381c.png" alt="Garantepay" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="h-24 w-32 flex items-center justify-center">
                  <img src="/lovable-uploads/e3b12e63-ee54-425d-81e0-30ecce94145e.png" alt="Economize em Energia" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="h-24 w-32 flex items-center justify-center">
                  <img src="/lovable-uploads/0372ad6c-da31-44c3-b412-db19d6252ca0.png" alt="Bike Line" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="h-24 w-32 flex items-center justify-center">
                  <img src="/lovable-uploads/84467682-d5ad-4c9c-a68c-95c2ae6da1cd.png" alt="Anhanguera" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="h-24 w-32 flex items-center justify-center">
                  <img src="/lovable-uploads/bbcfdba9-f4d0-444c-b8fe-b3f2ecc9f833.png" alt="Oito Gestão Tributária" className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Formulário */}
      <section 
        className="py-20 px-4 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/993d177c-77dd-4ff6-8175-06d7eb568c64.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Lado esquerdo: Chamada Final */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O futuro está a uma mensagem de distância.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Invista em conversas que vendem e escale com a Climb Up.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary hover:bg-primary/90">
                  Quero AIVE
                </Button>
                <Button onClick={redirectToWhatsApp} variant="outline" size="lg">
                  Falar agora
                </Button>
              </div>
            </div>

            {/* Lado direito: Formulário */}
            <div>
              <Card>
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img src="/lovable-uploads/ec1d8e37-e645-4307-aa1e-2fa8c176c340.png" alt="Climb Up" className="h-12" />
                  </div>
                  <h3 className="text-2xl font-bold">Entre em contato</h3>
                  <p className="text-muted-foreground">Preencha o formulário e nossa equipe entrará em contato</p>
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
                  <Button onClick={redirectToWhatsApp} className="w-full" size="lg">
                    Quero AIVE
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Ciclo de implementação da Aive (visual horizontal) */}
      <section className="py-16 px-4 bg-secondary/5 pb-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ciclo de implementação da Aive
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
                    "Levantamento de canais, integrações e tipos de atendimento",
                    "Aprovação de estrutura pelo cliente"
                  ]
                },
                {
                  phase: "2", 
                  title: "Criação de scripts",
                  days: "Dia 5 a 15",
                  items: [
                    "Desenvolvimento de fluxos de conversa e base de conhecimento",
                    "Definição de tom de voz e regras gerais",
                    "Aprovação final de estrutura pelo cliente"
                  ]
                },
                {
                  phase: "3",
                  title: "Testes e ajustes", 
                  days: "Dia 15 a 25",
                  items: [
                    "Testes reais com leads",
                    "Ajustes com base no comportamento do público",
                    "Aprovação com o cliente da IA"
                  ]
                },
                {
                  phase: "4",
                  title: "Ativação",
                  days: "Dia 25 a 30", 
                  items: [
                    "Publicação oficial da IA",
                    "Treinamento da equipe (se necessário)",
                    "Início do acompanhamento de performance"
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
                  
                  <Card className="text-center h-80">
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                      <Badge variant="outline" className="mb-4 mx-auto">{phase.days}</Badge>
                      <ul className="space-y-2 text-sm text-left flex-1">
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
            Perguntas Frequentes
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
            ].slice(0, showAllFAQs ? 10 : 5).map((faq, index) => (
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
          
          {/* Botão Ver Mais */}
          {!showAllFAQs && (
            <div className="text-center mt-8">
              <Button onClick={() => setShowAllFAQs(true)} variant="outline" size="lg" className="flex items-center gap-2">
                Ver mais perguntas
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          )}
          
          {/* Botão CTA */}
          <div className="text-center mt-12">
            <Button onClick={redirectToWhatsApp} size="lg" className="bg-primary hover:bg-primary/90">
              Quero AIVE
            </Button>
          </div>
        </div>
      </section>

      {/* 13. Rodapé */}
      <footer className="py-12 px-4 text-white" style={{ backgroundColor: '#FF5B04' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-6">
                <img src="/lovable-uploads/671ce0d1-2127-4a4a-b6aa-63942b30965c.png" alt="Climb Up" className="h-24" />
              </div>
              <h4 className="font-bold mb-4">Endereço:</h4>
              <p className="text-sm text-white/90">
                Av. Padre Cacique, 122/702 – Praia de Belas<br />
                Porto Alegre (Ed. Park Offices)<br />
                CNPJ: 40.328.259/0001-80
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Nos acompanhe:</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/92807772/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/climbupoficial/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/climbuptecnologia/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://climbup.com.br/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Blog">
                  <FileText className="w-6 h-6" />
                </a>
                <a href="https://climbup.com.br/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Site">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato:</h4>
              <p className="text-sm text-white/90 mb-2">(51) 98143-5937</p>
              <p className="text-sm text-white/90">contato@climbup.com.br</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-white/80">
              Copyright 2024 © Climb Up. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Botão flutuante do WhatsApp */}
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Aive;