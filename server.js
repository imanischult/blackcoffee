const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const coffeeRoutes = require("./routes/api/coffee");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/BlackCoffee", { useNewUrlParser: true });

app.use(coffeeRoutes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
