import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "../routes/allroutes";

dotenv.config();

const app = express();

//Apply middlewares
app.use(express.json());

//Connect MongoDB
mongoose.connect(process.env.MONGO_URI)


//Use routes
app.use(router);

//Make database connection


//Listen to port

const PORT = process.env.PORT || 8080

app.listen(PORT , () => {
    console.log('MediKonect App is running!!');
})