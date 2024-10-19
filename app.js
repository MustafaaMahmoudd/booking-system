const express = require("express");
const app = express();
const connection = require("./config/DBConnection");
const hotelRouter=require('./routes/hotelsRouter')
const errorController=require('./controllers/errorController')
const api=process.env.API
app.use(express.json());

connection();


app.use(`${api}/hotels`,hotelRouter)


app.use(errorController)

module.exports = app;
