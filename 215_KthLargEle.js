// https://leetcode.com/problems/kth-largest-element-in-an-array/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length-1, k)
};

function quickSelect(arr, start, end, k) {
    if(start > end) return;
    const targetIndex = arr.length - k;
    let pivot = getPivot(arr, start ,end);
    if( pivot === targetIndex) {
        return arr[pivot];
    } else if(pivot < targetIndex) {
        return quickSelect(arr, pivot+1, end, k);
        
    } else {
        return quickSelect(arr, start, pivot-1, k);
    }
}


function swapEle(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}


function getPivot(arr, start, end) {
    let i = start + 1;
    let j = end;
    const pivot = arr[start];
    while(i <= j) {
        if(arr[i] <= pivot) {
            i++
        } else if(arr[j] > pivot){
            j--
        } else {
            swapEle(arr, i, j);
        }
    }
    swapEle(arr, start, i-1);
    
    return i-1;
}