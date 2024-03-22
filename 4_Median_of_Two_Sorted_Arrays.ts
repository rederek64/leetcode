function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    var numbers: number[] = nums1;
    nums2.forEach((x: number) => numbers.push(x));

    numbers = numbers.sort((a: number, b: number) => a - b);

    if(numbers.length % 2 === 0) {
        var lowerMiddle = numbers[numbers.length / 2 - 1];
        var upperMiddle = numbers[numbers.length / 2];
        return (lowerMiddle + upperMiddle) / 2;
    }

    return numbers[(numbers.length - 1) / 2];
    
};