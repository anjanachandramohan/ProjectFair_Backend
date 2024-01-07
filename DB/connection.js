//import mongoose

const mongoose  = require("mongoose");

//access connection string
const connectionString = process.env.DATABASE

//connect node.js/server with mongodb
 mongoose.connect(connectionString).then(()=>{
    console.log('mongodb connected successfully');
 }).catch((err)=>{
    console.log(`mongodb failed to connect due to: ${err}`);
 })
