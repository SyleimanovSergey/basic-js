const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let arr = matrix.flat();
    let result = arr.filter(function (element) {
        return element === '^^';
    })
    return Number(result.length);
};
