// Check for anagrams
// Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.

// Sample Input
// input: N = 4, X = abcd, M = 4, Y = dacb
// Sample Output
// Output: Yes
// Sample Explanation
// All the characters of string "abcd" is present in "dacb" and in same frequencies. Hence both are anagram of each other.

// Expected Time Complexity
// O(N+M), where N and M is the sizes of the given strings

// Expected Space Complexity
// O(1), i.e., constant space complexity.

// Constraints
// 1 <= N,M <= 100000

let N = 4
let X = "abcde"
let M = 4
let Y = "dacbe"

if(X.length !== Y.length){
    console.log(false)
} else{
    X = X.split("").sort()
    Y = Y.split("").sort()
    X.join("") == Y.join("")? console.log(true): console.log(false)
}

