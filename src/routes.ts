import { Router, Request, Response } from "express";
import fetch from "cross-fetch";

const route = Router();

route.get("/", (req: Request, res: Response) =>
  res.render("index", { layout: false })
);

route.get("/home", (req: Request, res: Response) => res.send("Home"));

fetch(
  "https://api.github.com/repos/DaniloDCS/Multiprojects/contents/public/css"
)
  .then((response: any) => response.json())
  .then((res: any) => {
    res.forEach((page) => {
      let name = page.name.replace(".css", "");

      route.get(`/${name}`, (req: Request, res: Response) =>
        res.render(`pages/${name}`)
      );

    });
  })
  .catch((err) => {});

export default route;
