const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error()

        } else {
            let arrMes = message.toUpperCase().split(''),
                arrKey = key.toUpperCase().split(''),
                result,
                resultArr = [];

            const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

            for (let i = 0, k = 0; i < arrMes.length; i++) {
                if (String(arrMes[i]).match(/[A-Z]/)) {
                    result = (ALPHABET.indexOf(arrMes[i]) + ALPHABET.indexOf(arrKey[k % arrKey.length])) % ALPHABET.length
                    resultArr.push(ALPHABET[result])
                    k++
                } else {
                    resultArr.push(arrMes[i])
                }
            }

            if (VigenereCipheringMachine) {
                return resultArr.join('')
            } else {
                return resultArr.reverse().join('')
            }
        }

    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error()
        } else {
            let arrMes = message.toUpperCase().split(''),
                arrKey = key.toUpperCase().split(''),
                result,
                resultArr = [];



            const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

            for (let i = 0, k = 0; i < arrMes.length; i++) {
                if (String(arrMes[i]).match(/[A-Z]/)) {
                    result = (ALPHABET.indexOf(arrMes[i]) + ALPHABET.length - ALPHABET.indexOf(arrKey[k % arrKey.length])) % ALPHABET.length
                    resultArr.push(ALPHABET[result])
                    k++
                } else {
                    resultArr.push(arrMes[i])
                }
            }
            if (VigenereCipheringMachine) {
                return resultArr.join('')
            } else {
                return resultArr.reverse().join('')
            }
        }
    }
}

module.exports = VigenereCipheringMachine;
