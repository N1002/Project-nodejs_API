const chalk=  require("chalk");
function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    };
   return "#" + color;
};
module.exports = async (data, option) => {
	switch (option) {
    default: {
      console.log(chalk.bold.hex(randomColor()).bold(data));
    };
	};
};
