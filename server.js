const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

mongoose.connect("mongodb://127.0.0.1:27017/BlackCoffee", {
  useNewUrlParser: true
});
//
let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // app.use(express.static(path.join(__dirname, "client/build")));
  app.use(express.static(__dirname + "/client/build"));
}

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "client/build/index.html"));
// });

app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
