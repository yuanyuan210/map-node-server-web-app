import * as placeinfoDao from "./placeinfo-dao.js";

const createPlaceinfo = async (req, res) => {
  const insertedPlaceinfo = await placeinfoDao.createPlaceinfo(req.body);
  res.json(insertedPlaceinfo);
}

const updatePlaceinfo = async (req, res) => {
  const status = await placeinfoDao.updatePlaceinfo(req.params.piid, req.body);
  res.json(status);
}

const deletePlaceinfo = async (req, res) => {
  const status = await placeinfoDao.deletePlaceinfo(req.params.piid);
  res.json(status);
}

const findPlaceinfoByPlace = async (req, res) => {
  const placeinfo = await placeinfoDao.findPlaceinfoByPlace(req.params.xid);
  res.json(placeinfo);
}

const findPlaceinfoByManager = async (req, res) => {
  const placeinfo = await placeinfoDao.findPlaceinfoByManager(req.params.uid);
  res.json(placeinfo);
}

const placeinfoController = (app) => {
  app.post('/api/placeinfo', createPlaceinfo);
  app.put('/api/placeinfo/:piid', updatePlaceinfo);
  app.delete('/api/placeinfo/:piid', deletePlaceinfo);
  app.get('/api/placeinfo/place/:xid', findPlaceinfoByPlace);
  app.get('/api/placeinfo/manager/:uid', findPlaceinfoByManager);
}

export default placeinfoController;