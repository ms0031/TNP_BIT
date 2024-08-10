// router.jsx
const express = require("express");
const router = express.Router();
const controller = require("../controller/controller.jsx");

router.get("/", (req, res) => {
  res.send("This is the backend of TNP_BIT");
});

router.post("/api/registerStudent", controller.registerStudent);
router.put("/api/addacademics", controller.addAcademics);
// router.get("/api/getacademics", controller.getAcademics);
router.post("/api/loginStudent", controller.loginStudent);
module.exports = router;
