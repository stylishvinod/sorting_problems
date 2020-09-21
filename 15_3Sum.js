//https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
   let result = []
    for(let i=0; i < nums.length-2; i++) {
       // start two sum problem
       let j = i+1;
       let k = nums.length-1;
       while(j < k) {
           let tmpSum = nums[j] + nums[k] + nums[i];
           if(tmpSum === 0) {
               result.push([nums[i], nums[j], nums[k]]);
               while(nums[j] === nums[j+1]) j++;
               while(nums[k] === nums[k-1]) k--;
               j++;
               k--;
           } else if(tmpSum < 0) {
               while(nums[j] === nums[j+1]) j++;
               j++;
           } else {
               while(nums[k] === nums[k-1]) k--;
               k--;
           }
       }
        while(nums[i] === nums[i+1]) i++;
   }
   return result;
};