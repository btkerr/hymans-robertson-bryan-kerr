describe("basic template spec", () => {
  it("passes", () => {
    cy.visit(
      "https://main--673712a83fc20ae35be08554.chromatic.com/iframe.html?globals=&args=&id=technical-test-dashboard--user-interface&viewMode=story"
    );
    cy.get("h1").should("contain.text", "Welcome");
  });
});
