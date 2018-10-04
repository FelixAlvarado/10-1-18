/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head.next || !head.next.next) return head;
      if (!head.next.next.next){
          let second = head.next;
          second.next = null;
          head.next = head.next.next;
          head.next.next = second;
          return head;
      }
      
      let currentEven = head.next.next.next;
      let second = head.next;
      second.next = currentEven;
      
      let currentOdd = head.next.next;
      head.next = currentOdd;
      
      
      while(currentOdd.next || currentEven.next){
        if (currentOdd && currentOdd.next && currentOdd.next.next) {
            currentOdd.next = currentOdd.next.next;
            currentOdd = currentOdd.next;
        }else {
            currentOdd.next = null;
        }  
       if (currentEven && currentEven.next && currentEven.next.next) {
            currentEven.next = currentEven.next.next;
            currentEven = currentEven.next;
        }else {
            currentEven.next = null;
        }  
      
      }
      currentOdd.next = second; 
      return head;
      
  };