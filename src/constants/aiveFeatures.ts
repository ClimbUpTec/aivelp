import { 
  Phone, Users, UserCheck, UserPlus, ArrowUpRight, FolderPlus, 
  MoveHorizontal, Bell, RefreshCw, Calendar, Link, FileText, 
  Settings 
} from "lucide-react";

export const AGENTES_FEATURES = [
  { id: 1, name: "Atendem 24/7", icon: Phone, image: "/lovable-uploads/0372ad6c-da31-44c3-b412-db19d6252ca0.png" },
  { id: 2, name: "Múltiplos atendimentos simultaneamente", icon: Users, image: "/lovable-uploads/0c847d1b-8787-4f10-aae4-7bb67117fae3.png" },
  { id: 3, name: "Qualificam leads", icon: UserCheck, image: "/lovable-uploads/2a71d4de-aeeb-4ccf-9070-95e78eb81302.png" },
  { id: 4, name: "Cadastram clientes", icon: UserPlus, image: "/lovable-uploads/2f44a1ee-3680-412b-8561-da78cea652a2.png" },
  { id: 5, name: "Direcionam para as equipes", icon: ArrowUpRight, image: "/lovable-uploads/3ca28316-d1d1-4c3d-8066-a40e8a89e409.png" },
  { id: 6, name: "Criam cards no CRM", icon: FolderPlus, image: "/lovable-uploads/4402870c-0f51-4600-ab30-3abcd0d03785.png" },
  { id: 7, name: "Criam resumos automaticamente", icon: MoveHorizontal, image: "/lovable-uploads/50e9a1cf-c58f-4127-b5fb-9d81d5c248f0.png" },
  { id: 8, name: "Fazem follow-ups", icon: Bell, image: "/lovable-uploads/51537a49-0b17-4dda-9d92-0d635bfa4ff9.png" },
  { id: 9, name: "Reativam leads parados", icon: RefreshCw, image: "/lovable-uploads/671ce0d1-2127-4a4a-b6aa-63942b30965c.png" },
  { id: 10, name: "Realizam agendamentos", icon: Calendar, image: "/lovable-uploads/738ab304-808b-4dbd-bbdd-599f5c254d41.png" },
  { id: 11, name: "Enviam links de compra", icon: Link, image: "/lovable-uploads/7a43f6b3-98fd-461c-a035-91ddd81194c6.png" },
  { id: 12, name: "Geram orçamentos", icon: FileText, image: "/lovable-uploads/7e61337c-3bae-4698-b5f8-cccf7a7bef5b.png" },
  { id: 13, name: "Se adaptam a cada negócio", icon: Settings, image: "/lovable-uploads/8b2b5876-b729-4bee-9757-56e04899be2d.png" },
] as const;

export const PRELOAD_IMAGES = AGENTES_FEATURES.slice(0, 3).map(feature => feature.image);
