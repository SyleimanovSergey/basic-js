const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!'
    } else if (date.getTime() === undefined) {
        return new Error('THROWN');
    } else {
        let mouth = date.getMonth();
        let season = ['winter', 'spring', 'summer', 'autumn',]
        if (mouth === 11 || mouth <= 1) {
            return season[0];
        } else if (mouth === 2 || mouth <= 4) {
            return season[1];
        } else if (mouth === 5 || mouth <= 7) {
            return season[2];
        } else if (mouth === 8 || mouth <= 11) {
            return season[3]
        }
    }
};
