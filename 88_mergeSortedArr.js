// https://leetcode.com/problems/merge-sorted-array/

var merge = function(nums1, m, nums2, n) {
    let pt1 = m - 1;
    let pt2 = n - 1;
    let pt1Length = nums1.length - 1;
    while(pt2 >= 0) {
        if (nums1[pt1] >= nums2[pt2]) {
            nums1[pt1Length--] = nums1[pt1--];
        } else  {
            nums1[pt1Length--] = nums2[pt2--];
        }
    }
};