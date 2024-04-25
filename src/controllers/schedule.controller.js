import ScheduleModel from "../models/schedule.model.js"; 


const scheduleController = {
  // create a new schedule
  createSchedule: async (req, res) => {
    try {
      const { professionalId, day, time, availability } = req.body;
      const newSchedule = new ScheduleModel({ professionalId, day, time, availability });
      const savedSchedule = await newSchedule.save();
      res.status(201).json(savedSchedule);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // getting all schedules
  getAllSchedules: async (req, res) => {
    try {
      const schedules = await ScheduleModel.find();
      res.json(schedules);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // to get schedule by id
  getScheduleById: async (req, res) => {
    try {
      const schedule = await ScheduleModel.findById(req.params.id);
      if (!schedule) {
        return res.status(404).json({ message: 'Schedule not found' });
      }
      res.json(schedule);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // to update schedule by id
  updateScheduleById: async (req, res) => {
    try {
      const { professionalId, day, time, availability } = req.body;
      const updatedSchedule = await ScheduleModel.findByIdAndUpdate(
        req.params.id,
        { professionalId, day, time, availability },
        { new: true }
      );
      if (!updatedSchedule) {
        return res.status(404).json({ message: 'Schedule not found' });
      }
      res.json(updatedSchedule);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // to delete schedule by id
  deleteScheduleById: async (req, res) => {
    try {
      const deletedSchedule = await ScheduleModel.findByIdAndDelete(req.params.id);
      if (!deletedSchedule) {
        return res.status(404).json({ message: 'Schedule not found' });
      }
      res.json({ message: 'Schedule deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default scheduleController;
