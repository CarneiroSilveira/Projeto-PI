const express = require("express");
// const cors = require("cors");
const database = require("./config/database");
require('dotenv').config()

const app = express();
app.use(express.json());

// app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.listen(process.env.PORT, (_) => {
    console.log(`Server running on port ${process.env.PORT}`);
});