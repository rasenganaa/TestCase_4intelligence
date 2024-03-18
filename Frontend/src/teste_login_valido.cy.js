describe('Login na aplicação', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/');
  });

  it('Deve fazer login com credenciais válidas', () => {
    // Cria uma nova conta de usuário
    cy.get('a[href="/cadastro"]').click(); // Clica no link para abrir a tela de cadastro
    cy.get('input[id="nome"]').type('Ana Teste');
    cy.get('input[id="email"]').type('ana@teste.com');
    cy.get('input[id="password"]').type('ana.teste123');
    cy.get('input[id="administrador"]').check(); // Marca o campo "Cadastrar como admin"
    cy.get('button').click(); // Clica no botão de cadastrar

    // Verifica se foi redirecionado para a página home
    cy.url().should('eq', 'https://front.serverest.dev/home');
  });
});
