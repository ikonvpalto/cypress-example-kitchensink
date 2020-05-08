context('Error async', () => {
  beforeEach(() => {
    cy.on('window:before:load',
      (win) => {
        win.console.errors = []
        win.console.error = function () {
          expect(true).to.be.false
        }
      })
  })

  it('test', () => {
    cy.visit('http://localhost:8080/')
  })
})
