const controller = require("../controllers/saver.controller");




  app.post("/api/data/save",controller.GetSavedQueries);
  app.get("/api/data/save",controller.GetSavedQueries);
