// https://leetcode.com/problems/car-pooling/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    // trip locations are fixed to 1000
    let totalPassengersAtLocation = new Map();
    let maxDestination = 0;
    
    trips.forEach(([pass, start, des]) => {
        // At start passengers getInto the bus, so add the count
        totalPassengersAtLocation.set(start, (totalPassengersAtLocation.get(start) || 0) + pass);
        
        // At destination passenger getdown the bus, so remove the count
         totalPassengersAtLocation.set(des, (totalPassengersAtLocation.get(des) || 0) - pass);
        maxDestination = Math.max(maxDestination, des);
    });
    
    // go through the entire location list and check if at any point 
    // count is greter than capacity
    
    let currentPassCount = 0
    for(let i = 0; i <= maxDestination; i++) {
        currentPassCount += totalPassengersAtLocation.get(i) || 0;
        if(currentPassCount > capacity) {
            return false;
        }
    }
    
    return true;
};


// another approach

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    
    let startArr = [];
    let endArr = [];
    
    // split it inot start and end. subarrays
    trips.forEach(([pass,start,end]) => {
        startArr.push([pass, start]);
        endArr.push([-pass, end]);
    })
    
    // sort both arrays based on start end params
    startArr.sort((a,b) => a[1] - b[1]);
    endArr.sort((a,b) => a[1] - b[1]);
    
    // use 2 pointer and travers thorugh each element
    
    let sp =0, ep=0;
    let currCount = 0
    while(sp < startArr.length) {
        
        if(startArr[sp][1] === endArr[ep][1]) {
            currCount +=   startArr[sp][0] + endArr[ep][0]
            sp++;
            ep++;
        } else if(startArr[sp][1] <  endArr[ep][1]) {
            currCount += startArr[sp][0];
            sp++;
        } else {
            currCount += endArr[ep][0];
            ep++;
        }
        
        
        if(currCount > capacity) {
            return false;
        }
    }
    
    return true;
};
