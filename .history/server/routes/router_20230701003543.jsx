const express = require("express");
const router = express.Router();
const controller = require("../controller/controller.jsx");

router.get("/", (req, res) => {
  res.send("This is the backend of TNP_BIT");
});

router.post("/api/registerStudent", controller.registerStudent);
router.get("/api/loginStudent", controlller.loginStudent);
module.exports = router;
