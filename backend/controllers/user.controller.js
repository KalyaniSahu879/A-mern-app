//desc@ Register new user
//@route POST /api/users
//public


const registerUSer = (req,res)=>{
    res.json({message:'Register User'})
}



//desc@ Authenticate a user
//@route POST /api/users/login
//public


const loginUSer = (req,res)=>{
    res.json({message:'Login User'})
}



//desc@ get user data
//@route GET /api/users/me
//public


const getMe = (req,res)=>{
    res.json({message:'Userdata display'})
}



module.exports = {registerUSer , loginUSer , getMe}