describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the home page', () => {
    // Vérifier que la page se charge correctement
    cy.get('body').should('be.visible')
  })

  it('should have main navigation elements', () => {
    // Vérifier la présence des éléments de navigation
    cy.get('nav').should('exist')
  })

  // Ajoutez d'autres tests selon vos besoins
})
