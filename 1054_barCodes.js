
// https://leetcode.com/problems/distant-barcodes/

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    let map = new Map();
    
    //count each element
    for(let i = 0 ; i<barcodes.length;i++ ) {
        map.set(barcodes[i], (map.get(barcodes[i]) || 0) + 1);
    }
    
    // conver map to array
    let tmpArry = [];
    
    map.forEach((value, key) => tmpArry.push([value, key]))
    
    //sort based on value(count)
    tmpArry.sort((a,b) => b[0]-a[0]);

    let result = [];
    let i = 0;
    let count = 0
    while(i < barcodes.length) {
        
      result[i] = tmpArry[0][1];
        
        if(--tmpArry[0][0] === 0) {
            tmpArry.shift();
        }
        
        i += 2;
        if( i >= barcodes.length && count === 0) {
            i = 1;
            count = 1;
        }
    }
    return result;
};