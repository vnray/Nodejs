const express = require("express");
const userRouter = express.Router();
const path = require("path");
const rootPath = require("../utils/pathUtils");

const pathName = path.join(rootPath, "Views", "home.html");

userRouter.get("/", (req, res) => {
  res.sendFile(pathName);
});

module.exports = userRouter;
