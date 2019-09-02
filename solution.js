// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/



// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

// Follow up:
// Could you do it in O(n) time and O(1) space?





// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
var isPalindrome = function(head) {
    let valQueue = [];
    let looping = true;
    let output = true;
    
    if (head == null) {
        return true
    };
        
    recursiveRecordVal(head);       
    while (looping) {               // break loop when mismatch found, or end of list is reached
        recursiveCheckVal(head); 
    };
    return output;
    

    
    function recursiveRecordVal(node) {         // add values to Queue, essentially creating a copy in reverse order
        if (node.next) {
            recursiveRecordVal(node.next)
        };
        valQueue.unshift(node.val);
    };


    function recursiveCheckVal(node) {
        if (node.val == valQueue.pop()) {
            if (node.next) {
                recursiveCheckVal(node.next);
            } else {
                looping = false;
            };
        } else {
            output = false;
            looping = false;
        };  
    };
    
};