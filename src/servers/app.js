import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "../routes/allroutes.js";
import cors from "cors";

dotenv.config();

const app = express();

//Apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//Make database connection
const PORT = process.env.PORT || 8080

const mongoURI = process.env.MONGO_URI

 mongoose.connect(mongoURI).then(() =>{
    console.log('database is running')
}).catch((error) => console.log(error))

//Use routes
app.use(router);

//Listen to port

app.listen(PORT , () => {
    console.log('MediKonect App is running!!');
})