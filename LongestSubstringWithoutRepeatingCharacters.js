/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let largestSubstring = "";
    let currentSubstring = "";

    const updateLargestSubstring = value => {
        if (value.length > largestSubstring.length) {
            largestSubstring = value;
        }
    }

    for (let index = 0; index < s.length; index++) {
        const currentChar = s[index];

        if (currentSubstring.includes(currentChar)) {
            updateLargestSubstring(currentSubstring);
            index -= currentSubstring.length;
            currentSubstring = "";
        } else {
            currentSubstring += currentChar;
        }
    }

    updateLargestSubstring(currentSubstring);

    return largestSubstring.length;
};
