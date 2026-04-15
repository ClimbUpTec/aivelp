

## Plano: Áudio do cliente + velocidade mais lenta

### Alterações em `src/components/WhatsAppChat.tsx`

**1. Mensagem de áudio do cliente**: Substituir a mensagem da linha 29 (`"Bati em outro carro no estacionamento do shopping."`) por uma mensagem de áudio. Adicionar campo `isAudio?: boolean` à interface `Message`. Na renderização, quando `isAudio` for true, exibir um visual de áudio (ícone de microfone + barra de onda simulada + duração "0:12") em vez do texto.

**2. Velocidade mais lenta**: Aumentar `TYPING_DELAY` de `900ms` para `1800ms` para dar tempo de leitura.

**3. Delay dinâmico (opcional mas recomendado)**: Calcular o delay baseado no comprimento da mensagem anterior — mensagens longas ficam visíveis por mais tempo antes da próxima aparecer. Fórmula: `Math.max(1500, texto.length * 40)` com cap em `3500ms`.

### Detalhes do visual do áudio

O balão de áudio terá:
- Ícone de play (triângulo) à esquerda
- Barras de onda estilizadas (5-7 divs com alturas variadas e `bg-gray-400`)
- Texto "0:12" à direita
- Mesmo estilo de balão branco do cliente

