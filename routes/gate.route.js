const { authJwt } = require("../middleware");
const controller = require("../controllers/activite.controller");




  app.get("/api/data/activites/:id",[authJwt.verifyToken],controller.getOne);
