// Sort an Array of 0s, 1s, or 2s
// Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

// Sample Input
// array = {0, 1, 2, 0, 1, 2}
// Sample Output
// array = {0, 0, 1, 1, 2, 2}
// Sample Explanation
// The array on sorting gives the resultant array as shown in the output  
// Expected Time Complexity
// O(N), where N is the size of the array.

// Expected Space Complexity
// O(1),Auxilliary Space

// Constraints
//  n == nums.length
//  1 <= n <= 300
//  array[i] is 0, 1, or 2.

const arr = [0, 1, 2, 0, 1, 2]

let str = ""
let abc = ""

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
        str = arr[i] + str
    } else if(arr[i] === 1){
        str = str + arr[i]
    } else {
        abc = abc + arr[i]
    }
}

console.log([...str, ...abc])
