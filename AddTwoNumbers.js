/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * 
 * @param {BigInt} number 
 * @returns {ListNode}
 */
const convertNumberToListNode = function(number) {
    const numberAsString = String(number);
    
    let listNode = null;
    for (let position = 0; position < numberAsString.length; position++) {
        const numberAtPosition = BigInt(numberAsString[position]);
        listNode = new ListNode(numberAtPosition, listNode);
    }

    return listNode;
}

/**
 * 
 * @param {ListNode} listNode 
 * @returns {BigInt}
 */
const convertListNodeToNumber = function(listNode) {
    let numberAsStringReversed = "";

    while (listNode != null) {
        numberAsStringReversed += String(listNode.val);
        listNode = listNode.next;
    }

    const numberAsString = numberAsStringReversed.split('').reverse().join('');
    const number = BigInt(numberAsString);

    return number;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const addTwoNumbers = function(l1, l2) {
    const number1 = convertListNodeToNumber(l1);
    const number2 = convertListNodeToNumber(l2);
    const sum = number1 + number2;
    const listNode = convertNumberToListNode(sum);
    return listNode;
};