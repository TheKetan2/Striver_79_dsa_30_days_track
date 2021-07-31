/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let sol =[],prevRow;
    for(let i = 1; i<=numRows;i++){
        let row = new Array(i).fill(1);
        if(prevRow){
            for(let j = 1;j<i-1;j++){
                row[j] = prevRow[j]+prevRow[j-1];
            }
        }
        sol.push(row);
        prevRow = row;
    }
    return sol;
};