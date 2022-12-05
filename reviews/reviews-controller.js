import * as reviewsDao from "./reviews-dao.js";

const createReview = async (req, res) => {
  const newReview = req.body
  const insertedReview = await reviewsDao.createReview(newReview);
  res.json(insertedReview);
}

const findReviewsByPlace = async (req, res) => {
  const reviews = await reviewsDao.findReviewsByPlace(req.params.xid);
  res.json(reviews);
}

const findReviewsByUser = async (req, res) => {
  const reviews = await reviewsDao.findReviewsByUser(req.params.uid);
  res.json(reviews);
}

const ReviewsController = (app) => {
  app.post('/api/reviews', createReview)
  app.get('/api/reviews/place/:xid', findReviewsByPlace)
  app.get('/api/reviews/user/:uid', findReviewsByUser)
}

export default ReviewsController;