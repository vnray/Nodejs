const express = require("express");
const path = require("path");
const userRouter = require("./Route/userRoute");
const {hostRouter} = require("./Route/hostRoute");
const rootPath = require("./utils/pathUtils");
const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(userRouter);
app.use("/host", hostRouter);

// const pathName = path.join(rootPath, "views", "404.html");
app.use((req, res, next) => {
  res.status(404).render('404',{pageTitle:"404 page"});
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running at port http://localhost:${PORT}`);
});
