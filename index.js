const axios = require("axios");
const logger = require("./utils/logger");
const express = require("express");
const rateLimit = require("express-rate-limit");
const router = require("./api/router.js");
const routerJS = require("./api/routerJS.js");
const routerHTML = require("./api/routerHTML.js");
const http = require("http");
const path = require("path");
const fs = require("fs");
const mail = require("nodemailer").mail;
const socketio = require("socket.io");
const app = express();
const _http = http.Server(app);
const io = socketio(_http);
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100
});
const server = _http.listen(process.env.PORT || 3000, () => {
const host = "https://localhost"/*server.address().address*/
const port = server.address().port
  logger(`[ API ] » Máy chủ RESTful API bắt đầu mở ${host}:${port}`);
});
io.on("connection", function(socket){
    logger("[ t ] » Client connection received" + socket);
});
app.set("json spaces", 4);
app.use(limiter);
app.use(express.json());
app.use("/", router);
app.use("/js", routerJS);
app.use("/html", routerHTML)
app.use((req, res) => {
  res.status(404).json({
    "msg": req.originalUrl + ": not found"
   });
}); 
axios.get("https://raw.githubusercontent.com/duongcongnam5/nodejs_API/main/package.json").then((res) => {
    logger(`[ NAME ] » ${res.data.name}`);
    logger(`[ VERSSION ] » ${res.data.version}`);
    logger(`[ DESCRIPTION ] » ${res.data.description}`);
const chalkercli = require("chalkercli");
const dataedit = ` 
======================================================
╏                                                    ╏
╏             █▀▄ █▀▀ ▄▄ █▄░█ ▄▀█ █▀▄▀█              ╏
╏             █▄▀ █▄▄ ░░ █░▀█ █▀█ █░▀░█              ╏
╏                                                    ╏
╏                                                    ╏
╏            𝐍𝐀𝐌𝐄 : Dương Công Nam                   ╏
╏            𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 : 2005                         ╏
╏            𝐆𝐈𝐓𝐇𝐔𝐁 : github.com/duongcongnam        ╏
╏            𝐙𝐀𝐋𝐎 : 0327367517                       ╏
╏            𝐅𝐁 : fb.me/levy.nam.2k5                 ╏
╏                                                    ╏
======================================================
`
const rainbow = chalkercli.rainbow(dataedit).stop();
const frame = rainbow.frame(); 
rainbow.render();
console.log(frame);
logger("[ CALLAD ] » Có lỗi liên hệ FB: fb.com/levy.nam.2k5");
logger("[ NOTI ] » Nhận cày thuê rank LQMB, code lệnh chatbot(code được hay không thì chưa biết), FB: fb.com/levy.nam.2k5")
});
