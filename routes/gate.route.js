const controller = require("../controllers/activite.controller");




  app.get("/api/data/activites/:id",controller.getOne);
