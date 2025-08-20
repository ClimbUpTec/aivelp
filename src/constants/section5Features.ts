import { 
  Users, Zap, TrendingUp, Shield, Bot, Clock, Target, Settings, MessageSquare, Wrench 
} from "lucide-react";

// Section 5 features data optimized for performance
export const SECTION5_FEATURES = [
  {
    id: 1,
    icon: Users,
    title: "CRM inteligente",
    description: "Gestão completa de leads e negociações. Aive cria cards, insere resumos e seu time acompanha",
    image: "/lovable-uploads/f10c12b6-1a01-487b-88f8-e6b1c30e1941.png",
    caption: "CRM inteligente para gestão completa de leads e negociações. A Aive registra automaticamente todas as interações e seu time pode acompanhar o progresso em tempo real."
  },
  {
    id: 2,
    icon: Zap,
    title: "Campanhas WhatsApp",
    description: "Envie mensagens em massa no WhatsApp e dobre suas vendas com remarketing",
    image: "/lovable-uploads/0c847d1b-8787-4f10-aae4-7bb67117fae3.png",
    caption: "Central de campanhas com disparo automatizado no WhatsApp. Crie sequências de remarketing que dobram suas vendas com mensagens personalizadas."
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Relatórios",
    description: "Dashboard e relatórios em tempo real",
    image: "/lovable-uploads/f628eb48-9315-4fc3-ad1c-412847c61c61.png",
    caption: "Dashboard com métricas e relatórios detalhados em tempo real. Acompanhe vendas, atendimentos, tráfego e performance da sua equipe."
  },
  {
    id: 4,
    icon: Shield,
    title: "Classificação de atendimento",
    description: "Acompanhe leads perdidos e ganhos e classifique o atendimento dos seus atendentes",
    image: "/lovable-uploads/911dad1e-3ff7-48fb-a9c5-8fdff80a304e.png",
    caption: "Sistema inteligente de distribuição e gerenciamento de filas. A Aive organiza automaticamente a fila de atendimento e distribui leads por performance."
  },
  {
    id: 5,
    icon: Bot,
    title: "Pagamentos",
    description: "Gateway de pagamentos integrado, seu time e a Aive enviam cobranças em segundos",
    image: "/lovable-uploads/4402870c-0f51-4600-ab30-3abcd0d03785.png",
    caption: "Gateway de pagamentos integrado com múltiplas opções. Receba pagamentos via PIX, boleto e cartão diretamente na conversa do WhatsApp."
  },
  {
    id: 6,
    icon: Clock,
    title: "Integrações",
    description: "Webhook, API, N8N, Make, etc.",
    image: "/lovable-uploads/b7f16fc9-f943-40df-af70-f14a763bcded.png",
    caption: "Central de integrações com APIs e automações. Conecte com N8N, Make, Zapier e centenas de outras ferramentas via webhook."
  },
  {
    id: 7,
    icon: TrendingUp,
    title: "Rastreio e origem de leads",
    description: "Facebook Ads, Google Ads, Click-to-WhatsApp",
    image: "/lovable-uploads/2a71d4de-aeeb-4ccf-9070-95e78eb81302.png",
    caption: "Rastreamento completo da origem até conversão dos leads. Veja quais anúncios geram mais vendas com UTMs automáticos."
  },
  {
    id: 8,
    icon: Target,
    title: "Rodízio de leads",
    description: "Para o time humano complementar a IA",
    image: "/lovable-uploads/738ab304-808b-4dbd-bbdd-599f5c254d41.png",
    caption: "Sistema de roteamento inteligente de conversas. A Aive decide quando transferir para humanos e qual vendedor recebe cada lead."
  },
  {
    id: 9,
    icon: Settings,
    title: "Supervisão de conversas",
    description: "E intervenha se necessário",
    image: "/lovable-uploads/c13d29cd-53f0-4dca-941b-616e635fd4ae.png",
    caption: "Monitoramento discreto com possibilidade de intervenção. Acompanhe conversas em tempo real sem que o cliente saiba e intervenha quando necessário."
  },
  {
    id: 10,
    icon: MessageSquare,
    title: "Central de canais",
    description: "Hub centralizado para gestão de conversas de múltiplos canais. Instagram, Facebook, site, landing pages, tudo em um só lugar",
    image: "/lovable-uploads/51537a49-0b17-4dda-9d92-0d635bfa4ff9.png",
    caption: "Hub centralizado para gestão de todos os canais. Instagram, Facebook, site, landing pages - tudo converge para um só lugar."
  },
  {
    id: 11,
    icon: Wrench,
    title: "Chat interno",
    description: "Para vendedores e setores",
    image: "/lovable-uploads/e5072db9-aa15-4223-a95f-cfdc99bc9aef.png",
    caption: "Comunicação interna entre equipes e departamentos. Mantenha toda a equipe alinhada com chat interno integrado à plataforma."
  },
  {
    id: 12,
    icon: MessageSquare,
    title: "Chatbot + IA",
    description: "Fluxogramas completos",
    image: "/lovable-uploads/f1e16003-7074-4b51-a143-f8ae2c1673b7.png",
    caption: "Constructor de fluxos inteligentes para atendimento automatizado. Crie chatbots avançados que se comportam como vendedores experientes."
  }
] as const;

// Preload critical images for Section 5
export const SECTION5_PRELOAD_IMAGES = SECTION5_FEATURES.slice(0, 4).map(feature => feature.image);