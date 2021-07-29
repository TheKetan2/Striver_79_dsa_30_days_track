/**https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length-1, temp;
    while(mid<=high){
        console.log(nums)
        switch(nums[mid]){
            case 0:
                temp = nums[mid];
                nums[mid] = nums[low];
                nums[low] = temp;
                mid++;
                low++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                temp = nums[mid];
                nums[mid] = nums[high];
                nums[high] = temp;
                mid++;
                high--;
                break;
        }
    }
    return nums;
};
