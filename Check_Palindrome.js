// Given a string of length N. Check if the given string is a palindrome without using any built-in functionality.

// Sample Input
// input: N = 9, string: malayalam
// Sample Output
// Output: Yes
// Sample Input
// input: N = 5, string: masai
// Sample Output
// Output: No
// Sample Explanation
// Self explanatory.

// Expected Time Complexity
// O(N), where N is the size of the string

// Expected Space Complexity
// O(1), i.e., constant space complexity.

// Constraints
// 1 <= N <= 100000

let str = "malayalam"

let i = 0
let j = str.length-1
isPalin = true

while(i < j){
    if(str[i] !== str[j]){
        isPalin = false
        break
    }
    i++
    j--
}

isPalin? console.log(true): console.log(false)
