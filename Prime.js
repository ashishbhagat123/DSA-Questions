// Given an integer N. Check whether N is prime or not.

// Sample Input
// input: N = 10
// Sample Output
// Output: No
// Sample Input
// input: N = 7
// Sample Output
// Output: Yes
// Sample Explanation
// Self explanatory.

// Expected Time Complexity
// O(sqrt{N})

// Expected Space Complexity
// O(1), i.e., constant space complexity.

// Constraints
// 1 <= N <= 1000000000


let prime = true

const checkPrime = (n) => {
    if(n === 0){
        prime = false
    } else if(n === 1){
        prime = true
    } else {
        let count = 0
        for(let i = 1; i < Math.sqrt(n); i++){
            if(n % i === 0){
                count++
            }
        }
        if(count > 1){
            prime= false
        }
    }

    prime === true? console.log("Yes"): console.log("No")
}

checkPrime(47)