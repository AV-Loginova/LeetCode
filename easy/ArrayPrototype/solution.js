Array.prototype.last = function() {
   //создаем цикл с условием, что длина объекта равна нулю
   if (this.length === 0) {
      return -1
   } else {
   //в противном случае возращаем длину массива
      return this[this.length-1]
   }
};
