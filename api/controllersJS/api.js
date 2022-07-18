const registerkey = async (req, res, next) => {
  const dt = require("../data.js");
  const uuid = require("uuid");
  const getIp = (req.headers["x-forwarded-for"] || "").split(",")[0];
  const dtrtn = dt.register({
    ip: getIp,
    type: "free", 
    key: uuid.v4(), 
    request: 100, 
    rateLimit: {
       windowMs: 5 * 60 * 1000,
       max: 100
        }
      });
  res.json(dtrtn);
  };
module.exports = { registerkey }
