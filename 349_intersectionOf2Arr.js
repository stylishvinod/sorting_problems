
// https://leetcode.com/problems/intersection-of-two-arrays/


// approach:1
var intersection = function(nums1, nums2) {
    let set = new Set();
    let result = [];
    for(const u of nums1) {
        if(!set.has(u)) {
            set.add(u)
        }
    }
    
    for(const v of nums2) {
        if(set.has(v)) {
            result.push(v);
            set.delete(v);
        }
    }
    return result;
};


// approach::2

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = new Set();
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)
    
    let i=0, j=0;
    
    while((i < nums1.length) && (j < nums2.length)) {
        
        if(nums1[i] === nums2[j]) {
            result.add(nums1[i])
            i++; j++;
        } else if(nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    
    return [...result]
};