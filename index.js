const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Youtubers ! Welocome to this app");
});

app.listen(8089, () => {
 console.log("Listening on port 8089");
});