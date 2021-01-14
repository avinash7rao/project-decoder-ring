
function caesar(input, shift, encode = true) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let result = [];
    let inputArr = input.toLowerCase().split("");
    if(shift === 0 || shift < -25 || shift > 25 || !shift) {
        return false;
    }
    for(let i = 0; i < inputArr.length; i++) {
        if(alphabet.indexOf(inputArr[i]) === -1) {
            result.push(inputArr[i]);
        } else {
            for(let j = 0; j < alphabet.length; j++) {
                if(inputArr[i] === alphabet[j]) {
                    let index;
                    if(encode) {
                        index = j + shift;
                    } else {
                        index = j - shift;
                    }
                    if(index > 25) {
                        index = index - 26;
                    } else if (index < 0) {
                        index = index + 26;
                    }
                    result.push(alphabet[index]);
                }
            }
        }
    }
    return result.join("");
}


module.exports = caesar;
