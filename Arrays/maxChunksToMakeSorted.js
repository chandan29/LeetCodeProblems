/*Given an array arr that is a permutation of [0, 1, ..., arr.length - 1], we split the array into some number of "chunks" (partitions), and individually sort each chunk.  After concatenating them, the result equals the sorted array.

What is the most number of chunks we could have made?*/


class Solution {
    public int maxChunksToSorted(int[] arr) {
        if (arr == null || arr.length == 0) return 0;

        int count = 0, max = 0;
        for (int i = 0; i < arr.length; i++) {
            max = Math.max(max, arr[i]);
            if (max == i) {
                count++;
            }
        }

        return count;
    }
}
