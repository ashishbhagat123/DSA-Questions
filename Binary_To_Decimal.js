// 00000000000000000000000000000111
// Sample Output
// 7
// Sample Explanation
// Self Explanatory
// Expected Time Complexity
// O(1), constant time complexity

// Expected Space Complexity
// O(1), constant space complexity

// Constraints
// 1<= length of binary string <= 32


let num = "00000000000000000000000000000111"
let binary = ""
num = num.split("")

for(let i = 0; i < num.length; i++){
    if(num[i] === "0"){
        num[i] = "5"
    }else {
        break;
    }
}

num = num.filter((e) => e !== "5").join("")


