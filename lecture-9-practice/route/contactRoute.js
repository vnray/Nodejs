
const express = require('express')
const contactRouter = express.Router()
const path = require('path')
const rootDir = require('../utils/pathUtils')
const pathName = path.join(rootDir, 'view', 'contact.html')
const contactPath = path.join(rootDir, 'view', 'contact-success.html')

contactRouter.get('/contact', (req,res)=>{
    console.log(`contact ${req.url}, ${req.method}`)
    res.sendFile(pathName)
})

contactRouter.post('/contact',(req, res)=>{
    console.log(`contact ${req.url}, ${req.method}`)
    const {name, email} = req.body
    res.sendFile(contactPath)
      
})

module.exports = contactRouter;