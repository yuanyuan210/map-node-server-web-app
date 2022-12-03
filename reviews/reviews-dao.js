import reviewsModel from "./reviews-model.js";

export const createReview = (review) => reviewsModel.create(review);

export const findReviewsByPlace = (xid) => reviewsModel.find({"place.xid":xid});