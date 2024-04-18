import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    professionalsName: {type: String, required: true},
    numericRating: {type: Number, required: true},
    reviewContent: {type: String, required: true},
    timeStamp: {}
})

export default ReviewModel = model ('Review', reviewSchema);