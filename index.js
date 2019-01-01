const express = require("express");
const app = express();
const port = +process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send(`Hello from Node ${process.version}`);
});

app.get("/api/setup", (req, res) => {
  res.status(200).send({ message: "setup completed!" });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
