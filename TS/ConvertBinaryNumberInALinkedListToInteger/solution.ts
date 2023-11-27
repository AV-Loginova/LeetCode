
//создание связанного списка
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }
 
//решение задачи
function getDecimalValue(head: ListNode | null): number {
    let bin = '';
    //пока head не является null мы добавляем к строке значение head и переходим к следующему элементу списка
    while(head) {
        bin = bin + head.val;
        head = head.next;
    }
    //переводим строку в двоичную систему и возвращаем
    return parseInt(bin, 2)
};