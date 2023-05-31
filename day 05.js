// task 01
// modifying an array and using arrow function

function modifyArray(nums) {
    
    nums.forEach((n,i) => {
        if (n % 2){
            nums[i] = n*3;
        } else {
            nums[i] = n*2;
        }
    })
    
    return nums;
}