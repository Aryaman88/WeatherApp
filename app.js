
const express=require("express");
const ejs = require("ejs");
const app=express();
const https=require("https");
app.use(express.urlencoded())
app.use(express.static("public"))
app.set('view engine', 'ejs');
const date=require(__dirname+"/date.js")


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
}) 

app.post("/",function(req,res){

    const query=req.body.cityname
    const apikey="489e8d45ea1f718ec2daaaf30ac96e79"
    const unit="metric"
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apikey +"&units="+ unit
    https.get(url,function(response){

    console.log(response.statusCode)

   response.on("data",function(data){
       const wd=JSON.parse(data)
       const weatherDescription=wd.weather[0].description
       const temp=wd.main.temp
       const name=wd.name
       const icon="http://openweathermap.org/img/wn/"+wd.weather[0].icon+"@2x.png"
       const todaydate=date.getdate();
    //    res.write("<h1>The tempreture in "+ name +" is "+ temp+"degrees Celcius.</h1>")
    //    res.write("The Weather is currently "+ weatherDescription)
    //    res.write("<img src="+icon+">")
       
    //    res.send()
    res.render("list.ejs",{name:name,temp:temp,weatherDescription:weatherDescription,icon:icon,date:todaydate})
    })

    })
    
})


app.listen(process.env.PORT || 3000,function(){
   console.log("server started")
})