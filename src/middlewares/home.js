let fs = require('fs');
let { promisify } = require("util");
let readfile = promisify(fs.readFile);
module.exports = async (req, res) => {
    let file = await readfile('../browserContent/index.html');
    res.send(file.toString());
};
