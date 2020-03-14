const express = require("express");
const router = express.Router();

// req request, res result
router.get("/test", (req, res) => res.json({ msg: "This is the tweets route" }));

module.exports = router;
