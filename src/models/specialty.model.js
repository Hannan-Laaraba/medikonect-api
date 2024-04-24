import mongoose from "mongoose";

const specialtySchema = new mongoose.Schema({
    category: {type: String, required: true},
    description: {type: String, required: true},
    provider: {type: String, required: true},
})

export const SpecialtyModel = mongoose.model('Specialty', specialtySchema);