// FIND DUPLICATE IN AN ARRAY
// Given an array A of N elements that contains elements from 1 to N-1. All elements occur once except one which occurs twice. Find the repeating element.

// Sample Input
// N = 5, A = [1, 3, 3, 2, 4].
// Sample Output
// Output: 3
// Sample Explanation
// Element 3 appears twice in the array. Hence it is the only repeating element.

// Expected Time Complexity
// O(N), where N is the size of the array

// Expected Space Complexity
// O(1), i.e., constant space complexity.

// Constraints
// 1 <= N <= 100000


let arr = [1, 3,3,2,4]

// time complexity = O(n*n)

// let obj = arr.reduce((prev,curr) => {
//     prev[curr] = (prev[curr] || 0) + 1
//     return prev
// },{})

// let val = 1
// let key
// for(i in obj){
//     if(obj[i] > val){
//         val = obj[i]
//         key = i
//     }
// }
// console.log(key)

let S1 = 0
for(i in arr){
    S1 += arr[i]
}
let n = arr.length
S2 = [n * (n-1)]/2

console.log(S1 - S2)

// Time Complexity = O(n)