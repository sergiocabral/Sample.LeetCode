/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const numsMerged = nums1.concat(nums2);
    const numsMergedAndSorted = numsMerged.sort((a, b) => a < b ? -1 : 1);
    const numsHasOddQuantity = numsMergedAndSorted.length % 2 != 0;
     const middleIndex = Math.floor(numsMergedAndSorted.length / 2);

     let median;
     if (numsHasOddQuantity) {
        median = numsMergedAndSorted[middleIndex];
     } else {
        const num1 = numsMergedAndSorted[middleIndex - 1];
        const num2 = numsMergedAndSorted[middleIndex];
        median = (num1 + num2) / 2;
     }

     return median;
};
