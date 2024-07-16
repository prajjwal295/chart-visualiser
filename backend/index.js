const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const EnergyData = require("./models/EnergyData");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.use(cors(corsOptions));

mongoose
  .connect(
    "mongodb+srv://prajjwal295:prajjwal@cluster0.x5ftfqq.mongodb.net/",
    {}
  )
  .then(() => {
    console.log("db successfull");
  })
  .catch((err) => {
    console.log("db error");
    console.error(err);
    process.exit(1);
  });

app.get("/api/data", async (req, res) => {
  try {
    const data = await EnergyData.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/PostData", async (req, res) => {
  try {
    const newData = new EnergyData(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
