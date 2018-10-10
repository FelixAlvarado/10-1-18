function ListNode(val) {
         this.val = val;
         this.next = null;
    }




    
var oddEvenList = function(head) {
    let start = odd = new ListNode(0);
    let start2 = even = new ListNode(0);
      while (head){
          odd.next = head;
          even.next = head.next;
          odd = odd.next
          even = even.next
          if(even){
              head = head.next.next;
          }else{
              head = null
          }
      }
      odd.next = start2.next;
      return start.next;
  };