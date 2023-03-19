const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Database Connection
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://vibha:vibha@cluster0.ufb9ob8.mongodb.net/Pro")
  .then(() => {
    console.log("MongoDb is connected!");
  })
  .catch(() => {
    console.log("Error!");
  });

//Insert LoginData to Database
app.post("/Login", (req, res) => {
  const data = req.body.data;
  let conn = mongoose.connection;

  conn.collection("Logins").insertOne(data, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("Data Inserted");
      res.status(200).send("sucess");
    }
  });
});

//Insert SignUpData to Database
app.post("/Register", (req, res) => {
  const data = req.body.data;
  let conn = mongoose.connection;

  conn.collection("SignUps").insertOne(data, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("Data Inserted");
      res.status(200).send("sucess");
    }
  });
});

app.listen(3500, () => {
    console.log("Server connected at 3500 port");
  });

  app.get("/", (req, res) => {
    res.send("Hello from server!!!");
  });