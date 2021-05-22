// Binary Search
// Given a sorted array of N integers and you need to find if Key (K) exists in the array or not, write an efficient code to do this.

// Note: Try to do it by implementing Binary Search both iteratively and recursively

// Sample Input
// N = 4, arr[] = { 1, 3, 4, 7 }, K = 3
// Sample Output
// true
// Sample Explanation
// Using Binary Search we find that key 3 exists in the array.
// Expected Time Complexity
// O(logN), where N is the length of the array

// Expected Space Complexity
// O(1), constant space solution

// Constraints
// 1<= N <= 10^6
// 1<= arr[i] <= 10^6



const arr = [1, 3, 4, 7 ]
let k = 1

let start = 0
let end = arr.length-1
let prev = 0
let mid;

while(start <= end){
    mid = Math.floor((start+end)/2)
    if(prev === mid){
        mid = Math.ceil((start+end)/2)
    }
    prev = mid
    if(arr[mid] === k){
        break
    }
    else if(arr[mid] < k){
        start = mid
    } else if(arr[mid] > k){
        end = mid
    }
}
console.log(mid)

// Time Complexity = O(log(n))
// Space Complexity = O(1)