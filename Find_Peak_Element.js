// Find Peak Element
// A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// Note : You may imagine that nums[-1] = nums[n] = -∞.

// Sample Input
// array = [1,2,3,1]
// Sample Output
// Output: 2
// Sample Explanation
// 3 is a peak element and your function should return the index number 2.

// Expected Time Complexity
// O(log(N)), where N is the size of the array

// Expected Space Complexity
// O(1), i.e., constant space complexity.

// Constraints
// 1 <= nums.length <= 1000
// -2^31 <= nums[i] <= 2^31 - 1
// nums[i] != nums[i + 1] for all valid i.

let arr = [1,2,3,1]
let i = 0;
let k = 0;
