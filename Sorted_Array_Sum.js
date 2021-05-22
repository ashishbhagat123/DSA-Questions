// Two Numbers in sorted array whose sum is K
// Given a sorted array of integers nums and an integer K, return indices of the two numbers such that they add up to K.

// Note: You can assume that the answer always exists

// Sample Input
// array = [2,7,11,15], K = 9
// Sample Output
// [0,1]
// Sample Explanation
// As seen from the sample input, the values at index 0 and 1 add up to the required value of 9. Therefore, the output is [0,1].

// Expected Time Complexity
// O(N),where N is the size of the array.

// Expected Space Complexity
// O(1), Auxillary space complexity.

// Constraints
//  2 <= nums.length <= 103
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9

const arr = [2,7,11,15]
let K = 9

let start = 0
let end = arr.length-1

while(start< end){
    if(arr[start] + arr[end] === K){
        console.log(start,end)
        break
    }else if(arr[start] + arr[end] > K){
        end--
    }else {
        start++
    }
}