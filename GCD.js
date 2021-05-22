// GCD
// Given two integer N and M. Calculate the gcd of N and M.

// Sample Input
// input: N = 10, M = 6
// Sample Output
// Output: 2
// Sample Explanation
// 2 is the biggest factor that divides both 10 and 6.

// Expected Time Complexity
// O(log(MAX(N,M)))

// Expected Space Complexity
// O(1), i.e., constant space complexity.

// Constraints
// 1 <= N,M <= 1000000000

let N = 24
let M = 6

let i = 0
let j = N

let GCD = 0

while(i <= j){
    if(N % j === 0 && M % j === 0){
        GCD = j
        break;
    }
    j = Math.floor(j/2)
}
console.log(GCD)

// Time complexity = O(log(n))
// Space Complexity = O(1)