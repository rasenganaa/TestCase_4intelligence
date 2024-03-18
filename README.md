# TestCase_4intelligence

Este repositório contém testes automatizados para o frontend e backend de uma aplicação utilizando o Cypress e o Postman, respectivamente.

## Teste Frontend

### Framework:
- Cypress

### Funcionalidade:
- Eu, como usuário, devo realizar login na aplicação com/s em sucesso.

### Cenários de Teste:
```gherkin
Funcionalidade: Login na Aplicação

Cenário: Login com sucesso
  Dado que estou na página de login
  Quando eu preencher o formulário com um usuário válido
  Então devo ser redirecionado para a página inicial

Cenário: Login sem sucesso
  Dado que estou na página de login
  Quando eu preencher o formulário com um usuário inválido
  Então devo ver uma mensagem de erro
```

### Requerido:
- Utilizar o browser = chrome

### Passos para Executar o Teste:
1. Clone este repositório.
2. Abra o terminal e navegue até a pasta do projeto.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm run cypress:open` para abrir o Cypress.
5. Clique no arquivo de teste `login.spec.js` para executar o teste.

## Teste Backend

### Ferramenta:
- Postman

### Funcionalidade:
- Eu, como usuário, devo realizar o CRUD (Create, Read, Update e Delete) do endpoint usuários.

### Cenários de Teste:
```gherkin
Funcionalidade: CRUD de Usuários

Cenário: Criar um usuário
  Dado que tenho acesso à API
  Quando eu enviar uma requisição para criar um usuário
  Então devo receber um Status Code 201 e uma mensagem de sucesso

Cenário: Ler um usuário
  Dado que tenho acesso à API
  Quando eu enviar uma requisição para ler um usuário existente
  Então devo receber um Status Code 200 e os dados do usuário

Cenário: Atualizar um usuário
  Dado que tenho acesso à API
  Quando eu enviar uma requisição para atualizar um usuário existente
  Então devo receber um Status Code 200 e uma mensagem de sucesso

Cenário: Deletar um usuário
  Dado que tenho acesso à API
  Quando eu enviar uma requisição para deletar um usuário existente
  Então devo receber um Status Code 204 e uma mensagem de sucesso
```

### Requerido:
- Validar sempre o Status Code e a mensagem exibida.

### Passos para Executar o Teste:
1. Importe a coleção de testes `serverest_dev.postman_collection.json` para o Postman.
2. Abra o Postman.
3. Selecione a coleção importada.
4. Clique em 'Runner' e selecione a coleção de testes.
5. Execute a coleção de testes.
