import * as reviewsDao from "./reviews-dao.js";

const createReview = async (req, res) => {
  const newReview = req.body;
  const insertedReview = await reviewsDao.createReview(newReview);
  res.json(insertedReview);
}

const updateReview = async (req, res) => {
  const rid = req.params.rid;
  const updates = req.body;
  const status = await reviewsDao.updateReview(rid, updates);
  res.json(status);
}

const deleteReview = async (req, res) => {
  const status = await reviewsDao.deleteReview(req.params.rid);
  res.json(status);
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
  app.put('/api/reviews/:rid', updateReview)
  app.delete('/api/reviews/:rid', deleteReview)
  app.get('/api/reviews/place/:xid', findReviewsByPlace)
  app.get('/api/reviews/user/:uid', findReviewsByUser)
}

export default ReviewsController;