const express =require("express")
const app= express();
const port=process.env.PORT|| 2008
const cors =require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Content= require("./contentschema")
const myDetails=[
			{name:"realme",price:40000,image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81phFG96VXL._SX425_.jpg",description:""},
			{name:"redmi",price:35000,image:"https://static.toiimg.com/thumb/resizemode-4,msid-81967187,imgsize-104912,width-720/81967187.jpg",description:""},
			{name:"iphone 12",price:45000,image:"https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg",description:""},
			{name:"Vivo",price:28000,image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61vBPptSghL._SL1500_.jpg",description:""},
			{name:"Oppo",price:30000,image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81LrmorQeQL._SX679_.jpg",description:""},
			{name:"Samsung",price:30000,image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91W42b8YW+L._SX679_.jpg",description:""},
			{name:"Apple Watch",price:29999,image:"https://media.croma.com/image/upload/v1668271334/Croma%20Assets/Communication/Wearable%20Devices/Images/262052_0_ibxrul.png",description:""},
			{name:"iPad",price:15000,image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-purple-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645066730601",description:""},
			{name:"Nokia",price:750000,image:"https://static.toiimg.com/thumb/msid-98605820,width-400,resizemode-4/98605820.jpg",description:""}
		]

mongoose.connect("mongodb+srv://sivaram:sivaram@cluster0.0u7y0h0.mongodb.net/demo?retryWrites=true&w=majority")
	.then(()=>{
		console.log("MongoDB Connected")
	})
	.catch((err)=>{
		console.log(err)
	})

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	console.log("working server")
})

app.get("/bring",(req,res)=>{
	Content.find()
	.then((result)=> res.json(result))
})
//login
app.get("/products",(req,res)=>{
	res.send(myDetails)
})
app.post("/add",(req,res)=>{
	console.log(req.body)
	const {username,password}=req.body;
	const newData= new Content({
		username, password
	})
	newData.save()
	res.send("added")
})

/*app.get("/add",(req,res)=>{
	Content.find()
	.then((result)=> res.json(result))
})*/

app.listen(port,()=>console.log("port is running",port))
