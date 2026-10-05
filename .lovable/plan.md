# Plano — Pop-up do webchat (wts.chat) abrindo automaticamente na LP

## Objetivo
Instalar o widget de webchat da wts.chat na landing page e fazer o pop-up abrir automaticamente assim que a página carregar, em desktop e celular, em toda visita.

## O que será feito

1. **Adicionar o script do widget ao site** (`index.html`)
   - Inserir a tag oficial fornecida pelo painel da wts.chat no `<head>`:
     ```html
     <script
       type="application/javascript"
       src="https://cdn.wts.chat/scripts/widget/v3/h-widget-min.js"
       data-widget="landing-page-climb-up-54b80e"
     ></script>
     ```
   - O widget carrega de forma assíncrona (busca a configuração no servidor) e só cria os elementos do pop-up depois disso.

2. **Abrir o pop-up automaticamente**
   - Adicionar um pequeno script no `index.html` que, após o carregamento da página, aguarda o widget existir no DOM (verificação curta com repetição, já que o carregamento é assíncrono).
   - Tentar primeiro a API do widget (ex.: `window.hWidget.show(...)`, se exposta pela v3); se não houver API pública, simular o clique no botão flutuante do próprio widget para abrir o pop-up.
   - Funciona em toda visita, sem memória de visitas anteriores.

3. **Verificar botão flutuante duplicado**
   - A LP já tem um botão flutuante próprio de WhatsApp (que redireciona para o WhatsApp). O widget pode criar o botão flutuante dele.
   - Ao testar: se dois botões aparecerem, esconder o botão flutuante do widget via CSS, mantendo o pop-up automático e o botão atual da página.

## Verificação
- Abrir a LP no navegador: o pop-up do webchat deve abrir sozinho logo após o carregamento.
- Fechar o pop-up (clique fora / botão fechar) e confirmar que o site volta ao normal.
- Testar também em viewport de celular.
- Checar o build no log de erros.
