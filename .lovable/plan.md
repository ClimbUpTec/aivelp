# Plano — Pop-up do webchat (wts.chat) abrindo automaticamente na LP

## Objetivo
Instalar o widget de webchat da wts.chat na landing page e fazer o pop-up abrir automaticamente assim que a página carregar, em desktop e celular, em toda visita.

## O que será feito

1. **Adicionar o script do widget ao site** (`index.html`)
   - Inserir a tag do widget wts.chat no `<head>`:
     ```html
     <script
       type="application/javascript"
       src="https://cdn.wts.chat/scripts/widget/v2/h-widget-min.js"
       data-companyid="98e78dcc-1f7c-46b8-aeca-92c05fcddf1d"
       data-widgetid="144592e4-b53d-4ca8-ace4-b20971b177d6"
     ></script>
     ```
   - O widget carrega de forma assíncrona (busca a configuração num servidor) e só cria os elementos do pop-up depois disso.

2. **Abrir o pop-up automaticamente**
   - O script do widget expõe `window.hWidget.show("overlay")`, que abre o pop-up.
   - Adicionar um pequeno script no `index.html` que, após o carregamento da página, aguarda os elementos do widget existirem no DOM (verificação curta com repetição, já que o carregamento é assíncrono) e chama `hWidget.show("overlay")`.
   - Funciona em toda visita, sem memória de visitas anteriores.

3. **Verificar botão flutuante duplicado**
   - A LP já tem um botão flutuante próprio de WhatsApp (que redireciona para o WhatsApp). O widget pode criar o botão flutuante dele.
   - Ao testar: se dois botões aparecerem, esconder o botão flutuante do widget via CSS, mantendo o pop-up automático e o botão atual da página.

## Verificação
- Abrir a LP no navegador: o pop-up do webchat deve abrir sozinho logo após o carregamento.
- Fechar o pop-up (clique fora / botão fechar) e confirmar que o site volta ao normal.
- Testar também em viewport de celular.
- Checar o build no log de erros.
