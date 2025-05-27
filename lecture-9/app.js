const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("2nd middleware", req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   console.log("3nd middleware", req.url, req.method);
//   res.send("<h1>this is the response</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("default path", req.url, req.method);
  res.send("<h1>enter your details</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at PORT:http://localhost:${PORT}`);
});
