const { authJwt } = require("../middleware");
const controller = require("../controllers/cach.controller");




  app.post("/api/data/save",controller.cachSystem);
