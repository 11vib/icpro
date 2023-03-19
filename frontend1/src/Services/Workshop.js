// import axios from 'axios';
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// const getgetCourses = async() => {
//    //why "await"
//    const response = await axios.get(`mongodb+srv://vibha:vibha@cluster0.ufb9ob8.mongodb.net/VDataBase`)
//    return response.data;
// }
//  const postCourses = async(workshop)=>{
//    const response = await axios.post(
//       'mongodb+srv://vibha:vibha@cluster0.ufb9ob8.mongodb.net/VDataBase',
//       workshop,{
//          'Content-Type':'application/json'
//       }
//    );
//    return response.data;
//  }
// export {getgetCourses,postCourses};
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Database Connection
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://vibha:vibha@cluster0.ufb9ob8.mongodb.net/VDataBase")
  .then(() => {
    console.log("MongoDb is connected!");
  })
  .catch(() => {
    console.log("Error!");
  });

//Insert Data to Database
app.post("/submit", (req, res) => {
  const data = req.body.data;
  let conn = mongoose.connection;

  conn.collection("pro").insertOne(data, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("Data Inserted");
      res.status(200).send("sucess");
    }
  });
});

//Server Connectiion
app.listen(3100, () => {
  console.log("Server connected at 3100 port");
});

//Test API
app.get("/", (req, res) => {
  res.send("Hello from server!!!");
});