// Sample Input
// N = 7
// Sample Output
// 00000000000000000000000000000111
// Sample Explanation
// Self Explanatory
// Expected Time Complexity
// O(1), constant time complexity

// Expected Space Complexity
// O(1), constant space complexity

// Constraints
// 0<= N <= (2^32)-1


let num = 7


let str = ""
while(num > 0){
    let rem = num % 2
    str = rem + str
    num = Math.floor(num / 2)
}
console.log(str)

// Time Complexity = O(Log(n))
// Space Complexity = O(1)