const email = 'larissa@gmail.com'
const senha = '12345678'
const nomeAnimal = 'Zigo'
const tipoAnimal = 'Gato'
const generoAnimal = 'Macho'
const racaAnimal = 'Manchado'

describe('Funcionalidades de busca de animal via filtros', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(senha)
    cy.contains('button', 'Login').click()
  })

  it('Deve filtrar um animal com sucesso ao preencher todos os campos', () => {
    cy.contains('button', 'Filtrar').click()

    cy.contains('label', 'Nome').find('input').type(nomeAnimal)

    cy.contains('button[role="combobox"]', 'Selecione um tipo')
      .scrollIntoView()
      .click()
    
    cy.get('[role="option"]')
      .contains(tipoAnimal)
      .click()

    cy.contains('button[role="combobox"]', "Selecione um gênero")
      .scrollIntoView()
      .click()

    cy.get('[role="option"]')
      .contains(generoAnimal)
      .click()

    cy.contains('label', 'Raça').find('input').type(racaAnimal)
    
    cy.get('[role="dialog"][data-state="open"]')
      .contains('button', "Filtrar")
      .click()
  })
})
