const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const app = express();

// Middleware for parsing req.body for post requests
app.use(bodyParser.json());

// Middleware to add data to our request object
app.use((req, res, next) => {
  req.user = { name: "Not sure 🤔" };
  next();
});

// Middleware to validate something
app.use((req, res, next) => {
  if (req.url === "/hello") {
    next();
  } else {
    res.send(`Try the "/hello" route 🤓`);
  }
});

// any type of request: GET, POST, PUT, DELETE
// to route hello
app.use("/hello", (req, res) => {
  res.send(`Hello there, I am a server 🤓`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
