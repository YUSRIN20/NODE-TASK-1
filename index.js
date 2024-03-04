import express from "express"
import fs from "fs"
import { format } from "date-fns";

const app = express()
const PORT = 4000;

let filepath; // filepath for the  endpoint functions

app.get ('/',(req,res)=>{
    res.status(200).json({message:'code running sucessfully'})
})

app.get('/write',(req,res)=>{
    let today = format(new Date(),'dd-mm-yyyy-hh-mm-ss')
    filepath = `TimeStamp/${today}.txt`
    fs.writeFileSync(filepath,`${today}`,'utf-8')
    res.status(200).send(`<div> <h1>Date and time sent successfully to text file change the endpoint to read to get data</h1> </div>`)
})

app.get('/read',(req,res)=>{
    if (!filepath) {
        return res.status(404).send('No file written yet');
    }
    let data = fs.readFileSync(filepath,'utf-8')
    res.status(200).send(`<h1>${data}</h1>`)
})

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})
