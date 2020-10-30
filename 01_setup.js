const express = require("express");

const port = process.env.PORT || 4000;

const app = express();

app.get("/*", (req, res) => {
  res.send("Hello there, I am a server 🤓");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
