const express = require('express')
const router = express.Router()

const workoutControllers = require("../../controllers/workoutController")



router
    .get('/', workoutControllers.getAllWorkouts )
    .get('/:id', workoutControllers.getOneWorkout )
    .post('/', workoutControllers.createNewWorkout)
    .patch('/:workoutId', workoutControllers.updateOneWorkout)
    .delete('/:workoutId', workoutControllers.deleteOneWorkout)


    module.exports = router