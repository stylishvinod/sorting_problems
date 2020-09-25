

// https://leetcode.com/problems/advantage-shuffle/


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    let tmpA = [...A].sort((a,b) => b-a)
    let tmpB = [...B].sort((a,b) => b-a);
    let map = new Map();
    
    for(let i = 0 ; i < B.length; i++) {
        let arr = map.get(B[i]) || [];
        map.set(B[i], [...arr, i]);
    }
    
    let startA = 0 ;
    let endA = A.length - 1;
    let startB = 0;
    
    while(startB < B.length) {
        let resArr = map.get(tmpB[startB]);
        let index = resArr.pop();
        map.set(tmpB[startB], [...resArr]);
        
        if( tmpA[startA] > tmpB[startB]) {
            A[index] = tmpA[startA];
            startA++;
        } else {
            A[index] = tmpA[endA];
            endA--
        }
        startB++
    }
  return A;  
};



/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    let tmp = [...A];
    tmp.sort((a,b) => a-b);
    
    for(let i = 0 ;i < B.length; i++) {
        A[i] = getMaxEle(tmp, B[i]);
    }
    return A;
};

function getMaxEle(arr, num) {
    let max = null;
    for(let i = 0 ; i< arr.length; i++) {
        if(arr[i] > num) {
            max = arr[i];
            arr[i] = null;
            break
        }
    }
    
    if(max === null) {
        for(let i = 0 ; i< arr.length; i++) {
            if(arr[i] !== null) {
                max = arr[i];
                arr[i] = null;
                break;
            }
        }
    }
    return max;
}