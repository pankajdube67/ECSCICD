const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1> CICD on ECS is Implemented successfully by Pankaj </h1>"));

app.listen(80, () => {
  console.log("App listening on port 80!");
});
