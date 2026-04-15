

## Plano: Moldura cinza, tamanho menor e nova conversa de sinistro

### Alterações em `src/components/WhatsAppChat.tsx`

**1. Cor da moldura**: Voltar para `border-gray-800 bg-gray-800` (substituir todas as referências a `orange-500`)

**2. Tamanho 20% menor**: Trocar `max-w-xs lg:max-w-sm` para `max-w-[256px] lg:max-w-[307px]` (80% dos valores originais)

**3. Nova conversa**: Substituir o array `MESSAGES` pelo fluxo completo de sinistro com ~30 mensagens. O header muda de "Agente Climb Up" para "Gabriela Seguros". Para diferenciar as duas agentes (Gabriela e Nina), o nome será incluído como prefixo no texto das mensagens da Nina (ex: "Nina: Oi! Eu sou a Nina...")

**4. Velocidade**: Reduzir `TYPING_DELAY` de 1200ms para 900ms dado que a conversa é mais longa

**5. Header WhatsApp**: Trocar nome para "Gabriela Seguros" e avatar "GS"

Mensagens do array (resumo):
- Cliente: "Oi"
- Gabriela: saudação + pergunta cotação/sinistro
- Cliente: "sinistro"
- Gabriela: direciona pra Nina
- Cliente: "Tá bom"
- Nina: se apresenta, pede nome completo
- Cliente: nome
- Nina: pede CPF
- Cliente: CPF
- Nina: mostra dados da apólice completos
- Cliente: "eu bati o carro"
- Nina: acolhe, pede fotos
- Cliente: "meu marido que tem"
- Nina: pede relato
- Cliente: relato do acidente
- Nina: pede endereço
- Cliente: endereço
- Nina: pergunta BO
- Cliente: "sim"
- Nina: pergunta contato da outra pessoa
- Cliente: telefone
- Nina: pergunta vítimas
- Cliente: "não"
- Nina: coletou tudo, vai encaminhar
- Cliente: "Ok"
- Nina: mensagem final de encerramento

