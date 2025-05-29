const express = require("express");
const userRouter = express.Router();
const path = require("path");
const rootPath = require("../utils/pathUtils");
// app.use(express.static(path.join(__dirname, 'public')))
// const pathName = path.join(rootPath, "views", "home.html");
const homeController = require('../controllers/homes')

userRouter.get("/", homeController.getHome);

module.exports = userRouter;
