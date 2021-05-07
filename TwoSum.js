/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let index1 = 0; index1 <= nums.length; index1++) {
        for (let index2 = index1 + 1; index2 <= nums.length; index2++) {

            if (nums[index1] + nums[index2] === target) {

                return [ index1, index2 ];

            }

        }
    }

    throw new Error("Você nos enganou LeetCode!");
};