const express = require('express');

const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')

const dotenv = require('dotenv').config();

const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./configs/db')
const port = process.env.PORT || 5000;


connectDB(); //mongodb connected


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use("/api/goals" , goalRoutes)
app.use("/api/users" , userRoutes)

app.use(errorHandler)

app.listen(port , ()=>{
    console.log(`server running at ${port}`)
})