const dt = require("../data.js");
const checkip = async (req, res, next) => {
  const getIp = (req.headers["x-forwarded-for"] || "").split(",")[0];
  res.json({
    "author": "D-Nam",
    "status": true,
    "result": {
      "ipYou": getIp
      }
    });
  };
module.exports = { checkip }
