import reviewsModel from "./reviews-model.js";

export const createReview = (review) => reviewsModel.create(review);