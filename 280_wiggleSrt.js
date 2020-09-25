//https://leetcode.com/problems/wiggle-sort/

var wiggleSort = function(nums) {
    // sort it
    for(let i = 0 ; i<nums.length-1;i++) {
        if( ((i% 2 === 0 ) && (nums[i] > nums[i+1])) ||
            ((i%2 ===1 && (nums[i] < nums[i+1])))) {
         swapEle(nums, i, i+1)   
        }
    }
};


function swapEle(nums, a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]]
}