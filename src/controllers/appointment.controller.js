import { AppointmentModel } from '../models/appointment.model';

// new appointment
export const createAppointment = async (req, res) => {
    try {
        const { name, doctor, date, time, reason } = req.body;
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;

        const newAppointment = new AppointmentModel({
            name,
            doctor,
            date,
            time,
            reason,
            createdAt,
            updatedAt
        });

        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// all appointments
export const getAppointments = async (req, res) => {
    try {
        const appointments = await AppointmentModel.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// single appointment by ID
export const getAppointmentById = async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await AppointmentModel.findById(id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update appointment with id
export const updateAppointment = async (req, res) => {
    const { id } = req.params;
    const { name, doctor, date, time, reason } = req.body;
    try {
        const updatedAppointment = await AppointmentModel.findByIdAndUpdate(id, { name, doctor, date, time, reason, updatedAt: new Date().toISOString() }, { new: true });
        if (!updatedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(updatedAppointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete appointment using id
export const deleteAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAppointment = await AppointmentModel.findByIdAndDelete(id);
        if (!deletedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
