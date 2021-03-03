const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members) && members.some(function (elem) {
        return typeof elem === "string"
    })) {
        let nameList = [],
            teamName = [];
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] === "string") {
                nameList.push(members[i].replace(/\s/g, '').toUpperCase().split(''))
            }
        }
        for (let i = 0; i < nameList.length; i++) {
            teamName.push(nameList[i][0])
        }

        return teamName.sort().join('');
    } else {
        return false;
    }
};
