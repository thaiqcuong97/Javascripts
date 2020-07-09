/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(numbers) {
  // Cách 1:
  // return numbers.reduce((accumulator,currentValue)=> accumulator * currentValue)

  // Cách 2:
  // let result = 1;
  // numbers.map((number) => {
  //   result *= number;
  // });
  // return result

  // Cách 3:
   let result = 1;
   for (const accumulator of numbers) {
      result *= accumulator;  
   }
   return result;
}

multiply([2, 3, 4]);
