const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("ci / cd with githuhb actions &  sekalian deploy");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
