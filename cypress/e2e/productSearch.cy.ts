import ProductSearchPage from "../pages/ProductSearchPage";

describe("Búsqueda y Validación de Productos", () => {
  beforeEach(() => {
    ProductSearchPage.visit();
  });

  it("Debe buscar un producto, validar resultados y capturar detalles", () => {
    const productName = "Google"; // Producto a buscar

    // Buscar el producto
    ProductSearchPage.clickFilter(productName);
    ProductSearchPage.validateResults();
    ProductSearchPage.captureFirstProductDetails();
  });
});
