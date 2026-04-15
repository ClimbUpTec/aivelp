

## Plano: Remover mensagens do final da conversa

### Alteração em `src/components/WhatsAppChat.tsx`

Remover as linhas 41-42 do array `MESSAGES`:
- Linha 41: `"Alice, já coletei todas as informações iniciais aqui.\nVou encaminhar seu atendimento agora pra nossa equipe dar continuidade e te orientar nos próximos passos, tudo bem?"`
- Linha 42: `"Ok"` (resposta do cliente)

A conversa passará direto de "Que bom." para "Perfeito.\nJá deixei tudo registrado..."

