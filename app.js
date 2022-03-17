const express = require("express");
const res = require("express/lib/response");

const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server corriendo en pueto ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home2.html"));
});
