// Day 01 challenge


// challenge 1 
// *********** Factorial Function ************

/*
 * Create the function factorial here
 */

const factorial = (n) => {
    if (n === 1){
        return n;
    }
    else {
        return n*factorial(n-1)
    }
}



// task 02
// reverse string function with try and catch

function reverseString(s) {
    try {
        
       let strArray = s.split('');
       strArray.reverse();
       strArray = strArray.join('')
       console.log(strArray)
    }
    catch(err){
        console.log(err.message)
        console.log(s)
    }
}


// task 03

// check number postivity

function isPositive(a) {
    if (a > 0) return "YES";
    if (a === 0) throw new Error("Zero Error");
    if (a < 0) throw new Error("Negative Error");
}
