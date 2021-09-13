/*
Dev: Raj Chaudhari
Peer: Vivek Yogeshbhai Ray
Date: 09/07/2021

Description: Server-side setup
*/

const express = require('express')
const mongoose = require('mongoose')

var app = express() //creates app object to use express
var data = require('./schema')//accessing the noteSchema file

mongoose.connect("mongodb://localhost/newDB") //creating the database





mongoose.connection.once("open",function(){

console.log("connected to the Database Successfully!")

}).on("error",function(error){

    console.log("failed to connect" + error)

})





//create a note (POST request)
app.post("/signup", (req,res)=> {

    var signup = new data({

        username: req.get("username"),
        password: req.get("password"),
      

    })

    signup.save().then(()=>{

        if(signup.isNew == false)
        {
            console.log("saved data!")
        }
        else
        {
        console.log("Failed to save data")
        }

    })
})






//The server is running at this address and port 
var server = app.listen(8081, "192.168.50.141", ()=> {


    console.log("server is running")



})


//delete a note 


//update a note 


//fetch all  notes 






