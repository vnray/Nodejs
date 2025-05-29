
const Home = require('../models/home')

exports.getHome = (req, res) => {
  const homes = Home.fetchAll()
  res.render('home', {regHome:homes, pageTitle:"Airbnb home", currentPage:"home"});
}

exports.getAddHome = (req, res) => {
  res.render('addHome', {pageTitle:"add Home", currentPage:"add-home"});
}
// const regHome = []
exports.getSuccessAdded = (req, res) => {
  console.log(req.body)
  const {homeName,price,location,imgUrl,rating} = req.body;
  const home = new Home(homeName, price, location, imgUrl, rating)
  home.save()

  res.render('successHome', {pageTitle:"home added success", currentPage:"successHome"});
}