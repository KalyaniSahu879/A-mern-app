const asyncHandler = require('express-async-handler');

const Goal = require('../models/goals.model')

//desc@ Get gaols
//@route GET /api/goals
//private
const getGoals = asyncHandler( async(req,res)=>{
    const goals = await Goal.find();
   res.status(200).json(goals)
})


//desc@ Set a gaol
//@route POST /api/goals
//private
const postGoals = asyncHandler( async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("please add a text field")
    }
    const goals = await Goal.create({text:req.body.text})
    res.status(200).json(goals)
})




//desc@ Update a  gaol
//@route PUT /api/goals/id
//private
const updateGoals = asyncHandler( async(req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id , req.body , {new:true})
    res.status(200).json(updatedGoal);
})



//desc@ Delete gaols
//@route DELETE /api/goals/id
//private
const deleteGoals = asyncHandler( async(req,res)=>{
    const goal = Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error("No such gol found!")
    }
    await goal.remove();
    res.status(200).json({id:req.params.id})
})

module.exports = {getGoals , postGoals , updateGoals , deleteGoals}