const router = require("express").Router();
const loadController = require("../../controllers/loadController");

// Matches with "/loads"
router.route("/")
  .get(loadController.findAll)
  .post(loadController.create);

// Matches with "/loads/:equipment/:distance/:rate"
router
  .route("/:equipment/:distance/:rate")
  .get(loadController.find)
  .put(loadController.update)
  .delete(loadController.remove);

module.exports = router;

//   /api/loads/1234/trailer/1/low
//   /api/loads/1/container/2/low/