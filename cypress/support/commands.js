Cypress.Commands.add('login', (usuario, senha) => {
  cy.visit('/wp-login.php')

  cy.get('#user_login').should('be.visible').type(usuario)
  cy.get('#user_pass').should('be.visible').type(senha)
  cy.get('#wp-submit').click()
})

Cypress.Commands.add('loginViaAppAction', (user) => {
  cy.window().then((win) => {
    win.localStorage.setItem('user', JSON.stringify(user))
  })
})