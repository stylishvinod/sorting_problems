// https://leetcode.com/problems/two-city-scheduling/

var twoCitySchedCost = function(costs) {
    let len = costs.length;
    let total = 0;
    costs.sort((a,b) =>  (b[1] - b[0]) - (a[1]-a[0]));
    
    for(let i=0; i < len; i++) {
        total += (i< (len/2))? costs[i][0] : costs[i][1]
    }
    return total;
};