'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

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

