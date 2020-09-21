
// https://leetcode.com/problems/meeting-rooms/

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort(([s1, e1], [s2, e2]) => s1-s2);
    console.log({intervals})
    for(let i = 1; i< intervals.length; i++) {
        let [s1, e1] = intervals[i-1];
        let [s2, e2] = intervals[i];
        
        if(e1 > s2) {
            return false
        }
    }
    
    return true;
    
};