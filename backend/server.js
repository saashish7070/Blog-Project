const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const mongoose = require('mongoose');

let url = "mongodb+srv://admin:admin@personalblog.cwfcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url)
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})

//get request for the homepage

app.get('/',(req,res)=>{
    res.send('Home page')
})

//Middleware
app.use(express.json());
app.use(cors())

//accessing the router
const Blogs = require('./routes/Blogs')


//Middleware for the route;
app.use('/blogs',Blogs);


app.listen(port,()=>{
    console.log(`The server is running at port ${port}.`)
})