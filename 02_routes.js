const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const app = express();

// Parsing req.body for post requests
app.use(bodyParser.json());

// Query params
app.get("/name", (req, res) => {
  const { name } = req.query;

  res.send(`Hello ${name}, I am a server 🤓`);
});

// Route params
app.get("/name/:name", (req, res) => {
  const { name } = req.params;

  res.send(`Hello ${name}, I am a server 🤓`);
});

// Body params
app.post("/name", (req, res) => {
  const { name } = req.body;

  res.send({ message: `Hello ${name}, I am a server 🤓` });
});

// execute in the browser and see the response
function testPostRequest() {
  fetch("http://localhost:3000/name", {
    method: "post",
    body: JSON.stringify({ name: "Or" }),
  })
    .then((j) => j.json())
    .then((res) => console.log("res: ", res));
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
