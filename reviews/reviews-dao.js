import reviewsModel from "./reviews-model.js";

export const createReview = (review) => reviewsModel.create(review);

export const updateReview = (rid, review) => reviewsModel.updateOne({_id: rid},
    {$set: review})

export const deleteReview = (rid) => reviewsModel.deleteOne({_id: rid});

export const findReviewsByPlace = (xid) => reviewsModel.find(
    {"place.xid": xid});

export const findReviewsByUser = (uid) => reviewsModel.find({"user._id": uid});

export const findLastNReviewsByUser = (uid, limit) => reviewsModel.find({"user._id": uid}).sort({"_id" : -1}).limit(limit);
