// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return intervals;
    
    intervals.sort(([s1,e1], [s2,e2]) => s1-s2);
    
    let result = [];
    result.push(intervals[0]);
    
    for(let i = 1; i < intervals.length; i++) {
        let [s1, e1] = result[result.length -1];
        let [s2, e2] = intervals[i];
        
       if(e1 < s2) {
           result.push(intervals[i]);
       } else if(e1 >= s2) {
           result[result.length-1][1] = Math.max(e1,e2);
       }   
    }
    
    return result;
};