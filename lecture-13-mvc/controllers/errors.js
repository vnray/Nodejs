
exports.pageNotFound = (req, res, next) => {
  res.status(404).render('404',{pageTitle:"404 page", currentPage:"404"});
}