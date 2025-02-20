class CartPage {
    visit(): void {
      cy.visit("https://dev.market.orion.global/es/cart/");
    }
  
    validateProductsInCart(productNames: string[]): void {
      // Verifica que cada producto agregado aparece en el carrito
      productNames.forEach((productName) => {
        cy.xpath(`//div[contains(@class, 'cart-item')]//p[contains(text(), '${productName}')]`)
          .should("be.visible");
      });
    }
  
    validateTotalPrice(expectedTotal: number): void {
      // Captura el precio total mostrado en el carrito
      cy.xpath("//span[contains(@class, 'total-price')]")
        .invoke("text")
        .then((totalText) => {
          const totalDisplayed = parseFloat(totalText.replace("USD", "").trim());
          expect(totalDisplayed).to.eq(expectedTotal);
          cy.log(` Precio total validado: ${totalDisplayed} USD`);
        });
    }
  }
  
  export default new CartPage();
  