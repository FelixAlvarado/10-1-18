
// var countRangeSum = function(nums, lower, upper) {
//     let n = nums.length;
//         let sums = new Array(n);
//         sums[0] = 0;
//         for (let i = 0; i < n; i++){
//             sums[i + 1] = sums[i] + nums[i];
//         }
//         return countWhileMergeSort(sums, 0, n + 1, lower, upper);
        
//     };
    
//     function countWhileMergeSort(sums, start, end, lower, upper) {
//         if (end - start <= 1) return 0;
//         let mid = (start + end) / 2;
//         let count = countWhileMergeSort(sums, start, mid, lower, upper) 
//                   + countWhileMergeSort(sums, mid, end, lower, upper);
//         let j = mid, k = mid, t = mid;
//         let cache = new Array(end - start);
//         for (let i = start, r = 0; i < mid; i++, r++) {
//             while (k < end && sums[k] - sums[i] < lower) k++;
//             while (j < end && sums[j] - sums[i] <= upper) j++;
//             while (t < end && sums[t] < sums[i]) {
//             cache[r++] = sums[t++];
//             cache[r] = sums[i];
//             count += j - k;
//             }
//         }
        // System.arraycopy(cache, 0, sums, start, t - start);
    //     return count;
    // }


    //right solution
    const countRangeSum = (nums, lower, upper) => {

        let sums = [0];
        let ret = 0;
        let last = 0;
    
        let firstge = value => {
            // first greater than or equal to
            let l = 0,
                r = sums.length,
                m;
            console.log('sum and value', sums, value);
            do {
                m = Math.floor((r + l) / 2);
    
                sums[m] < value ? l = m : r = m;
    
            } while (r >= l + 2);
    
            while (r > 0 && sums[r - 1] >= value ) {
                r -= 1;
            }
    
            return r;
        };
    
        nums.forEach(num => {
    
            last = last + num;
    
            ret += firstge(last - lower + 1) - firstge(last - upper);
    
            sums.splice(firstge(last), 0, last);
    
        });
    
        return ret;
    
    };

    console.log('should be 4', countRangeSum([-2,5,-1], -2, 3));

    //easy to understand python solution

    def countRangeSum(self, nums, lower, upper):
    first = [0]
    for num in nums:
        first.append(first[-1] + num)
    def sort(lo, hi):
        mid = (lo + hi) / 2
        if mid == lo:
            return 0
        count = sort(lo, mid) + sort(mid, hi)
        i = j = mid
        for left in first[lo:mid]:
            while i < hi and first[i] - left <  lower: i += 1
            while j < hi and first[j] - left <= upper: j += 1
            count += j - i
        first[lo:hi] = sorted(first[lo:hi])
        return count
    return sort(0, len(first))