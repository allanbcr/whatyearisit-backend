var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json({ result: true, year: new Date().getFullYear().toString() });
});

module.exports = router;
