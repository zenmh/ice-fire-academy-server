const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
// const datas = require("./data/data.json");
const datas = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Ice can be fireeeeeeeeeeeeeeeeee");
});

app.get("/data", (req, res) => {
  res.send(datas);
});

app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const data = datas.find((dt) => dt._id == id);
  res.send(data);
});

// app.get("/data/:id", (req, res) => {
//   const id = req.params.id;
//   const data = datas.find((dt) => dt.id == id);
//   res.send(data);
// });

app.listen(port, () => {
  console.log("Ice fire is running ", port);
});
