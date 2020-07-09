// Câu 1:
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
function multiply(arr) {
  result = 1;
  for( var mul  of arr ){
    result *= mul;
  }
  return result;
}
multiply([2, 3, 4]);
multiply([5, 2, 8]);
//   8 : result = 6* 4 = 24;
//   7: lần 3: mul = 4;
//   6: biến result = 2*3 = 6
//   5: lần 2: mul = 3;
//   4: biến result = 2
//   3: lần 1: for chạy qua arr và lưu mul = 2;
//   2: result = 1;
//   1: global gọi đến function multiply(arr)