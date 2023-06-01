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