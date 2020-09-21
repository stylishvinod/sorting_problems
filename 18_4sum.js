//https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b);
    let finalResult = [];
    
    function nEleSum(arr, target, tmpResult, k) {
        if(k === 2) {
            twoSum(arr, target, tmpResult);
            return;
        }
        
        for(let i = 0 ; i < arr.length; i++) {
            nEleSum(arr.slice(i+1), target-arr[i], [...tmpResult, arr[i]], k-1);
            while(arr[i] === arr[i+1]) i++;
        }
        
    }
    
    function twoSum(arr, target, tmpResult) {
        let left = 0, right = arr.length - 1;
        
        while(left < right) {
            let sum = arr[left] + arr[right];
            
            if(sum === target) {
                finalResult.push([...tmpResult, arr[left], arr[right]]);
                
                while(arr[left] === arr[left + 1]) left++;
                while(arr[right] === arr[right-1]) right--;
                left++;
                right--
            } else if( sum < target) {
                while(arr[left] === arr[left+1]) left++;
                left++
            } else {
             while(arr[right] === arr[right-1]) right--;
                right--;
            }
        }
    }
    
    nEleSum(nums, target, [], 4);
    return finalResult;
};