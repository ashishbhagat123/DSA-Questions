// Rotate square matrix by 90 degrees
// Given a square matrix of size N*N. Print the matrix after rotating it by 90 degrees in anti-clockwise direction.

// Sample Input
// input: N = 3
// Matrix : 1 2 3
// 	 4 5 6
// 	 7 8 9
// Sample Output
// Output: 3 6 9
// 	2 5 8
// 	1 4 7
// Sample Explanation
// Self explanatory.

// Expected Time Complexity
// O(N*N)

// Expected Space Complexity
// O(1), i.e., constant space complexity.

// Constraints
// 1 <= N <= 1000


// function runProgram(input) {
//     input = input.trim().split("\n")
//     // console.log(input)
//     var dim = +input[0]
//     var mtx = []
//     for(var i=0;i<dim;i++){
//     mtx[i]=input[i+1].trim().split(" ")
//     }
//     // console.log(mtx)
//     for(var j=dim-1;j>=0;j--){
//     var mtx1 = ""
//     for(var i=0;i<dim;i++){
//     mtx1+=mtx[i][j]+" "
//     }
//     console.log(mtx1)
//     }
    
//     } 

const matrix = [
    [1, 2, 3,6],
    [4, 5, 6, 8],
    [7, 8, 9, 11],
    [12,13,14,15]
];

const rot = []
let n = matrix.length
for(let i = 0; i <n/2; i++){
    for(let j = i; j < n - (i+1); j++){
        console.log("j", j, "i", i)
            let temp = matrix[i][j]
			matrix[i][j] = matrix[j][n-i-1]
			matrix[j][n-i-1] = matrix[n-i-1][n-j-1]
			matrix[n-i-1][n-j-1] = matrix[n-j-1][i];
			matrix[n-j-1][i] = temp
    }
}
console.log(matrix)