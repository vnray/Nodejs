const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootPath = require("../utils/pathUtils");

const pathName = path.join(rootPath, "Views", "addHome.html");

hostRouter.get("/add-home", (req, res) => {
  res.sendFile(pathName);
});
const pathName2 = path.join(rootPath, "Views", "successHome.html");
hostRouter.post("/add-home", (req, res) => {
  const { homeName } = req.body;
  res.sendFile(pathName2);
});

module.exports = hostRouter;
