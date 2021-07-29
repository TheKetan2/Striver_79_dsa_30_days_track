/**
 * https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=> parseInt(a[0])-parseInt(b[0]));
    let flag = true;
    while(flag){
        flag = false;
        for(let i =1; i<intervals.length;i++){
            if(intervals[i-1][1]>=intervals[i][0]){
                intervals[i-1] = [intervals[i-1][0], Math.max(intervals[i][1], intervals[i-1][1])]
                intervals.splice(i,1);
                flag = true;
            }
        }
    }
    return intervals;
};