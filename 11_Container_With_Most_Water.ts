function maxArea(height: number[]): number {
    
    let maxArea: number = 0;
    let i: number = 0;
    let j: number = height.length - 1;

    while(i < j) {
        let h: number = Math.min(height[i], height[j]);
        let w: number = j - i;
        let area: number = h * w;

        maxArea = Math.max(maxArea, area);

        if(height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;
};