import { Router, Request, Response } from "express";
import fetch from "cross-fetch";
import apps from "./apps";

const route = Router();

route.get("/", (req: Request, res: Response) =>
  res.render("index", { layout: false, apps })
);

route.get("/home", (req: Request, res: Response) => res.send("Home"));

apps.forEach((page) => {
  let title = page.title;
  route.get(`/${title.replace(/_/g, "")}`, (req: Request, res: Response) => {
    res.render(`pages/${title}`, {
      title,
    });
  });
});

export default route;
