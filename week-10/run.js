function GenFibonacci(n1, n2, max) {
   if (n1 + n2 > max) {
      return [n1, n2]
   }

   console.log(n1 + n2)
   return [n1, n2, ...GenFibonacci(n2, n1 + n2, max)]
}

GenFibonacci(0, 1, 50);

//0 1 1 2 3 5 8
//13 21 34 55 89 144 233 377 610