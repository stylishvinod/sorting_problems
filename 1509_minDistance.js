
//ref :: https://www.youtube.com/watch?v=HQix60wTKPc
// https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/


var minDifference = function(nums) {
    const n = nums.length;

    if(n <= 4) return 0;
    nums.sort((a,b) => a-b)
    // case:1
    // starting and converting last 3 elements
    let op1 = Math.abs(nums[0]-nums[n-4]);

    // case:2
    // take second element, convert first and last 2 elements
    let op2 = Math.abs(nums[1] - nums[n-3]);

    // case:3
    // take 3rd ele and convert first 2 and last one.
    let op3 = Math.abs(nums[2] - nums[n-2]);

    // case:4
    // take last ele and convert first 3 elemnts
    let op4 = Math.abs(nums[3] - nums[n-1]);

    return Math.min(op1, op2, op3, op4)
    
};