const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());
const url = "mongodb://localhost:27017"
app.post("/save",(req,res)=>{
    MongoClient.connect(url,(err,database)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            const dbo = database.db("sms1nov22");
            let data = {"name":req.body.name,"_id":req.body.rno,}
            dbo.collection("student").insertOne(data,(err,result)=>{
                if(err)
                res.send(err);
                else
                res.send(result);
            })
        }
    })
})


app.get("/read",(req,res)=>{
    MongoClient.connect(url,(err,database)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            const dbo = database.db("sms1nov22");
            dbo.collection("student").find({}).toArray((err,result)=>{
                if(err)
                res.send(err);
                else
                res.send(result);
            })
        }
    })
})

app.delete("/remove",(req,res)=>{
    MongoClient.connect(url,(err,database)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            const dbo = database.db("sms1nov22");
            const data = {"_id":req.body.rno};
            dbo.collection("student").deleteOne(data,(err,result)=>{
                if(err)
                res.send(err);
                else
                res.send(result);
            })
        }
    })
})


app.listen(9001,()=>{console.log("Ready @ 9001")})