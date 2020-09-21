// https://leetcode.com/problems/intersection-of-three-sorted-arrays/


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let pt1 = 0
    let pt2 = 0
    let pt3 = 0;
    
    let result = [];
    
    while(pt1 < arr1.length && pt2 < arr2.length && pt3 < arr3.length) {
        if(arr1[pt1] === arr2[pt2] && arr1[pt1] === arr3[pt3]) {
            result.push(arr1[pt1]);
            pt1++;
            pt2++;
            pt3++;
            continue;
        }    
        
        if(arr1[pt1] <= arr2[pt2] && arr1[pt1] <= arr3[pt3]) {
            pt1++;
        }  
        
        if( arr2[pt2] <= arr1[pt1]  && arr2[pt2] <= arr3[pt3]) {
            pt2++
        } else {
            pt3++
        }
    }
    return result;
};