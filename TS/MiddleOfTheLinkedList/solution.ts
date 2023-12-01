/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head:ListNode | null):ListNode | null {
    //создаем две переменные, одна проходит по списку на элемент дальше другой 
    let fast = head.next;
    let slow = head;
    //пока более "быстрая" переменная не достигнет последнего элемента списка обе переменные будут двигаться вперед
    //бывстррая двигается в два раза быстрее, так что, когда она достигнет конца, медленная как раз будет на середине списка
    while(fast != null) {
        fast = fast.next?.next;
        slow = slow.next;
    }
    return slow
};