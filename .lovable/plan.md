

## Plano: Atualizar textos dos cards da Seção 3

### O que muda

Atualizar os nomes dos 14 cards no arquivo `src/constants/aiveFeatures.ts` para melhorar a concordância verbal, usando verbos conjugados na terceira pessoa do plural. Também remover os dois últimos cards (ids 14 e 15 — "Personalizada para cada negócio" e "Adaptações constantes") pois o usuário listou apenas 13 itens, substituindo o card 14 por "Se adaptam a cada negócio".

### Mapeamento dos textos

| Card atual | Novo texto |
|---|---|
| Atende 24/7 | Atendem 24/7 |
| Múltiplos atendimentos em simultâneo | Múltiplos atendimentos simultaneamente |
| Qualificação de lead | Qualificam leads |
| Cadastro do cliente | Cadastram clientes |
| Direcionamento para equipes | Direcionam para as equipes |
| Criação de cards no CRM | Criam cards no CRM |
| Insere resumos nos cards no CRM | Criam resumos automaticamente |
| Follow-up e lembretes | Fazem follow-ups |
| Reativação de leads parados | Reativam leads parados |
| Agendamentos automáticos | Realizam agendamentos |
| Links de compra | Enviam links de compra |
| Geração de orçamentos | Geram orçamentos |
| Personalizada para cada negócio | Se adaptam a cada negócio |
| Adaptações constantes | *(removido)* |

### Arquivo editado

- `src/constants/aiveFeatures.ts` — atualizar propriedade `name` de cada item e remover o último card (id 15).

### Detalhe técnico

- Remover o import de `Wrench` do lucide-react (não será mais usado).
- O array passará de 14 para 13 itens.

