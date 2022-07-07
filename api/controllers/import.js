const fse = require("fs-extra");
const folder_0 = __dirname + "/data/URLimages/"
const add = async (req, res) => {
    try {
      const { data, file } = req.query;
      var newArr = data.split(",")
      if (!data || !file ) return;
      if (!fse.existsSync(`${folder_0}${file}.json`)) {
        fse.writeFileSync(`${folder_0}${file}.json`, "[]")
      };
      let readdata = JSON.parse(fse.readFileSync(`${folder_0}${file}.json`), "utf-8");
      var countS = 0, countE = 0;
      for (var i = 0; i < newArr.length; i++) {
        if (!readdata.includes(newArr[i])) {
          ++countS;
          readdata.push(newArr[i])
          fse.writeFileSync(`${folder_0}${file}.json`, JSON.stringify(readdata, null, 4), "utf-8");
        } else ++countE;
      };
      return res.json({
        "result": {
          "successful": countS,
          "failure": countE,
          "total": readdata.length
        }
      })
    } catch (err) {
      res.json({
        "error": err
      })
      console.log(err)
    }
  }
const check = async () => {}
module.exports = { add, check }
