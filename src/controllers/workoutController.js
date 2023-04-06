const workoutService = require('../services/workoutService')

const getAllWorkouts = (req,res) =>{
    const allWorkouts = workoutService.getAllWorkouts()
    res.send({status:200, data:allWorkouts})
}

const getOneWorkout = (req,res) =>{
    const workout = workoutService.getOneWorkout(req.params.id)
    res.send("Get only workout")
}

const createNewWorkout = (req,res) =>{
    const createdWorkout = workoutService.createNewWorkout()
    res.send("Create workouts")
}

const updateOneWorkout = (req,res) =>{
    const updateWorkout = workoutService.updateOneWorkout(req.params.id)
    res.send("patch workout")
}

const deleteOneWorkout = (req,res) =>{
    workoutService.deleteOneWorkout(req.params.id)
    res.send("delete workouts")
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}