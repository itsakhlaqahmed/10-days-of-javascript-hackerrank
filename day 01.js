

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonants = []
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'a' | s[i] === 'i' | s[i] === 'o' | s[i] === 'u' | s[i] === 'e'){
            console.log(s[i]);
        }
        else {
            consonants.push(s[i]);
        }
    }
    
    for (let i = 0; i < consonants.length; i++){
        console.log(consonants[i]);
    }
}


// Task 02
// Regex function which returns regex of string starting and ending with same vowel with anything in between

function regexVar() {

    
    let re = /^[aeiou]$|^([aeiou]).*\1$/
    
    /*
     * Do not remove the return statement
     */
    return re;
}

