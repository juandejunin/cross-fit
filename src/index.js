const express = require('express')
const v1Router = require("./v1/routes/workoutRoutes")
const { conexion } = require('./database/db')

const app = express()
conexion()


const PORT = process.env.PORT || 3500

app.use(express.json)

app.use("/api/v1/workouts", v1Router)


app.listen(PORT, ()=>{console.log(`Server listening in por ${PORT}`)})