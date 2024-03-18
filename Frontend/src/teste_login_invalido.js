describe('Login na aplicação', () => { // Descreve o conjunto de testes para o login na aplicação
  beforeEach(() => { // Antes de cada teste, visita a página de login
    cy.visit('https://front.serverest.dev/');
  });

  it('Deve fazer login com sucesso', () => { // Testa o login com credenciais válidas
    cy.get('input[id="email"]').type('user@example.com'); // Insere o email
    cy.get('input[id="password"]').type('password'); // Insere a senha
    cy.get('button').click(); // Clica no botão de login

    cy.url().should('eq', 'https://front.serverest.dev/login'); // Verifica se a URL redirecionou para a página de login
  });

  it('Deve exibir mensagem de erro ao fazer login com credenciais inválidas', () => { // Testa o login com credenciais inválidas
    cy.get('input[id="email"]').type('invalid@example.com'); // Insere um email inválido
    cy.get('input[id="password"]').type('invalidpassword'); // Insere uma senha inválida
    cy.get('button').click(); // Clica no botão de login

    cy.url().should('eq', 'https://front.serverest.dev/login'); // Verifica se a URL redirecionou para a página de login
    cy.contains('Email e/ou senha inválidos'); // Verifica se a mensagem de erro é exibida
  });
});
