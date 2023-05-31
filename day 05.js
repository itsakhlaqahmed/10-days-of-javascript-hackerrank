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


// task 02
// OOP => Class & Inheritance

Rectangle.prototype.area = function (){
    return this.w * this.h;
}


class Square extends Rectangle {
    constructor (w,h){
        super(w,h);
        this.w = w;
        this.h = w;
    }
}


// task 03
// bitwise operator 

function getMaxLessThanK(n, k){
    let max = 0
    let bitResult = 0
    for (let i = 1; i <= n; i++){
        for (let j = i+1; j<=n; j++){
            bitResult = i&j;
            if (max < bitResult && bitResult < k){
                max = bitResult;
            }
        }
    }
    
    return max;
}
