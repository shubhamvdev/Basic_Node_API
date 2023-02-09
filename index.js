require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');
const mongoString = process.env.MONGO_URI;

mongoose.set('strictQuery', false);
mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const route = require("./routes/route")
app.use("/api",route)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})