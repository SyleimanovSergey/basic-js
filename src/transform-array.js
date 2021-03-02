const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let resultArr = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--discard-next' && i !== arr.length - 1) {
                i++;
            } else if (arr[i] === '--discard-prev' && i !== 0) {
                if (arr[i - 2] !== '--discard-next') {
                    resultArr.pop();
                }
            } else if (arr[i] === '--double-next' && i !== arr.length - 1) {
                resultArr.push(arr[i + 1]);
            } else if (arr[i] === '--double-prev' && i !== 0) {
                if (arr[i - 2] !== '--discard-next') {
                    resultArr.push(arr[i - 1]);
                }

            } else if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev'
                && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
                resultArr.push(arr[i]);
            }
        }
        return resultArr;
    } else {
        throw new Error('if the' + arr + 'is not an `Array`')
    }
};
