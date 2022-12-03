import bookController from "../controller/bookController.js";
import userController from "../controller/userController.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World by Do Duc Hieu!");
  });

  app.get("/get-all-book", bookController.getAllBook);
  app.post("/create-new-book", bookController.createNewBook);
  app.get("/get-all-user", userController.getAllUser);
};

export default routes;
