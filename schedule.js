const express=require("express")
const db=require("./db")

const app=express()
app.use(express.json())
app.listen(8000,()=>
    {
        console.log("Server Started")
    })
app.get("/schedule",(req,res)=>
{
    db.getSchedule()
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})
app.post("/addSchedule",(req,res)=>
{
    db.addSchedule(req.body.index,req.body.matches,req.body.time)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})
app.put("/updateSchedule/:number",(req,res)=>
{
    const id=req.params.id
    db.updateSchedule(ind,mat,tim,id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})
app.delete("/deleteSchedule/:number",(req,res)=>
{
    const id=req.params.id
    db.deleteSchedule(id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})
