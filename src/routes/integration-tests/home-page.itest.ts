it("launch home page", () => {
  cy.visit("/")
  cy.contains("Hi, I'm Yugandhar. Nice to meet you.").should("be.visible")
})
