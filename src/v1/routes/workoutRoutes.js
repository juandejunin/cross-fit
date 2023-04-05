const express = require('express')
const router = express.Router()


router
    .get('/', (req,res)=>{
        res.send("Get all workouts")
    })
    .get('/:id', (req,res)=>{
        res.send("Get only workout")
    })
    .post('/', (req,res)=>{
        res.send("Create workouts")
    })
    .patch('/:id', (req,res)=>{
        res.send("patch workout")
    })
    .delete('/:id', (req,res)=>{
        res.send("delete workouts")
    })


    module.exports = router