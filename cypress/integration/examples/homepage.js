describe('Homepage', () => {
  it('Has correct title', () => {
    cy.visit('/')
    cy.contains('STRV Starter')
  })
})
