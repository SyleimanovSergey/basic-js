const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (Number(sampleActivity) > 0 && typeof sampleActivity !== "object" && sampleActivity.length > 0 && Number(sampleActivity) < MODERN_ACTIVITY)
    return (Math.abs(Math.floor((Math.log(Number(sampleActivity) / MODERN_ACTIVITY))
        / (0.693 / HALF_LIFE_PERIOD))))
  else {
    return false
  }
};
