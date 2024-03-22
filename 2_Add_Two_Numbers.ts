class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function listToArray(head: ListNode | null): number[] {
    let array: number[] = [];
    let current: ListNode | null = head;

    while (current !== null) {
        array.push(current.val);
        current = current.next;
    }

    return array;
}

function arrayToList(nums: number[]): ListNode | null {
    if (nums.length === 0) {
        return null;
    }

    let head = new ListNode(nums[0]);
    let current: ListNode = head;

    for (let i = 1; i < nums.length; i++) {
        current.next = new ListNode(nums[i]);
        current = current.next;
    }

    return head;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    if (l1 === null && l2 === null) return null;
    
    const n1 = listToArray(l1).reverse().join('');
    const n2 = listToArray(l2).reverse().join('');
    const result = BigInt(n1) + BigInt(n2);
    const resultArray: Array<string> = new String(result).split('');
    let resultIntArray: Array<number> = [];

    for(let i = resultArray.length-1; i >= 0; i--)
        resultIntArray.push(parseInt(resultArray[i]))

    return arrayToList(resultIntArray);

};