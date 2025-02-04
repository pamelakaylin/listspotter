// DEPENDENCIES
import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";

// SERVER CONFIG
const app : Application = express();
const port = 3001;
const host = "127.0.0.1";

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

// CONNECTION TO DB & LISTENING TO PORT
app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}! 🐯`);
});
