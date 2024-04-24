import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: {type: Number, required: true},
    specialisation: {type: String, required: true},
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
    },
    workPlace: {type: String, required: true},
    licenceNumber: {type: Number, required: true}
});

export const ProfessionalModel = mongoose.model('Professional', professionalSchema);