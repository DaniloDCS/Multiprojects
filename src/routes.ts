import { Router, Request, Response } from "express";

const route = Router();

route.get("/", (req: Request, res: Response) =>
  res.render("index", { layout: false })
);

route.get("/home", (req: Request, res: Response) => res.send("Home"));

for (let index = 0; index < 10; index++) {
  route.get(`/router${index}`, (req: Request, res: Response) =>
    res.send(`/router${index}`)
  );
}

export default route;
