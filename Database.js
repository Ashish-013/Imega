const mongoose = require('mongoose');
require('dotenv').config()
const chalk = require('chalk')
const uri = process.env.DB_URL 

const connectToDatabase =  ()=>{
    mongoose.connect(uri).then(()=>{
        console.log(chalk.bgGreen('Sucessfully connected to mongoose'));
    }).catch((error)=>{
        console.log(chalk.bgRed(error));
    })

}


mongoose.set('strictQuery', true)


module.exports = connectToDatabase