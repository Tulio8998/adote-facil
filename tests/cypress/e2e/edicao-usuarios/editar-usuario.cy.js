const email = 'larissa@gmail.com';
const senha = '12345678';
const novoEmail = 'larissa@gmail.com';
const nomeNovo = 'Larissa';
const novaSenha = '12345678';

describe('Inici=r uma conversao', () => {
  it('deve permitir adotante ver lista de conversar ativas para acessar e continuar o dialogo', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(senha)
    cy.contains('button', 'Login').click()

    cy.url().should('include', '/area_logada/animais_disponiveis');
    cy.get('a[href="/area_logada/editar_dados"]').filter(':visible').first().should('be.visible').click();
    cy.contains('label', 'Nome').find('input').clear().type(nomeNovo)
    cy.contains('label', 'Email').find('input').clear().type(novoEmail)

    cy.contains('button', 'Alterar senha').click()
    
    cy.contains('label', 'Nova Senha').find('input').type(novaSenha)
    cy.contains('label', 'Confirmar nova senha').find('input').type(novaSenha)

    cy.contains('button', 'Salvar alterações').click()
  })
})