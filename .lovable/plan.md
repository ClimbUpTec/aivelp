

## Plano: Auto-scroll, nomes das IAs, tamanho menor e moldura cinza claro

### Alterações em `src/components/WhatsAppChat.tsx`

**1. Auto-scroll**: Adicionar `useRef` na div do chat area e chamar `scrollIntoView` ou `scrollTop = scrollHeight` sempre que `visibleMessages` mudar, para que as mensagens subam automaticamente.

**2. Nomes das IAs nos balões**: Nas mensagens do agente, exibir o nome da IA como label em negrito acima do texto:
- Mensagens 1-3 (índices 1, 3): prefixo "Gabriela (IA)"
- Mensagens da Nina (índices 5+): já têm "Nina:" no texto — trocar para exibir "Nina (IA)" como label separado e remover o prefixo "Nina: " do texto

**3. Tamanho 20% menor**: Reduzir `max-w-[256px]` para `max-w-[205px]` e `max-w-[307px]` para `max-w-[246px]`

**4. Moldura cinza claro**: Trocar `border-gray-800 bg-gray-800` para `border-gray-300 bg-gray-300` na moldura, notch e status bar. Ajustar cor do texto da status bar para escuro.

### Detalhes técnicos

- Novo `useRef<HTMLDivElement>` para o container do chat
- `useEffect` com dependência em `visibleMessages` que faz `chatRef.current.scrollTop = chatRef.current.scrollHeight`
- Adicionar campo `agentName` à interface `Message` (opcional) para as mensagens do agente
- Renderizar `agentName` como `<p className="text-[10px] font-bold text-green-700">` antes do texto

