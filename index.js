const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("server says 'Hello'");
});

app.listen(port, () => {
  console.log(`server listening port ${port}`);
  console.log(`http://localhost:${port}/`);
});
