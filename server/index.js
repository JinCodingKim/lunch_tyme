require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const nomCtrl = require("./controllers/nomController");

const app = express();
const port = process.env.PORT || 3001;

app.use(json());
app.use(cors());

app.get("/api/restaurants", nomCtrl.getRestaurants);
app.get("/api/restaurant/:name", nomCtrl.getRestaurantInfo);

app.listen(port, () => console.log("Eating burgers at: " + port));
