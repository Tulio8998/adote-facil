const email = 'larissa@gmail.com';
const senha = '12345678';

describe('Iniciar uma conversao', () => {
  it('deve permitir adotante ver lista de conversar ativas para acessar e continuar o dialogo', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(senha)
    cy.contains('button', 'Login').click()

    cy.url().should('include', '/area_logada/animais_disponiveis');
    cy.get('a[href="/area_logada/conversas"]').filter(':visible').first().should('be.visible').click();
    cy.wait(3000);
    cy.get('.sc-de6d9b2f-2.bOsSGy')
      .first()
      .should('be.visible')
      .click();
  })
})