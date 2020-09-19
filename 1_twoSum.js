
// https://leetcode.com/problems/two-sum/solution/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0 ; i < nums.length; i++) {
        let second = target - nums[i];
        if(map.has(second)) {
            return [map.get(second), i]
        } else {
            map.set(nums[i], i)
        }
    }
    
};