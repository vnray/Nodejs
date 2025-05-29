const express = require("express");
const userRouter = express.Router();
const path = require("path");
const rootPath = require("../utils/pathUtils");
// app.use(express.static(path.join(__dirname, 'public')))
// const pathName = path.join(rootPath, "views", "home.html");
const {regHome} = require('./hostRoute')
userRouter.get("/", (req, res) => {
  res.render('home', {regHome, pageTitle:"Airbnb home", currentPage:"home"});
});

module.exports = userRouter;
