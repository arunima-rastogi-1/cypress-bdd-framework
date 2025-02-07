const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve login.html file when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
