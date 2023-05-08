const express = require("express")

const app = express()

app.listen(5000, ()=>{
    console.log("backend is running")
 })


app.get('/', (req, res) => {
    res.json('I am your backend suka')
  })