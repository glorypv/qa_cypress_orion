class ProductPage {
    visit(productUrl: string): void {
      cy.visit(productUrl);
    }
  

  clickAddLicensesButton(): void {
    // Selecciona el botón basado en su texto y clase
    cy.xpath("//button[contains(@class, 'MuiButton-containedPrimary') and contains(., 'Agregar licencias')]", { timeout: 30000 })
    .should("exist")
    .should("be.visible")
    .click({ force: true })
      
    cy.log(" Hizo clic en el botón 'Agregar Licencias'");
  }

  enterQuantity(quantity: string): void {
    // Ingresar el valor "1" en el input de cantidad
    cy.xpath("//input[@type='text' and contains(@class, 'MuiInputBase-input')]")
      .should("be.visible")
      .clear()
      .type(quantity);
    
    cy.log(` Se ingresó la cantidad: ${quantity}`);
  }

  selectRadioOption(): void {
    // 🔹 Hacer clic en el radio button con value "false"
    cy.xpath("//input[@class='PrivateSwitchBase-input mui-j8yymo']")
    .should("exist")
    .check({ force: true });
    
    cy.log(" Se seleccionó el radio button 'No'");
  }

  clickAddToCartButton(): void {
    // 🔹 Hacer clic en el botón "Agregar al Carro"
    cy.xpath("//button[contains(@class, 'MuiButton-containedPrimary') and contains(., 'Agregar al Carro')]")
      .should("be.visible")
      .click();
    
    cy.log(" Se hizo clic en el botón 'Agregar al Carro'");
  }

  clickContinueShopping(): void {
    // 🔹 Hacer clic en el botón "Continuar comprando"
    cy.xpath("//button[contains(., 'Continuar comprando')]")
      .should("exist")
      .should("be.visible")
      .click();

    cy.log(" Se hizo clic en el botón 'Continuar Comprando'");
  }

  
  
    captureProductPrice(): Cypress.Chainable<number> {
        // el precio del producto es difrente al total que se muestra
      return cy.xpath("//button[contains(@class, 'MuiButton-containedSuccess')]//span[contains(text(), '')]")
        .invoke("text")
        .then((priceText) => {
          return parseFloat(priceText.replace("", "").trim());
        });
    }
  }
  
  export default new ProductPage();
  