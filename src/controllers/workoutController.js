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

    const { body } = req;
    // *** ADD *** Condicion o clausula de cierre. Poner lo malo antes entonces si ocurre no seguimos.
    if (
      !body.name ||
      !body.mode ||
      !body.equipment ||
      !body.exercises ||
      !body.trainerTips
    ) {
      return;
    }
    // *** ADD ***
    const newWorkout = {
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      exercises: body.exercises,
      trainerTips: body.trainerTips,
    };
    // *** ADD ***
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    // *** ADD ***
    res.status(201).send({ status: "OK", data: createdWorkout });



    // const createdWorkout = workoutService.createNewWorkout()
    // res.send("Create workouts")
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