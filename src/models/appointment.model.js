import mongoose from "mongoose";


const appointmentSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // name: {type: String, required: true},
    doctor: {type: String, required: true},
    date: {type:String, required: true},
    time: {type: String, required: true},
    reason: {type: String }
    // createdAt: {type: String, required: true},
    // updatedAt: { type: String, required: true}
})

export const AppointmentModel = mongoose.model ('Appointment', appointmentSchema);
