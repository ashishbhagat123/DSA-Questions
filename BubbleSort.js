// Bubble sort
// Given an array A having N positive integers. Sort the array A using bubble sort.

// Sample Input
// input: N = 5
// A : 5 1 6 3 7
// Sample Output
// A: 1 3 5 6 7
// Sample Explanation
// Self explanatory.

// Expected Time Complexity
// O(N*N)

// Expected Space Complexity
// O(1), i.e., constant space complexity.

// Constraints
// 1 <= N <= 1000

const arr = [5, 2, 6, 5, 3, 7]


for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp 
        }
    }
}
console.log(arr)

// Time Complexity = O(n*n)
// Space Complexity = O(1)