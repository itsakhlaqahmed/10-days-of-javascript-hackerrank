// task 01

// find second largest number in any array


function getSecondLargest(nums) {
    // Complete the functio,mn
    let largest = 0
    let secondLargest = 0
    
    nums.forEach((n) => {
        if (largest < n){
            secondLargest = largest;
            largest = n;
        }
        
        if (secondLargest < n && n < largest){
            secondLargest = n
        }
    })
    
    return secondLargest;
}


// task 02
// retrun an object

function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: (a+b)*2,
        area: a*b
    }
}


// task 03
// iteratin over array of objects

function getCount(objects) {
    let count = 0;
    objects.forEach((o, i) => {
        if (o.x === o.y){
            count++;
        }
    })
    
    return count;
}  



// task 04

// basic classes

class Polygon{
    constructor(arr){
        this.sides = arr;
    }
    
    perimeter () {
        let peri = 0
        
        for (let i = 0; i < (this.sides).length; i++){
            peri += this.sides[i]
        }
        
        return peri;
    }
}