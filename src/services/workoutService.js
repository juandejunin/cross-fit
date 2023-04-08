const { v4: uuid} = require('uuid')
const Workout = require('../database/Workout')


const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
}
const getOneWorkout = (id) => {
    const workout = Workout.getOneWorkout(id)
    return workout
}
const createNewWorkout = (newWorkout) => {
   // *** ADD ***
   const workoutToInsert = {
    ...newWorkout,//spread syntax crea una copia del objeto y lo inserta dentro del objeto
    id: uuid(),//genera un numero aleatorio
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  // *** ADD ***
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
}

const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  };
  
  const deleteOneWorkout = (workoutId) => {
    Workout.deleteOneWorkout(workoutId);
  };

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}