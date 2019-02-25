
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
