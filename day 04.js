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