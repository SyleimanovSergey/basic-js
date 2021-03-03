const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let diskTurn = Math.pow(2, disksNumber) - 1,
        time = Math.floor((diskTurn / turnsSpeed) * 3600)

    return {
        turns: diskTurn,
        seconds: time
    }
};
