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

// const mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const rot = []
// let n = mat.length
// for(let i = 0; i <n; i++){
//     rot[i] = []
//     for(let j = 0; j < n; j++){
//         rot[i][j] = mat[j][mat.length - [i+1]]
//     }
// }
// console.log(rot)

// Time Complexity = O(n*n)
// Space Complexity = O(n * m)