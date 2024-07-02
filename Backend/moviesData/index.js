const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./queries");
const port = 3001;
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Movies Api is working");
});
// movies table
app.get("/movies", db.getMovies);
app.get("/movies/:id", db.getMoviesById);
app.post("/movies", db.createMovies);
app.put("/movies/:id", db.updateMovies);
app.delete("/movies/:id", db.deleteMovies);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
