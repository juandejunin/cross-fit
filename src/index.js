const express = require('express')
const bodyParser = require("body-parser");
const v1Router = require("./v1/routes/workoutRoutes")
// const { conexion } = require('./database/db')

const app = express()
// conexion()


const PORT = process.env.PORT || 3500

//app.use(express.json) por alguna razon esto causa problemas


app.use(bodyParser.json());

app.use("/api/v1/workouts", v1Router)


app.listen(PORT, ()=>{console.log(`Server listening in por ${PORT}`)})