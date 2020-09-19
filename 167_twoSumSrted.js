// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length;
    
    while(start < end) {
        let tmpSum = numbers[start] + numbers[end];
        if( tmpSum === target) {
            return [start+1, end+1]
        } else if(tmpSum < target) {
            start++;
        } else {
            end--
        }
    }
};