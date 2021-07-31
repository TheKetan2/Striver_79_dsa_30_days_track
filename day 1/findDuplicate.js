/**
 * https://leetcode.com/problems/find-the-duplicate-number/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {}
    for(let num of nums){
        if(obj[num]){
            return num;
        }else{
            obj[num] = 1;
        }
    }
};