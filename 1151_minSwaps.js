
// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/

/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    //count all 1's in the data
    let totalOnes = 0;
    
    for(let i = 0; i < data.length; i++) {
        if(data[i] === 1) {
            totalOnes++;
        }
    }
    
    // first check fro 0 to length of totalones how many 1's are present
    
    let windowCnt = 0;
    for(let i = 0; i<totalOnes; i++) {
        if(data[i] === 1) {
            windowCnt++;
        }
    }
    
    let left = 0, right = totalOnes;
    
    let maxCount = windowCnt;
    
    // window size whould be totalOnes counts, so move left and right points
    // check the count of 1's every time
    while(right < data.length) {
        // check if data[left] is alredy one, so need to decrement
        if(data[left] === 1) {
            windowCnt--;
        }
        left++;
        // check if data[right] is alredy one, so need to increment
        if(data[right] === 1) {
            windowCnt++;
        }
        right++;
        
        maxCount = Math.max(maxCount, windowCnt);
    }
    
    return totalOnes - maxCount;
};
