// Balanced parenthesis
// Given a string S having N characters. Any of the characters of the string are either of '(', '{', '[', ')', '}', ']'. Check whether the pairs and the orders of '{', '}', '(', ')', '[', ']' are correct or not.

// Sample Input
// input: N = 6
// S : [()]{}
// Sample Output
// A: -"Yes"
// Sample Input
// input: N = 4
// S : [(])
// Sample Output
// A: -"No"
// Sample Explanation
// Self explanatory.

// Expected Time Complexity
// O(N), where N is the size of the string S.

// Expected Space Complexity
// O(N), where N is the size of the string S.

// Constraints
// 1 <= N <= 100000

let S = "[()]{}";
let Open = ["{", "[", "("];
let Close = ["}", "]", ")"];
let stack = [];

for (let i = 0; i < S.length; i++) {
    if (stack.length === 0) {
        stack.push(S[i]);
    } else {
        for (let j = 0; j < Close.length; j++) {
            if (S[i] === Close[j]) {
                if (stack[stack.length - 1] === Open[j]) {
                    stack.pop();
                } else {
                    break;
                }
            } else if (S[i] === Open[j]) {
                stack.push(Open[j]);
            }
        }
    }
}

stack.length ? console.log("No") : console.log("Yes");
