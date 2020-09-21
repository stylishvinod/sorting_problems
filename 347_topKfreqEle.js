
// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    
    // capture count of each element in map
    nums.forEach(num => {
        let count = map.get(num) ? map.get(num) : 0;
        map.set(num, count + 1)
    });
    
    let arr = [];
    // conver map to array 
    // imp: while converting map to array, we have to write reverse order of key and val
    map.forEach((val, key) => arr.push([val, key]));

    // apply quickselect on counts
    quickSelect(arr, 0, arr.length-1, k);
    
    let start = (arr.length-k);
    return arr.slice(start, arr.length).map(a => a[1]);
};


function quickSelect(arr, start, end, k) {
    if(start > end) return;
    let pivot = getPartitionIndex(arr, start, end);
    let resultCount = arr.length-k;
    if(pivot === resultCount) {
        return;
    }
    
    if(pivot <  resultCount) {
        quickSelect(arr, pivot+1, end, k);
    } else {
        quickSelect(arr, start, pivot-1, k);
    }
}


function getPartitionIndex(arr, start, end) {
    // conside pivot as start element;
    let i = start + 1;
    let j = end;
    let pivot = arr[start][0];
    while (i <= j) {
        if (arr[i][0] <= pivot) {
            i++;
        } else if (arr[j][0] > pivot) {
            j--;
        } else {
            swapEle(arr, i, j);
        }
    }
    swapEle(arr, start, i - 1);
    return i - 1;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
}
function swapEle(arr, start, end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
}
