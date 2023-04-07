const mongoose = require("mongoose")

const contentSchema= new mongoose.Schema({
	username:String,
	password:String,
})
const Content=mongoose.model("login",contentSchema)

module.exports= Content

//,{collection:"login"}