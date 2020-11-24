const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Goodmorning!");
});

app.listen(8089, () => {
 console.log("Listening on port 8089");
});
~
