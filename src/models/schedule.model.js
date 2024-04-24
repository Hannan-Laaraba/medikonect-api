import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema ({
    professionalId: {type: Number, required: true},
    day: {type: String, required: true},
    time: {type: String, required: true},
    availability: {type: String, enum: ['yes', 'no'], required: true}
})

export const ScheduleModel = mongoose.model('Schedule', scheduleSchema);