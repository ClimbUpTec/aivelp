

## Plano: Ajustar título, moldura cinza escura e fundo WhatsApp

### Alterações

**1. Título da seção (src/pages/Aive.tsx, linha 420)**
Reduzir o tamanho do h2 de `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` para `text-3xl md:text-4xl` — alinhando com os outros títulos do site.

**2. Moldura cinza escura (src/components/WhatsAppChat.tsx)**
Trocar `border-orange-200 bg-orange-200` de volta para `border-gray-800 bg-gray-800` na moldura, notch e status bar. Ajustar texto da status bar para branco e notch interno para `bg-gray-700`.

**3. Fundo do WhatsApp na área de chat (src/components/WhatsAppChat.tsx)**
Adicionar o padrão de fundo característico do WhatsApp na div do chat area. Usar um SVG inline como `backgroundImage` com opacidade baixa sobre o `#ECE5DD`, simulando o padrão de ícones repetidos (doodle pattern) do WhatsApp.

### Detalhes técnicos

- O fundo será um CSS `background-image` com um SVG data URI contendo ícones pequenos (relógio, chat, telefone etc.) em tom levemente mais escuro que o bege, repetido via `background-repeat: repeat`.

