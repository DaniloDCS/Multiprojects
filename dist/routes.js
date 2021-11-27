"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _crossfetch = require('cross-fetch'); var _crossfetch2 = _interopRequireDefault(_crossfetch);

const route = _express.Router.call(void 0, );

route.get("/", (req, res) =>
  res.render("index", { layout: false })
);

route.get("/home", (req, res) => res.send("Home"));

_crossfetch2.default.call(void 0, 
  "https://api.github.com/repos/DaniloDCS/Multiprojects/contents/public/css"
)
  .then((response) => response.json())
  .then((res) => {
    res.forEach((page) => {
      let title = page.name.replace(".css", "");

      route.get(`/${title.replace("_", "")}`, (req, res) =>
        res.render(`pages/${title}`, {
          title,
        })
      );
    });
  })
  .catch((err) => {});

exports. default = route;
