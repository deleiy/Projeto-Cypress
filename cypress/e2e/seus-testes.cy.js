describe('Teste básico do sistema', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve abrir a página inicial', () => {
    cy.title().should('not.be.empty')
  })

  it('Deve acessar a página Minha Conta', () => {
    cy.contains('Minha conta').click()

    cy.url().should('include', 'minha-conta')
  })

  it('Deve pesquisar um produto', () => {
    cy.get('.search-form > .search-field')
      .type('Camiseta{enter}')

    cy.url().should('include', 's=Camiseta')
  })
})