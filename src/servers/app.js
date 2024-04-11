import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

//Apply middlewares
app.use(express.json());


//Use routes
app.use();

//Make database connection


//Listen to port

const PORT = process.env.PORT || 8080

app.listen(PORT , () => {
    console.log('MediKonect App is running!!');
})