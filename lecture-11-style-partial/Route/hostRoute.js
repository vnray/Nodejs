const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootPath = require("../utils/pathUtils");

// const pathName = path.join(rootPath, "views", "addHome.html");


hostRouter.get("/add-home", (req, res) => {
  res.render('addHome', {pageTitle:"add Home", currentPage:"add-home"});
});

const regHome = []
// const pathName2 = path.join(rootPath, "views", "successHome.html");
hostRouter.post("/add-home", (req, res) => {
regHome.push(req.body)
  res.render('successHome', {pageTitle:"home added success"});
});

exports.hostRouter = hostRouter;
exports.regHome = regHome;
