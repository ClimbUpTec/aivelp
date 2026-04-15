

## Plano: Moldura laranja, mensagens quebradas e nome Climb Up Seguros

### Alterações em `src/components/WhatsAppChat.tsx`

**1. Moldura laranja claro**: Trocar `border-gray-300 bg-gray-300` para `border-orange-200 bg-orange-200` na moldura, notch e status bar. Notch interno: `bg-orange-300`.

**2. Nome do contato**: Trocar "Gabriela Seguros" para "Climb Up Seguros" no header (linha 106). Avatar "GS" → "CS".

**3. Quebrar mensagens longas**: Mensagens com `\n\n` (parágrafo duplo) serão divididas em mensagens separadas no array `MESSAGES`. Isso faz cada bloco aparecer como um balão individual, com typing indicator entre eles. Mensagens afetadas:

- Linha 11 (Gabriela saudação): 2 balões
- Linha 15 (Nina apresentação): 2 balões  
- Linha 17 (Nina pede CPF): 2 balões
- Linha 19 (Nina apólice): 2 balões (dados + pergunta)
- Linha 21 (Nina acolhe): 2 balões
- Linha 25 (Nina endereço): 2 balões
- Linha 33 (Nina encaminha): 2 balões
- Linha 35 (Nina final): 3 balões

Cada sub-mensagem mantém o mesmo `agentName`.

