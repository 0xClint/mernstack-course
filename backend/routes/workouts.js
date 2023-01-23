const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all Workouts
router.get("/", getWorkouts);

//GET a single Workouts
router.get("/:id", getWorkout);

//POST a new Workouts
router.post("/", createWorkout);

//DELETE a new Workouts
router.delete("/:id", deleteWorkout);

//PATCH a new Workouts
router.patch("/:id", updateWorkout);
module.exports = router;
