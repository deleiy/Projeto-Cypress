import { AppActions } from '../support/appActions'

const app = new AppActions()

describe('Testes de Login', () => {

  it('Login usando AppActions', () => {

    cy.visit('/minha-conta')

    app.login('teste@teste.com', '123456')

  })

  it('Login positivo com intercept', () => {

    cy.intercept('POST', '**/minha-conta/*').as('loginSucesso')

    cy.visit('/minha-conta')

    cy.get('#username').type('teste@teste.com')

    cy.get('#password').type('123456')

    cy.get('.woocommerce-form > .button').click()

  })

  it('Login negativo com intercept', () => {

    cy.intercept('POST', '**/minha-conta/*').as('loginErro')

    cy.visit('/minha-conta')

    cy.get('#username').type('errado@teste.com')

    cy.get('#password').type('000000')

    cy.get('.woocommerce-form > .button').click()

  })

})