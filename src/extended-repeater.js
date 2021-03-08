const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes,
        separator = String(options.separator),
        addition = String(options.addition),
        additionRepeatTimes = options.additionRepeatTimes,
        additionSeparator = String(options.additionSeparator),
        result,
        resultAddition;
    if (!options.hasOwnProperty('separator')) {
        separator = "+";
    }
    if (!options.hasOwnProperty('additionSeparator')) {
        additionSeparator = '|';
    }
    if (!options.hasOwnProperty('repeatTimes')) {
        repeatTimes = 1;
    }
    if (!options.hasOwnProperty('additionRepeatTimes')) {
        additionRepeatTimes = 1;
    }
    if (!options.hasOwnProperty('addition')) {
        addition = null
    }
    if (!options.hasOwnProperty('addition')) {
        result = (str + separator).repeat(repeatTimes);
        return result.substring(0, result.length - separator.length)
    }
    resultAddition = (addition + additionSeparator).repeat(additionRepeatTimes)
    result = (String(str) + resultAddition.substring(0, resultAddition.length - additionSeparator.length) + separator).repeat(repeatTimes)

    return result.substring(0, result.length - separator.length)
}
