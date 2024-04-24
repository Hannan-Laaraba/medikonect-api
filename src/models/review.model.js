import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    professionalsName: { type: String, required: true },
    numericRating: { type: Number, required: true },
    reviewContent: { type: String, required: true },
    timeStamp: { type: Date, default: Date.now }
});



export const ReviewModel = mongoose.model('Review', reviewSchema);
