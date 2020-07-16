// Kiểm tra số nguyên tố trong mảng, và in ra mảng mới.

const arrays = [-2, 0, 2, 6, 4, 3, 8, 5, 7, 11, 6, 2, 8];

function checkPrimeNumbers(arrays) {
  let result = []; // tạo một mảng mới
  return arrays.filter((element) => { // tạo một mảng mới thỏa dkien
    if (element < 2) {  // só sánh number of array if < 2 thì return false
      return false;
    }
    for (let i = 2; i < (element - 1); i++) { // lập từ 2 đến  n - 2;
      if (element % i === 0) { // nếu số 
        return false;
      }
    }
    return result.push(element)
  });
}
checkPrimeNumbers(arrays);
