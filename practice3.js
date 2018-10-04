//attametping count range sum 

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    let n = nums.length;
        let sums = new Array(n);
        sums[0] = 0;
        for (let i = 0; i < n; i++){
            sums[i + 1] = sums[i] + nums[i];
        }
        return countWhileMergeSort(sums, 0, n + 1, lower, upper);
        
    };
    
    function countWhileMergeSort(sums, start, end, lower, upper) {
        if (end - start <= 1) return 0;
        let mid = (start + end) / 2;
        let count = countWhileMergeSort(sums, start, mid, lower, upper) 
                  + countWhileMergeSort(sums, mid, end, lower, upper);
        let j = mid, k = mid, t = mid;
        let cache = new Array(end - start);
        for (let i = start, r = 0; i < mid; i++, r++) {
            while (k < end && sums[k] - sums[i] < lower) k++;
            while (j < end && sums[j] - sums[i] <= upper) j++;
            while (t < end && sums[t] < sums[i]) {
            cache[r++] = sums[t++];
            cache[r] = sums[i];
            count += j - k;
            }
        }
        // System.arraycopy(cache, 0, sums, start, t - start);
        return count;
    }