// task 03 

// string starts with what?
// an smart way to use regex

function getLetter(s) {
    let letter;
    // Write your code here
    
    switch(true){
        case /^[aeiou].*/.test(s):
            letter = 'A';
            break;
            
        case /^[bcdfg].*/.test(s):
            letter = 'B';
            break;
            
        case /^[hjklm].*/.test(s):
            letter = 'C';
            break;
        case /^[npqrstvwxyz].*/.test(s):
            letter = 'D';
            break;
        
        
    }
        
    return letter;
}




// task 01
    
    // let r = Int(readline()!)!;
    let r = parseFloat(readLine())

  
    // Print the area of the circle:
    console.log(r*r*PI)
    // Print the perimeter of the circle:
    console.log(2*r*PI)




// task 02 
// grade calculator

function getGrade(score) {
    let grade;
    // Write your code here
    if (25 < score && score<= 30){
        grade = 'A'
    }
    if (20 < score && score <= 25){
        grade = 'B'
    }
    if (15 < score && score <= 20){
        grade = 'C'
    }
    if (10 < score && score <= 15){
        grade = 'D'
    }
    if (5 < score && score <= 10){
        grade = 'E'
    }
    if (0 <= score && score <= 5){
        grade = 'F'
    }
    
    return grade;
}