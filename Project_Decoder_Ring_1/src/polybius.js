  
function polybius(input, encode = true) {
    let alphabet = ["a","b","c","d","e","f","g","h","i/j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let cipher = [11,21,31,41,51,12,22,32,42,52,13,23,33,43,53,14,24,34,44,54,15,25,35,45,55];
    let string = input.toLowerCase();
    let result = "";

    
    if(input.replace(/ /, "").length % 2 !== 0 && !encode) {
        return false;
    }

    if(encode) {
        for(let i = 0; i < string.length; i++) {
            if(string[i] === " ") {
                result += " ";
            } else if(string[i] === "i" || string[i] === "j") {
                result += 42;
            } else {
                for(let j = 0; j < alphabet.length; j++) {
                    if(alphabet[j] === string[i]) {
                        result += cipher[j];
                    }
                }
            }
        }
    }

    if(!encode) {
        for(let i = 0; i < string.length; i+=2) {
            if(string[i] === " ") {
                result += " ";
                i--;
            } else if((string[i] + string[i+1]) == "42") {
                result += "(i/j)";
            } else {
                for(let j = 0; j < cipher.length; j++) {
                    if((string[i] + string[i+1]) == cipher[j]) {
                        result += alphabet[j];          
                    }
                }
            }
        }
    }
    return result;
}

module.exports = polybius;
