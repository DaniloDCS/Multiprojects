"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _apps = require('./apps'); var _apps2 = _interopRequireDefault(_apps);

const route = _express.Router.call(void 0, );

route.get("/", (req, res) =>
  res.render("index", { layout: false, apps: _apps2.default })
);

route.get("/home", (req, res) => res.send("Home"));

_apps2.default.forEach((page) => {
  let title = page.title;
  route.get(`/${title.replace("_", "")}`, (req, res) => {
    res.render(`pages/${title}`, {
      title,
    });
  });
});

exports. default = route;
