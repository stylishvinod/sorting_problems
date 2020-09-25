// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let k = 0;
    
    while(k <= end) {
        if(nums[k] === 0) {
            swapEle(nums, start, k);
            start++
            k++;
        } else if(nums[k] === 2) {
            swapEle(nums, k, end);
            end--;
        } else {
            k++;
        }
    }
};


function swapEle(nums, a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]]
}