import ReviewModel from '../models/review.model'; 

//  new review
export const createReview = async (req, res) => {
    try {
        const { userName, professionalsName, numericRating, reviewContent } = req.body;
        const newReview = new ReviewModel({
            userName,
            professionalsName,
            numericRating,
            reviewContent,
            timeStamp: new Date()
        });

        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
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
    const { id } = req.params;
    const { userName, professionalsName, numericRating, reviewContent } = req.body;
    try {
        const updatedReview = await ReviewModel.findByIdAndUpdate(id, {
            userName,
            professionalsName,
            numericRating,
            reviewContent,
            timeStamp: new Date()
        }, { new: true });
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
