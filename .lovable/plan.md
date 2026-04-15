

## Plano: Conversa WhatsApp animada no hero

### O que será feito

Criar um componente React que simula uma conversa de WhatsApp animada, com mensagens aparecendo uma a uma (como se estivessem sendo digitadas/enviadas em tempo real). Substituirá a imagem estática na coluna direita do hero.

### Componente `WhatsAppChat.tsx`

- Visual: moldura de celular com interface WhatsApp (header verde escuro com nome "Agente Climb Up", fundo bege claro com padrão, balões de mensagem)
- Balões verdes (direita) = agente IA, balões brancos (esquerda) = cliente
- Animação: cada mensagem aparece com delay sequencial (fade-in + slide-up), simulando conversa em tempo real
- Indicador "digitando..." antes de cada mensagem do agente
- Loop: após todas as mensagens, reinicia a conversa

### Roteiro da conversa (exemplo)

```
Cliente: Olá, quero saber mais sobre o plano premium
Agente:  Olá! Sou a IA da Climb Up 😊 Vou te ajudar!
Agente:  Qual o segmento da sua empresa?
Cliente: Trabalhamos com e-commerce de moda
Agente:  Perfeito! Já cadastrei seus dados no CRM ✅
Agente:  Agendei uma reunião com nosso especialista para amanhã às 14h. Tudo certo?
Cliente: Ótimo, obrigado!
Agente:  Enviei o link de confirmação 🔗 Qualquer dúvida, estou aqui 24/7!
```

Cobre: atendimento, qualificação, CRM, agendamento, envio de link, 24/7.

### Alterações

1. **Novo arquivo**: `src/components/WhatsAppChat.tsx` — componente com animação via `useState`/`useEffect` e CSS transitions
2. **`src/pages/Aive.tsx`** (linhas 400-407): substituir o `<img>` pelo `<WhatsAppChat />`

### Estilo visual

- Header: `#075E54` (verde WhatsApp)
- Fundo chat: `#ECE5DD`
- Balão agente: `#DCF8C6` (verde claro)
- Balão cliente: `#FFFFFF`
- Moldura de celular com bordas arredondadas e sombra sutil
- Responsivo: `max-w-xs lg:max-w-sm`

