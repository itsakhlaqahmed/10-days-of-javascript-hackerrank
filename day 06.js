// task 01
// regex for Mr. Er. Dr. Mrs. etc

function regexVar() {
    
    let re = /[MDE][rs][s]?\.[a-zA-Z]+$/

    // re = /(?:M(:?r|rs|s)|Dr|Er)\.[a-zA-Z]+/          it is more accurate way of writing it
    
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}



// task 02 
// regex to capture all numbers in a string 

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    let re = /\D+/g
    /*
     * Do not remove the return statement
     */
    return re;
}