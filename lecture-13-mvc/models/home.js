const fs = require('fs');
const path = require('path')
const rootPath = require('../utils/pathUtils')

const regHome = []
exports.module = class Home{
    constructor(homeName, price, location, imgUrl, rating){
        this.homeName = this.homeName;
        this.price = this.price;
        this.location = this.location;
        this.imgUrl = this.imgUrl;
        this.rating = this.rating;
    }
    save(){
regHome.push(this)
const dataPath = path.join(rootPath, 'data', 'home.json');
fs.writeFile(dataPath, JSON.stringify(regHome), (err)=>{
    console.log("data concluded now")
})
    }
    static fetchAll(){
return regHome;
    }
}