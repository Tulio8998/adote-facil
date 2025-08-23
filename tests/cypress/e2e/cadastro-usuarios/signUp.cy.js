const nome = 'Larissa';
const email = 'larissa@gmail.com';
const senha = '12345678';

describe('Fluxo de Cadastro de Usuário', () => {
  it('deve permitir que um novo usuário se cadastre com sucesso', () => {
    cy.visit('http://localhost:3000/cadastro')
    cy.contains('label', 'Nome').find('input').type(nome)
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(senha)
    cy.get('input[name="confirmPassword"]').type(senha)
    cy.contains('button', 'Cadastrar').click()
    cy.url().should('include', '/login')
  })
})

