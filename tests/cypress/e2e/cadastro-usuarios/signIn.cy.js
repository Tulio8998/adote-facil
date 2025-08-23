const email = 'larissa@gmail.com';
const senha = '12345678';

describe('Fluxo de Login', () => {
  it('deve permitir que um usuário cadastrado faça login com sucesso', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(senha)
    cy.contains('button', 'Login').click()
  })
})


