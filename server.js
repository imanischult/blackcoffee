const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
<<<<<<< HEAD
const coffeeRoutes = require("./routes/api/coffee");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/BlackCoffee", { useNewUrlParser: true });

app.use(coffeeRoutes);
=======
const routes= require('./routes')
const mongoose= require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/BlackCoffee', { useNewUrlParser: true })
//
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("public"));
}

app.use(routes);
>>>>>>> 16201b5d04b35f65a0ec88540883fab05a358824

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
