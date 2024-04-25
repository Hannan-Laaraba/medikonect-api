import { Router } from "express";
import { createAppointment, getAppointments, getAppointmentById, updateAppointment, deleteAppointment } from '../controllers/appointment.controller.js';
import { createReview, getReviews, getReviewById, updateReview, deleteReview } from '../controllers/review.controller.js';
import { createSpecialty, getSpecialties, getSpecialtyById, updateSpecialty, deleteSpecialty } from '../controllers/specialty.controller.js';
import { login, signup } from "../controllers/user.controller.js";


const router = Router();

// signup route
router.post('/signup', signup);

// signin route
router.post('/login', login);


// appointments routes
router.post('/appointments', createAppointment);
router.get('/appointments', getAppointments);
router.get('/appointments/:id', getAppointmentById);
router.patch('/appointments/:id', updateAppointment);
router.delete('/appointments/:id', deleteAppointment);

// reviews routes
router.post('/reviews', createReview);
router.get('/reviews', getReviews);
router.get('/reviews/:id', getReviewById);
router.patch('/reviews/:id', updateReview);
router.delete('/reviews/:id', deleteReview);

// specialties routes
router.post('/specialty', createSpecialty);
router.get('/specialty', getSpecialties);
router.get('/specialty/:id', getSpecialtyById);
router.patch('/specialtiy/:id', updateSpecialty);
router.delete('/specialty/:id', deleteSpecialty);

export default router;
