class ProductSearchPage {
    visit(): void {
        cy.visit("https://dev.market.orion.global/es/store/");
    }

    searchProduct(productName: string): void {
        cy.xpath("//input[@placeholder='Buscar productos']").should("be.visible").type(`${productName}{enter}`);
    }


    clickFilter(productName: string): void {
        cy.xpath(`//span[contains(text(), '${productName}')]/ancestor::label`)
            .should("exist")
            .click();
    }

    validateResults(): void {
        cy.xpath("(//div[contains(@class, 'MuiGrid2-root')])[1]//div")
            .should("have.length.greaterThan", 0)
            .then(() => {
                cy.log(" Se encontró al menos un producto dentro del contenedor.");
            });
    }

    captureFirstProductDetails(): void {
        cy.xpath("(//a[contains(@class, 'MuiButtonBase-root') and contains(., 'Comprar')])[1]")
            .should("exist")
            .scrollIntoView()
            .click({ force: true });

        cy.xpath("(//ol[contains(@class, 'MuiBreadcrumbs-ol')]//li)[last()]")
            .should("be.visible")
            .invoke("text")
            .then((productName) => {
                // Capturar el precio del producto
                cy.xpath("//button[contains(@class, 'MuiButton-containedSuccess')]//span[contains(text(), 'USD')]")
                    .invoke("text")
                    .then((productPrice) => {
                        cy.log(`Nombre del producto: ${productName} | Precio: ${productPrice}`);
                    });
            });

    }
}

export default new ProductSearchPage();
