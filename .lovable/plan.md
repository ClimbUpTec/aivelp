

## Plano: Atualizar seção de Implantação guiada (4 etapas)

### O que muda

Reduzir de 5 para 4 etapas, mesclando as antigas etapas 3 e 4 e atualizando os textos conforme solicitado. Layout visual mantido.

### Alterações em `src/pages/Aive.tsx` (linhas 878-988)

**Primeiro grid (3 colunas)** — etapas 1, 2 e 3:

| Etapa | Título | Dias | Itens |
|---|---|---|---|
| 1 | Diagnóstico | Dias 1 a 3 | Entendimento do negócio, público e operação · Validação de estrutura, canais e acessos · Coleta de dados e briefing da IA |
| 2 | Implantação Técnica | Dias 3 a 7 | Configuração do WhatsApp oficial e canais · Integração com ferramentas e CRM · Testes iniciais de envio e recebimento |
| 3 | Estrutura e Treinamento do Time | Dias 5 a 7 | Criação da estrutura de atendimento e equipes · Configuração do CRM, funil e processos · Organização de automações, campanhas e templates · Treinamento prático do dia a dia p/ o time |

**Segundo grid** — substituir `grid-cols-2` por coluna única centralizada (`max-w-lg mx-auto`):

| Etapa | Título | Dias | Itens |
|---|---|---|---|
| 4 | Criação, validação e ativação da IA | De 7 a 14 dias úteis | Desenvolvimento dos agentes · Criação de fluxos, base de conhecimento e regras · Testes, ajustes e validação com o cliente |

**Fechamento** (mantido como está):
"Você não recebe só uma ferramenta. Recebe uma operação estruturada, com processos, equipe treinada e agentes inteligentes prontos para atuar e acompanhamento contínuo."

### Resumo técnico

- Arquivo: `src/pages/Aive.tsx`
- Mesclar etapas 3+4 em uma só (4 itens)
- Etapa 5 vira etapa 4 com 3 itens (remover os 2 últimos itens antigos)
- Trocar segunda grid de `grid-cols-2` para coluna única centralizada

