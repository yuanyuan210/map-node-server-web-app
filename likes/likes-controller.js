import * as likesDao from "./likes-dao.js";

const createLike = async (req, res) => {
  const newLike = req.body;
  const insertedLike = await likesDao.createLike(newLike);
  res.json(insertedLike);
}

const deleteLike = async (req, res) => {
  const likeToDelete = {
    "user._id": req.params.uid,
    "place.xid": req.params.xid
  }
  const status = await likesDao.deleteLike(likeToDelete);
  res.json(status);
}

const findAllLikes = async (req, res) => {
  const likes = await likesDao.findAllLikes();
  res.json(likes);
}

const findLike = async (req, res) => {
  const likeToFind = {
    "user._id": req.params.uid,
    "place.xid": req.params.xid
  };
  const like = await likesDao.findLike(likeToFind);
  res.json(like? true : false);
}

const findPlaceLikesCount = async (req, res) => {
  const count = await likesDao.findPlaceLikesCount(req.params.xid);
  res.json(count);
}


const findLikesByUser = async (req, res) => {
  const likes = await likesDao.findLikesByUser(req.params.uid);
  res.json(likes);
}



const LikesController = (app) => {
  app.post('/api/likes', createLike)
  app.delete('/api/likes/user/:uid/place/:xid', deleteLike)
  app.get('/api/likes', findAllLikes)
  app.get('/api/likes/user/:uid/place/:xid', findLike)
  app.get('/api/likes/place/:xid/count', findPlaceLikesCount)
  app.get('/api/likes/user/:uid', findLikesByUser)
}

export default LikesController;