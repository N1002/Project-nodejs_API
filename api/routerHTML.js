const express = require("express"); // Yêu cầu file từ node_module.
const path = require("path"); // Yêu cầu file từ node_module.
const router = express.Router(); // Lấy Class Router hoặc mỗi express() cũng được.

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/controllersHTML/home.html"));
}); // Chạy file html

router.get("/converbase64", function(req, res) {
    res.sendFile(path.join(__dirname + "/controllersHTML/converbase64.html"));
});

router.get("/clock", function(req, res) {
    res.sendFile(path.join(__dirname + "/controllersHTML/clock.html"));
});

module.exports = router;
