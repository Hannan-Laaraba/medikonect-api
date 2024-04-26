import ReviewModel from '../models/review.model.js'; 

//  new review
export const createReview = async (req, res) => {
    try {
        const newReview = await ReviewModel.create(req.body );

        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// all reviews
export const getReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//  single review by id
export const getReviewById = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await ReviewModel.findById(id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update review by id
export const updateReview = async (req, res) => {
    try {
        const updatedReview = await ReviewModel.findByIdAndUpdate(req.params.id, req.body
        );
        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete review by id
export const deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReview = await ReviewModel.findByIdAndDelete(id);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
