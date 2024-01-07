//1.import dotenv
//loads .env file contents into process.env by default. 
 require('dotenv').config()

 //2.import express
 const express = require('express')

 //3.import cors
 const cors = require('cors')

 //import router
 const router = require('./Routing/router')
 
 //import connection.js file
 require('./DB/connection')
 
 //4.create server
 //Creates an Express application. The express() function is a top-level function exported by the express module.
const pfServer = express()

//5.use of cors by server
pfServer.use(cors())

//6.parsing json
//Returns middleware that only parses json -javascript object 
pfServer.use(express.json())

//pfserver-application middleware
//pfServer.use(appMiddleware)

//server using the router
pfServer.use(router)

//pfserver use upload folder
//first arg-how other application use folder
//sec arg-to export that particular folder-express.static
pfServer.use('/uploads',express.static('./uploads'))


//7.customize port- bydefault -server runs at 3000
const PORT = 4000 || process.env

//8.run server
pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})

//9.get request
pfServer.get('/',(req,res)=>{
    res.send(`<h1 style="color:blue">server running succesfully</h1>`)    //'/'=means base url
})

//10.post request
pfServer.post('/',(req,res)=>{
    res.send(`post request`)
})
//10.put request
pfServer.put('/',(req,res)=>{
    res.send(`put request`)
})