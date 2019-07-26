const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3006;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
