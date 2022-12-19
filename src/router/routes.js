import bookController from "../controller/bookController.js";
import userController from "../controller/userController.js";
import authController from "../controller/authController.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World by Do Duc Hieu!");
  });

  app.post("/sign-up", authController.signUp);
  app.post("/sign-in", authController.signIn);

  app.get("/get-all-book", bookController.getAllBook);
  app.get("/get-detail-book", bookController.getDetailBook);
  app.delete("/delete-book", bookController.deleteBook);
  app.post("/create-book", bookController.createBook);
  app.put("/update-book", bookController.updateBook);

  app.get("/get-all-user", userController.getAllUser);
};

export default routes;
