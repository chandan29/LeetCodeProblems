function lengthOfLongestSubstringKDistinct(s, k) {
    let longest = 0;
    const charCount = {};
    for (let left = 0, right = 0; right < s.length; right++) {
        charCount[s[right]] = (charCount[s[right]] ?? 0) + 1;
        for (; Object.keys(charCount).length > k; left++)
            if (--charCount[s[left]] === 0)
                delete charCount[s[left]]
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
}