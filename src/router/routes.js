import productController from "../controller/productController.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World by Do Duc Hieu!");
  });

  app.get("/get-all-product", productController.getAllProduct);
};

export default routes;
