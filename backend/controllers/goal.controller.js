
//desc@ Get gaols
//@route GET /api/goals
//private
const getGoals = (req,res)=>{
   
    res.status(200).json({message:"getgoals"})
}


//desc@ Set a gaol
//@route POST /api/goals
//private
const postGoals = (req,res)=>{
    
    res.status(200).json({message:"postgoals"})
}

//desc@ Update a  gaol
//@route PUT /api/goals/id
//private
const updateGoals = (req,res)=>{
    res.status(200).json({message:"updatedgoals"})
}
//desc@ Delete gaols
//@route DELETE /api/goals/id
//private
const deleteGoals = (req,res)=>{
    res.status(200).json({message:"deletedgoals"})
}

module.exports = {getGoals , postGoals , updateGoals , deleteGoals}