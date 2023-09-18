Array.prototype.last = function() {
   //создаем цикл с условием, что длина объекта - не равна нулю
   if (this.length === 0) {
      return -1
   } else {
      return this[this.length-1]
   }
};
