function substitution(input, alphabet, encode = true) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let lowerCaseInput = input.toLowerCase();
    let cipherAlphabet = alphabet;
    let result = "";

    if(alphabet.length > 26 || alphabet.length < 26) {
        return false;
    }

    let alphabetArray = alphabet.split("");
    let duplicateArray = [];
    for(let i = 0; i < alphabetArray.length; i++) {
        if(duplicateArray.includes(alphabetArray[i])) {
            return false;
        }
        else{(duplicateArray.push(alphabetArray[i]))}
    }
    
    if(encode) {    
        for(let i = 0; i < lowerCaseInput.length; i++) {
            if(lowerCaseInput[i] == " ") {
                result += lowerCaseInput[i];
            }
            else{
                for(let j = 0; j < letters.length; j++) {
                    if(lowerCaseInput[i] === letters[j]) {
                        result += cipherAlphabet[j];
                    }
                }
            }
        }
    }
    if(!encode) {
        for(let i = 0; i < lowerCaseInput.length; i++) {
            if(lowerCaseInput[i] == " ") {
                result += lowerCaseInput[i];
            }
            else{
                for(let j = 0; j < letters.length; j++) {
                    if(lowerCaseInput[i] === cipherAlphabet[j]) {
                        result += letters[j];
                    
                    }
                }
            }
        }

    }
    return result;
}
    




module.exports = substitution;
