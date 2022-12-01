import bookController from "../controller/bookController.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World by Do Duc Hieu!");
  });

  app.get("/get-all-book", bookController.getAllBook);
};

export default routes;
