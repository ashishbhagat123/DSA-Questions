// Sliding Window Maximum
// Given an array and an integer K, find the maximum for each and every contiguous subarray of size K.

// Sample Input
// arr[] = {1, 2, 3, 1, 4, 5}
// K = 3 
// Sample Output
// Output: 3 3 4 5
// Sample Explanation
// Maximum of 1, 2, 3 is 3
// Maximum of 2, 3, 1 is 3
// Maximum of 3, 1, 4 is 4
// Maximum of 1, 4, 5 is 5
// Expected Time Complexity
// O(N* log K), where N : Size of array, K: Size of sub-array

// Expected Space Complexity
// O(K) : Auxillary space, where K is the size of sub-array

const arr = [1, 2, 3, 1, 4, 5]
let k = 4
let output = ""

for(let i = 0; i < arr.length-(k-1); i++){
    let max = 0
    let start = i
    let end = start + (k-1)
    while (start <= end){
        if(arr[start] > arr[end] && arr[start] > max){
            max = arr[start]
        } else if(arr[end] > max){
            max = arr[end]
        }
        start++
        end--
    }
    output = output + " " + max
}

console.log(output.trim())