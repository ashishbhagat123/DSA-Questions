// Nth Fibonacci
// Given a positive integer N. Find the Nth fibonacci number.

// NOTE : In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. The beginning of the sequence is thus [0,1,2,3,5,8,13,21,34,...]

// Sample Input
// input: N = 5
// Sample Output
// A: 3
// Sample Explanation
// Fibonacci series: 0 1 1 2 3 5 8 13 .... Hence 5th fibonacci is: 3

// Expected Time Complexity
// O(N)

// Expected Space Complexity
// O(N), Auxillary space complexity.

// Constraints
// 1 <= N <= 100000

let N = 5
let num = 0
let sum = 0
let aux = []

const findFibonacci = (N, num) => {
    if(num === 0 || num === 1){
        aux.push(num)
    } else {
        aux.push((aux[num-1]+aux[num-2]))
    }
    if(N == num+1){
        console.log(aux[aux.length-1])
        return
    }
    num++
    return findFibonacci(N,num)
}

findFibonacci(N,num)

// Time Complexity = O(n)
// Space Complexity = O(n)
