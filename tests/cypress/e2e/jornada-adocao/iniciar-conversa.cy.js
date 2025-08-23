const email = 'larissa@gmail.com'
const senha = '12345678'
const mensagem = 'Olá, tenho interesse no animal anunciado!'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Iniciar conversa entre usuário adotante e doador', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(senha)
    cy.contains('button', 'Login').click()
    cy.url().should('include', '/area_logada/animais_disponiveis')
  });

  it('Adotante deve iniciar conversa', () => {
    cy.contains('button', 'Saiba mais').click()
    cy.contains('button', 'Entrar em contato com o dono').click();

    cy.get('input[placeholder="Digite sua mensagem"]').type(mensagem)

    cy.get('form button').click()
  });
});
