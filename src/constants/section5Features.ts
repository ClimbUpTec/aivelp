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
    image: "/lovable-uploads/449cc1bb-f3e4-4fdf-b151-9f642601e740.png",
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
    image: "/lovable-uploads/d9300ab6-d26a-4f8f-b375-f6b9bf2c53da.png",
    caption: "Dashboard com métricas e relatórios detalhados em tempo real. Acompanhe vendas, atendimentos, tráfego e performance da sua equipe."
  },
  {
    id: 4,
    icon: Shield,
    title: "Classificação de atendimento",
    description: "Acompanhe leads perdidos e ganhos e classifique o atendimento dos seus atendentes",
    image: "/lovable-uploads/9631e126-b8a3-474a-9646-271a50d9e5d0.png",
    caption: "Sistema inteligente de distribuição e gerenciamento de filas. A Aive organiza automaticamente a fila de atendimento e distribui leads por performance."
  },
  {
    id: 5,
    icon: Bot,
    title: "Pagamentos",
    description: "Gateway de pagamentos integrado, seu time e a Aive enviam cobranças em segundos",
    image: "/lovable-uploads/f80198f3-fd92-43f7-95d7-e6ad082c2dd4.png",
    caption: "Gateway de pagamentos integrado com múltiplas opções. Receba pagamentos via PIX, boleto e cartão diretamente na conversa do WhatsApp."
  },
  {
    id: 6,
    icon: Clock,
    title: "Integrações",
    description: "Webhook, API, N8N, Make, etc.",
    image: "/lovable-uploads/c94abaa0-66ba-47c2-b4cb-d810a2397606.png",
    caption: "Central de integrações com APIs e automações. Conecte com N8N, Make, Zapier e centenas de outras ferramentas via webhook."
  },
  {
    id: 7,
    icon: TrendingUp,
    title: "Rastreio e origem de leads",
    description: "Facebook Ads, Google Ads, Click-to-WhatsApp",
    image: "/lovable-uploads/cdc8856a-b937-4aa2-a55d-3cbf057d22a2.png",
    caption: "Rastreamento completo da origem até conversão dos leads. Veja quais anúncios geram mais vendas com UTMs automáticos."
  },
  {
    id: 8,
    icon: Target,
    title: "Rodízio de leads",
    description: "Para o time humano complementar a IA",
    image: "/lovable-uploads/cdd5a6dc-af52-4256-9e5c-5af806eccf94.png",
    caption: "Sistema de roteamento inteligente de conversas. A Aive decide quando transferir para humanos e qual vendedor recebe cada lead."
  },
  {
    id: 9,
    icon: Settings,
    title: "Supervisão de conversas",
    description: "E intervenha se necessário",
    image: "/lovable-uploads/d4458b5e-7720-46d9-90b0-c370a32b25ca.png",
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
    image: "/lovable-uploads/82d4f544-25a9-416e-85da-e87747c775a9.png",
    caption: "Constructor de fluxos inteligentes para atendimento automatizado. Crie chatbots avançados que se comportam como vendedores experientes."
  }
] as const;

// Preload critical images for Section 5
export const SECTION5_PRELOAD_IMAGES = SECTION5_FEATURES.slice(0, 4).map(feature => feature.image);