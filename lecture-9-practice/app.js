
const express = require('express')
const path = require('path')
const homeRouter = require('./route/homeRoute')
const contactRouter = require('./route/contactRoute')
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRouter)
app.use(contactRouter)



const PORT = 30001
app.listen(PORT, ()=>{
    console.log(`server running at port http://localhost:${PORT}`)
})