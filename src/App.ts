import express from "express";
import cors from "cors";
import layouts from "express-ejs-layouts";
import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
    this.express.use(cors());
    this.express.set("view engine", "ejs");
    this.express.use(layouts);
    this.express.use("/public", express.static("/public/"));
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
