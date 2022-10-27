const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const courses = require("./data/courses.json");
const teachers = require("./data/teacher.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Ice can be fireeeeeeeeeeeeeeeeee");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((crs) => crs._id == id);
  res.send(course);
});

app.get("/teachers", (req, res) => {
  res.send(teachers);
});

app.listen(port, () => {
  console.log("Ice fire is running ", port);
});
