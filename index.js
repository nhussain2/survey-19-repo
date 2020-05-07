// import express library
const express = require("express");

// set up config to listen to incoming reqs for route handlers
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
