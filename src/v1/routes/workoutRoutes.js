const express = require('express')
const router = express.Router()

const workoutControllers = require("../../controllers/workoutController")



router
    .get('/', workoutControllers.getAllWorkouts )
    .get('/:id', workoutControllers.getOneWorkout )
    .post('/', workoutControllers.createNewWorkout)
    .patch('/:id', workoutControllers.updateOneWorkout)
    .delete('/:id', workoutControllers.deleteOneWorkout)


    module.exports = router