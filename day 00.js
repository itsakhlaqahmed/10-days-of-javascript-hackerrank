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


// To do *************************

/**
*   Calculate the area of a rectangle.
**/
function getArea(length, width) {
    let area = length * width;
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter = (length + width) * 2;
    
    return perimeter;
}

