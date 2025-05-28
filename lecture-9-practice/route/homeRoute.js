const express = require('express')
const path = require('path')
const homeRouter = express.Router()
const rootDir = require('../utils/pathUtils')
const pathName = path.join(rootDir, 'view', 'home.html')

homeRouter.get('/', (req,res)=>{
    console.log(`home ${req.url}, ${req.method}`)
    res.sendFile(pathName)
})

module.exports = homeRouter