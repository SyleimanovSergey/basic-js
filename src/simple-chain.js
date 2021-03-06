const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length
    },
    addLink(value) {
        if (value === undefined) {
            this.arr.push('( )')
            return chainMaker
        } else {
            this.arr.push('( ' + value + ' )')
            return chainMaker
        }
    }
    ,
    removeLink(position) {
        if (position > this.arr.length || !(Number.isInteger(position)) || typeof position !== "number") {
            this.arr = [];
            throw new Error();
        } else {
            this.arr.splice(Number(position -1), 1);
            return chainMaker
        }
    },
    reverseChain() {
        this.arr.reverse();
        return chainMaker
    },
    finishChain() {
        let result = this.arr.join('~~');
        this.arr = [];
        return result
    },

};

module.exports = chainMaker;
