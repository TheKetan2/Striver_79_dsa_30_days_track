/**
 * https://leetcode.com/problems/set-matrix-zeroes/submissions/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = [],col=[];
    for(let i = 0;i<matrix.length;i++){
        for(let j =0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                row.push(i);
                col.push(j);
            }
        }
    }
    for(let i = 0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(row.includes(i) || col.includes(j)){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};