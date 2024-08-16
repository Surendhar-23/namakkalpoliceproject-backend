const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./Routes/Routes");
const db = require("./db");

const app = express();
app.use(bodyParser.json());
app.use(cors());

db();
app.use("/api", router);

app.listen(3000, () => console.log("server running"));
