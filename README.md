# Fluxo de trabalho de Gitflow

[Fonte de estudo](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)


## Projeto

Além de testar o git flow e estudar sobre o workflow, decidi implementar um projeto mais solido onde vou poder testar e implementar recursos que já conheço o fundamento, que já criei diversas vezes utilizando [Node.JS](https://nodejs.org/) com [Express](https://expressjs.com/pt-br/), porém nesse projeto quero implementar utilizando o [Deno](https://deno.land/)!

As features desenvolvidas furamente eu vou elencar na seção **Features**.

## Iniciando a aplicação

Após clonar o projeto, abra-o com o Visual Studio Code.

Algumas configurações são necessarias para desenvolver para o [Deno](https://deno.land/), além de o instalar.

Em Extensions do Visual Studio Code, busque e instale pela extenção *denoland.vscode-deno*, após instalada, pressione CTRL + SHIFT + P (Teclas de atalho padrão para abrir o menu de configurações do Code) e busque por **Deno: Initialize Workspace Configuration**, selecione a opção e responda yes para as duas configurações posteriores e pronto, o Visual Studio Code vai estar pronto para desenvolver para o Deno!

Agora no seu terminal, digite:

`
    deno run --allow-net main.ts
`

Após receber a mensagem de *Servidor Iniciado*, acesse o link exibido no terminal ou o link abaixo (Configuração padrão).

`
    http://localhost:8080
`

