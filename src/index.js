const express = require('express')

const app = express()
const PORT = process.env.PORT || 3500

app.get("/", (req,res)=>{
    res.send("<h1>Probando</h1>")
})

app.listen(PORT, ()=>{console.log(`Server listening in por ${PORT}`)})