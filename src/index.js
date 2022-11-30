import express from "express";
import env from "dotenv";
import routes from "./router/routes.js";
import connect from "./model/connectDB.js";

const app = express();
env.config();
const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL;

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  routes(app);
  await connect(dbUrl);
});
