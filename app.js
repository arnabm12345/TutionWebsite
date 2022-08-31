const express = require("express");
const app = express();
const port = 80;
app.use('/satic',express.static('static'))
app.get("/", (req, res) => {
  res.send("This is my first home express app with Harry");
});
app.get("/about", (req, res) => {
  res.status(200).send("This is my first about express app with Harry");
});
app.post("/about", (req, res) => {
    res.status(404).send("This Page is not found");
  });

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
