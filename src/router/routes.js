import bookController from "../controller/bookController.js";
import userController from "../controller/userController.js";
import authController from "../controller/authController.js";
import cartController from "../controller/cartController.js";

const routes = (app) => {

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  //sign in & sign up
  app.post("/sign-up", authController.signUp);
  app.post("/sign-in", authController.signIn);

  //book api
  app.get("/get-all-book", bookController.getAllBook);
  app.get("/get-detail-book", bookController.getDetailBook);
  app.delete("/delete-book", bookController.deleteBook);
  app.post("/create-book", bookController.createBook);
  app.put("/update-book", bookController.updateBook);

  //user api
  app.get("/get-all-user", userController.getAllUser);

  //cart api
  app.get("/get-all-cart", cartController.getAllCartByUserName);
  app.post("/add-to-cart", cartController.AddOrUpdateCart);
  app.post("/remove-from-cart", cartController.removeFromCart);

};

export default routes;
