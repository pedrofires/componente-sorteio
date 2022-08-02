const express = require("express");
const routes = express();

const redirect = require("./controllers/redirect");

routes.get("/", redirect);

module.exports = routes;
