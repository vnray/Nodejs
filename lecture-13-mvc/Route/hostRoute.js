const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootPath = require("../utils/pathUtils");

// const pathName = path.join(rootPath, "views", "addHome.html");
const addHomeController = require("../controllers/homes")

hostRouter.get("/add-home", addHomeController.getAddHome);

const successAddedController = require("../controllers/homes")

// const pathName2 = path.join(rootPath, "views", "successHome.html");
hostRouter.post("/add-home", successAddedController.getSuccessAdded);

exports.hostRouter = hostRouter;

