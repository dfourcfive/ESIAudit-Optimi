const controller = require("../controllers/saver.controller");



module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/data/save",controller.saveQuery);
  app.get("/api/data/save",controller.GetSavedQueries);
}