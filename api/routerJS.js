const express = require("express"); // Yêu cầu sử dụng file trong node_module.
const router = express.Router(); // Lấy Class Router hoặc dùng mỗi express() cũng được.

//////////////////////
//* SETUP PATH API *//
//////////////////////
const path_api = require("./controllersJS/api.js"); // Yêu cầu sử dụng file trong đường dẫn bạn cung cấp.
router.get("/regkey", path_api.registerkey); // Thay đổi đường dẫn API và chọn hàm cần chạy code khi người dùng vào đường dẫn API đã ghi.

const path_ip = require("./controllersJS/checkip.js");
router.get("/checkip", path_ip.checkip);

module.exports = router; 
