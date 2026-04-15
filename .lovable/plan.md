

## Plano: Moldura laranja e formato de celular

### Alterações em `src/components/WhatsAppChat.tsx`

1. **Cor da moldura**: Trocar `border-gray-800` e `bg-gray-800` para laranja (ex: `border-orange-500` / `bg-orange-500`) na div da moldura (linha 60) e na status bar (linha 62)
2. **Proporção de celular**: Adicionar `aspect-[9/19]` ao container da moldura para dar proporção vertical de smartphone real. Ajustar `min-h` / `max-h` da área de chat para preencher o espaço disponível usando `flex-1` em vez de valores fixos
3. **Notch**: Adicionar um elemento de notch centralizado no topo (pill arredondado laranja/preto) para reforçar o visual de celular moderno

