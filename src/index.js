const express = require('express')
const v1Router = require("./v1/routes/workoutRoutes")
const app = express()
const PORT = process.env.PORT || 3500


app.use("/api/v1/workouts", workoutRoutes)
app.get("/", (req,res)=>{
    res.send("<h1>Probando</h1>")
})

app.listen(PORT, ()=>{console.log(`Server listening in por ${PORT}`)})