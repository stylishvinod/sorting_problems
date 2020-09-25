

// https://leetcode.com/problems/insert-interval/


// approach1: O(nlogn)
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    //sort again all intervals
    intervals.sort((a,b) => a[0]-b[0]);
    let result = [intervals[0]];
    
    for(let i = 1; i < intervals.length; i++) {
        let [s1, e1] = result[result.length - 1];
        let [s2, e2] = intervals[i];
        
        if(e1 >= s2) {
            result[result.length-1][1] = Math.max(e1, e2);
        } else {
            result.push(intervals[i])
        }
    }
    
    return result;
    
    
};

//approach:2 O(n)

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(!intervals.length) return [newInterval]
    
    let insertInt = true;
    let result = [];
    for(let i = 0 ; i <intervals.length; i++) {
        
        if(insertInt) {
            let [s1,e1] = intervals[i];
            let [s2,e2] = newInterval;
            // new interval start time is greter
            if(s1 < s2) {
                if(e1 < s2) {
                    result.push(intervals[i])
                } else {
                    result.push([s1, Math.max(e1, e2)]);
                    insertInt = false;
                }
            } else {
                // new inerval start time is less
                // if new interval end time also less than start time
                // need to inser both
                if(e2 < s1) {
                    result.push(newInterval)
                    result.push(intervals[i])
                } else {
                    result.push([Math.min(s1, s2), Math.max(e1, e2)])
                }
                 insertInt = false;
            }
        } else {
            // regular merge intervals logic
            let [s1, e1] = intervals[i];
            
            let [s2,e2] = result[result.length-1];
            
            if(s1 <= e2) {
                result[result.length-1][1] = Math.max(e1, e2)
            } else {
                result.push(intervals[i])
            }
        }
    }
    if(insertInt)  result.push(newInterval);
    return result;
};