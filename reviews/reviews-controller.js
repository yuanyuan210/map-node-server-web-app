import * as reviewsDao from "./reviews-dao.js";

const createReview = async (req, res) => {
  const newReview = req.body
  const insertedReview = await reviewsDao.createReview(newReview);
  res.json(insertedReview);
}

const ReviewsController = (app) => {
  app.post('/api/reviews', createReview)
}

export default ReviewsController;