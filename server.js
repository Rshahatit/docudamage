require('dotenv').config()

const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')

const app = express()

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databse connection establishes successfully");
})


app.listen(3000, () => console.log('server started'))