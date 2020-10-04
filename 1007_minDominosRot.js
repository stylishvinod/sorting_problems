// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    let countA = new Array(7).fill(0);
    let countB = new Array(7).fill(0);
    let common = new Array(7).fill(0);
    
    for(let i = 0 ; i < A.length; i++) {
        countA[A[i]]++;
        countB[B[i]]++;
        if(A[i] === B[i]) {
            common[A[i]]++;
        }
    }
    
    for(let i = 1; i < countA.length; i++) {
        if(countA[i] + countB[i] - common[i] === A.length) {
            return Math.min(countA[i]-common[i], countB[i]-common[i])
        }
        
    }
    return -1;
};
