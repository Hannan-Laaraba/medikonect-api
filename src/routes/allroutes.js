import { Router } from "express";
import dotenv from "dotenv";
import express from 'express';
import { createAppointment, getAppointments, getAppointmentById, updateAppointment, deleteAppointment } from '../controllers/appointment.controller';
import { createReview, getReviews, getReviewById, updateReview, deleteReview } from '../controllers/review.controller';
import { createSpecialty, getSpecialties, getSpecialtyById, updateSpecialty, deleteSpecialty } from '../controllers/specialty.controller';

const router = express.Router();

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
router.post('/specialties', createSpecialty);
router.get('/specialties', getSpecialties);
router.get('/specialties/:id', getSpecialtyById);
router.patch('/specialties/:id', updateSpecialty);
router.delete('/specialties/:id', deleteSpecialty);

export default router;
