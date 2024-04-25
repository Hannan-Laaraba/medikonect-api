import SpecialtyModel from '../models/specialty.model.js';

// new specialty
export const createSpecialty = async (req, res) => {
    try {
        // const { category, description, provider } = req.body;
        const newSpecialty = await SpecialtyModel.create(req.body
            // category,
            // description,
            // provider
        );

        // const savedSpecialty = await newSpecialty.save();
        res.status(201).json(newSpecialty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// all specialties
export const getSpecialties = async (req, res) => {
    try {
        const specialties = await SpecialtyModel.find();
        res.status(200).json(specialties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// single specialty by id
export const getSpecialtyById = async (req, res) => {
    const { id } = req.params;
    try {
        const specialty = await SpecialtyModel.findById(id);
        if (!specialty) {
            return res.status(404).json({ message: 'Specialty not found' });
        }
        res.status(200).json(specialty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update specialty by id
export const updateSpecialty = async (req, res) => {
    const { id } = req.params;
    const { category, description, provider } = req.body;
    try {
        const updatedSpecialty = await SpecialtyModel.findByIdAndUpdate(id, {
            category,
            description,
            provider
        }, { new: true });
        if (!updatedSpecialty) {
            return res.status(404).json({ message: 'Specialty not found' });
        }
        res.status(200).json(updatedSpecialty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete specialty by id
export const deleteSpecialty = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSpecialty = await SpecialtyModel.findByIdAndDelete(id);
        if (!deletedSpecialty) {
            return res.status(404).json({ message: 'Specialty not found' });
        }
        res.status(200).json({ message: 'Specialty deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
