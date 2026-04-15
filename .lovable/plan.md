

## Plano: Reduzir logo da Finova

### Alteração em `src/pages/Aive.tsx` (linha 741)

Adicionar `max-h-14` à classe da imagem da Finova para limitar sua altura e ficar proporcional às demais logos:

```
<img src="/lovable-uploads/finova-logo.png" alt="Grupo Finova" className="max-h-14 max-w-full object-contain" />
```

Isso reduz a altura máxima de `max-h-full` (96px do container) para `max-h-14` (56px), alinhando visualmente com as outras logos.

