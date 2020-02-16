require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databse connection establishes successfully");
})


app.listen(3000, () => console.log('server started'))