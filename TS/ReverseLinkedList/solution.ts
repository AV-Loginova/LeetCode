//создание списка
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    //создаем пустую переменную
    let a = null;
    //пока список не пуст
    while(head) {
        //создаем список со значением элемента в списке head и значением next равного a
       a = new ListNode(head.val, a)
       console.log(head.val, a)
       //переходим к следующему элементу списка
       head = head.next
    }
    //возвращаем новый развернутый список
    return a
 };