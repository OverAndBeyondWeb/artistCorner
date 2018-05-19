const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("welcome, this an express app"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));
