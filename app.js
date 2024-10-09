const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1>Hello from AWS ECS , CICD on ECS Implemented successfully </h1>"));

app.listen(80, () => {
  console.log("App listening on port 80!");
});
