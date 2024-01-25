const express = require('express');
const mongoose = require('mongoose');
const { TaskRouter } = require('./routes/task.routes');
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/tasks")
        .then((res) => console.log("💽 Database is Connected Successfully"))
        .catch((err) => console.log("Please Restart Server", err));

app.use(express.json()) 
app.use("/", TaskRouter);

app.get("*", (req, res) =>
    res
      .setStatus(404)
      .send("Route not Found!")
  );

app.listen(3000, () => {
    console.log("server is live!");
});