import express from "express";
import { startDatabase } from "./database";
import "dotenv/config";
import router from "./Routes/Routes";

const app = express();

app.use(express.json());
app.use("", router);

export default app.listen(3333, () => {
  startDatabase();
  console.log("Server running");
});
