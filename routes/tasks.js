const express = require("express");
const router = express.Router();
const controller1 = require("../controllers/controller1");

router
  .route("/")
  .get(controller1.newController)
  .post(controller1.newControllerpost);

router
  .route("/:id")
  .delete(controller1.newControllerDelete)
  .patch(controller1.newControllerPatch);
module.exports = router;
