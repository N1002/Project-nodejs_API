const fse = require("fs-extra");
const pathdata = __dirname + "/controllersJS/cache/data.json";
let readdata = JSON.parse(fse.readFileSync(pathdata));
const add = (data) => {
    var newDT = {
      "ip": data.ip,
      "apikey": data.key
    }
    readdata.push(newDT)
    fse.writeFileSync(pathdata, JSON.stringify(readdata, null, 4));
  };
const register = (data) => {
    if (readdata.find(item => item.ip == data.ip)) return {
      author: "D-Nam",
      status: false,
      msg: "Bạn đã có api key"
    }; else {
    var regDT = {
      ip: data.ip,
      type: data.type,
      key: data.key,
      request: data.request,
      limitsp: `${data.rateLimit.max} request trong ${data.rateLimit.windowMs}p`
    }
    readdata.push(regDT)
    fse.writeFileSync(pathdata, JSON.stringify(readdata, null, 4));
      return {
      author: "D-Nam",
      status: true,
      msg: "Tạo api key thành công",
      data: regDT
      }
    }
  };
const checkkey = (data) => {
    if (readdata.find(item => item.key == data.key)) {
        var find = readdata.find(item => item.key == data.key)
        if (find.request <= 0) return {
            status: false,
            msg: "Key đã hết lượt request"
        }
        /* key_data.splice(key_data.indexOf(key), 1);
         fs.writeFileSync(key_path, JSON.stringify(key_data, null, 4))*/
        if (find.request > 0) {
          find.request = find.request-1
            fse.writeFileSync(pathdata, JSON.stringify(readdata, null, 4))
            return {
                status: true
            }
        }
    } else return {
        status: false,
        msg: "Key không tồn tài trong hệ thống"
    }
};
module.exports = { add, register, checkkey }
