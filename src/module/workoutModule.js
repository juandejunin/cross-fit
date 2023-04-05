const { Schema, model } = require('mongoose')

//definir la estructura de mi modelo

const workoutSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String,
        default: "default.png"
    }

})
workoutSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v
    }
})

const Workout = model("Workout", workoutSchema)

const create = async (newWorkoutData) => {
    const newWorkout = new Workout(newWorkoutData)

    const workout = await newWorkout.save()
    return workout
}

const findById = async (id) => {
    const workout = await Workout.findById(id)
    return workout
}

const find = async (data) => {
    return await Workout.find(data)
}

const findByIdAndUpdate = async (id, newworkoutData) => {
    return await Workout.findByIdAndUpdate(id, newworkoutData, { new: true })
}

const deleteOne = async (data) => {
    return await Workout.deleteOne(data)
}


module.exports = { create, find, deleteOne, findById, findByIdAndUpdate }