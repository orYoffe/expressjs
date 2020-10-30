const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;

const app = express();

// Adds some headers for security 🔐
app.use(helmet());
// Enables other domain origins to connect ot this server
app.use(cors());
// Logs requests
app.use(morgan("dev"));
// Compressing response to gzip
app.use(compression());
// Parsing req.body for post requests
app.use(bodyParser.json());
// Parsing req.cookie
app.use(cookieParser());

app.use("/", (req, res) => {
  res.send(`Hello there, I am a server 🤓`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
