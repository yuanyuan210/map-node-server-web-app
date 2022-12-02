const createReview = () => {}

const ReviewsController = (app) => {
  app.post('/api/reviews/user/:uid/place/:xid', createReview)
}

export default ReviewsController;