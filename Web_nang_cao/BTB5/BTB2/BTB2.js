//Bài 1: Viết hàm cho phép đổi đơn vị tiền tệ từ USD sang VND, biết 1 USD = 23000 VND. Tham số truyền vào là 1 số nguyên dương.
function usdToVnd(money) {
  return money * 23000 ;
}

usdToVnd(1);

// Bài 2: Viết hàm tính thể tích hình cầu, với tham số truyền vào là 1 số nguyên dương thể hiện bán kính của hình cầu, (số PI sử dụng Math.PI).
function findCircleVolume(radius) {
  return Math.PI * radius * radius;
}

findCircleVolume(2);

//Bài 3: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function calcSumBetweenNumber(numb1, numb2) {
  let sum = 0;
  let min = numb1;
  let max = numb2;
  if (numb1 > numb2) {
    min = numb2;
    max = numb1;
  }
  for (let i = min + 1; i < max; i++) sum += i;
  return sum;
}

calcSumBetweenNumber(2, 4);

// Bài 4: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function calcSumDivisor(number) {
  let sum = 0;
  let i = 0;
  while (i <= Math.sqrt(number)) {
    if (number % i == 0) {
      sum += i;
      if (i != number / i) {
        sum += number / i;
      }
    }
    i++;
  }
  return sum;
}
calcSumDivisor(2);
