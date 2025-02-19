const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD with Node.js! dan ini edited");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
