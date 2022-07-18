const express = require("express"); // Yêu cầu file trong node_module.
const path = require("path"); //?.
const router = express.Router(); // Lấy Class Router

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../homeweb.html"));
}); // Chạy html

module.exports = router;
