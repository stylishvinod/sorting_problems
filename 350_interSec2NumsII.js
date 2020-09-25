
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
    let map = new Map();
    let result = [];
    // write nums1 elements to map with count
    nums1.forEach(num => {
        let count = map.get(num) ? map.get(num) : 0;
        map.set(num, count + 1);
    });
    
    // check if nums2 element is present in map
    // then move that value to result and reduce the count
    
    nums2.forEach(num => {
        if(map.get(num)) {
            result.push(num);
            map.set(num, map.get(num)-1);
        }
    })
    return result;
    
};