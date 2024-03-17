require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('vidhisinghtwttr')
})

app.get('/login',(req,res)=>{
  res.send('<h1>LOGIN PAGE HERE !</h1>')
})

app.get('/')
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})



