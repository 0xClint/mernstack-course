require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
const express = require("express");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts/", workoutRoutes);

//connect to db
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}!!!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
