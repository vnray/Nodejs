const express = require("express");
const userRouter = require("./Route/userRoute");
const hostRouter = require("./Route/hostRoute");
const app = express();
const path = require("path");
const rootPath = require("./utils/pathUtils");

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host", hostRouter);

const pathName = path.join(rootPath, "Views", "404.html");
app.use((req, res, next) => {
  res.status(404).sendFile(pathName);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running at port http://localhost:${PORT}`);
});
