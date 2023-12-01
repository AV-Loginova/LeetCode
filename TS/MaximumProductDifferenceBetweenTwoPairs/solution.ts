function maxProductDifference(nums: number[]): number {
    let ans:number = 0;
    let sorted:number[] = nums.sort(function (a, b) {
         return a - b;
    });
    let minArr:number[] = sorted.slice(0, 2);
    let maxArr:number[] = sorted.slice(sorted.length - 2)
    ans = (maxArr[0] * maxArr[1]) - (minArr[0] * minArr[1])
    return ans
};