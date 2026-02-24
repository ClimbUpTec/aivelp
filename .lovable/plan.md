

## Plano: Alterar "AIVE" para "Agentes Inteligentes" em toda a LP

### Alteracoes nos textos visiveis da pagina (`src/pages/Aive.tsx`)

Todas as ocorrencias de "AIVE" e "Aive" nos textos exibidos ao visitante serao substituidas:

| Local | De | Para |
|-------|-----|------|
| Ampulheta (linha 37) | "AIVE ATENDE EM TEMPO REAL" | "AGENTES INTELIGENTES ATENDEM EM TEMPO REAL" |
| Ampulheta (linha 52) | "AIVE GERA CONVERSAO" | "AGENTES INTELIGENTES GERAM CONVERSAO" |
| Apresentacao titulo (linha 89) | "Conheca a AIVE, a IA da..." | "Conheca os Agentes Inteligentes da..." |
| Apresentacao subtitulo (linha 92) | "onde a Aive atua" | "onde os Agentes Inteligentes atuam" |
| Antes/Depois (linhas 145, 166) | "Antes da Aive" / "Depois da Aive" | "Antes dos Agentes Inteligentes" / "Depois dos Agentes Inteligentes" |
| Features descriptions (linhas 193, 198, 203, 218) | "Aive" em descricoes | "Agentes Inteligentes" |
| WhatsApp message (linha 265) | "sobre a AIVE" | "sobre os Agentes Inteligentes" |
| Hero titulo (linha 393) | "com a Aive. A IA da Climb Up" | "com os Agentes Inteligentes da Climb Up" |
| Alt da imagem (linha 405) | "Conversa da AIVE" | "Conversa dos Agentes Inteligentes" |
| Secao 4 titulo (linha 507) | "a Aive e diferente" | "os Agentes Inteligentes sao diferentes" |
| Secao 4 texto (linha 510) | "Aives especializadas" | "Agentes Inteligentes especializados" |
| Secao 4 beneficios (linha 550) | "novas Aives" | "novos Agentes Inteligentes" |
| Secao 5 titulo (linha 577) | "Aive +" | "Agentes Inteligentes +" |
| Secao 5 descricao (linha 580) | "Aive atua como cerebro... A Aive opera..." | "Os Agentes Inteligentes atuam como cerebro... Eles operam..." |
| Secao 6 (linha 659) | "Aive tem tom de voz" | "Os Agentes Inteligentes tem tom de voz" |
| Secao 7 titulo (linha 696) | "Antes da Aive vs. Depois da Aive" | "Antes dos Agentes Inteligentes vs. Depois" |
| Ciclo implementacao titulo (linha 880) | "implementacao da Aive" | "implementacao dos Agentes Inteligentes" |
| FAQ respostas | Todas as mencoes a "Aive" | "Agentes Inteligentes" |

### Alteracoes em nomes internos do codigo

| Arquivo | De | Para |
|---------|-----|------|
| `src/pages/Aive.tsx` | Componente `Aive` (export default) | Manter como `Aive` (nome do arquivo) |
| `src/pages/Aive.tsx` | `AivePresentation` | `AgentesInteligentesPresentation` |
| `src/pages/Aive.tsx` | Comentarios com "Aive" | Atualizar para "Agentes Inteligentes" |
| `src/constants/aiveFeatures.ts` | `AIVE_FEATURES`, `PRELOAD_IMAGES` | `AGENTES_FEATURES`, `PRELOAD_IMAGES` |
| `src/App.tsx` | Import e referencia ao componente `Aive` | Manter (nome do arquivo continua o mesmo) |

### Arquivos afetados

1. **`src/pages/Aive.tsx`** - Arquivo principal com ~40 alteracoes de texto e nomes internos
2. **`src/constants/aiveFeatures.ts`** - Renomear constante `AIVE_FEATURES` para `AGENTES_FEATURES`

### Observacoes

- O nome do arquivo `Aive.tsx` sera mantido para evitar quebrar rotas e imports
- O componente default export `Aive` sera mantido pelo mesmo motivo
- Todas as meta tags do `index.html` permanecerao inalteradas
- Tags do Google e Meta Pixel nao serao afetadas
