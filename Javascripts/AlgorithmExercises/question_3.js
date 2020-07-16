// sắp xếp mảng

function secondLargestNumber(array) {
  // C1: giảm dần  (Bubble Sort) 
  //   let result = 0;
  //   for (let i = 0; i < array.length - 1; i++) {
  //     for (let j = i + 1; j < array.length; j++) {
  //       if (array[i] > array[j]) {
  //         result = array[i];
  //         array[i] = array[j];
  //         array[j] = result;
  //       }
  //     }
  //   }
  //   return array;
  //   console.log(array);

  //   C2: tăng dần (Insertion Sort: sắp xếp chèn)
  //   let i,
  //     len = array.length,
  //     el,
  //     j;
  //   for (i = 1; i < len; i++) {
  //     el = array[i];
  //     j = i;
  //     while (el < array[j - 1] && j > 0) {
  //       array[j] = array[j - 1];
  //       j--;
  //     }
  //     array[j] = el;
  //   }
  //   console.log(array[array.length - 2]);

  //   C3:
  let result = array.sort((x, y) => {
   return y - x;
  });
  console.log(result[1]);
}

secondLargestNumber([3, 5, 1, 10, 8, 2, 4]);
