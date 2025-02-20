import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";

describe("Agregar Productos al Carrito desde el Menú", () => {
  let productNames: string[] = [];
  let totalPrice = 0;

  it("Debe agregar dos productos al carrito y validar el precio total", () => {

    const username = "cuentademoorionhub@gmail.com";
    const password = "12345678Fs";
   LoginPage.visit();
       LoginPage.clickNavigateToLogin();
       LoginPage.enterUsername(username);
       LoginPage.enterPassword(password);
       LoginPage.clickLogin();

    const products = [
      { url: "https://dev.market.orion.global/es/subscription/660b7d867d0453f28974f283/", name: "" },
     // { url: "https://dev.market.orion.global/es/subscription/65612580204e858bcdf3daff/", name: "" }
    ];

    products.forEach((product) => {
      ProductPage.visit(product.url);
      ProductPage.clickAddLicensesButton();
      ProductPage.clickAddLicensesButton();
      ProductPage.enterQuantity("1");
      ProductPage.selectRadioOption();
      ProductPage.clickAddToCartButton();
      // ProductPage.clickContinueShopping();
    });

    CartPage.visit();
    CartPage.validateProductsInCart(productNames);
  });
});
