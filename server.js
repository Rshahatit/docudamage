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
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

const imagesRouter = require('./routes/images');
app.use('/images', imagesRouter)
const docuRouter = require('./routes/docu');
app.use('/docu', docuRouter)


app.listen(3000, () => console.log('server started'))