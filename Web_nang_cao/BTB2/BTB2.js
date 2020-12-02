//Bài 1: Viết hàm cho phép đổi đơn vị tiền tệ từ USD sang VND, biết 1 USD = 23000 VND. Tham số truyền vào là 1 số nguyên dương.
function UsdtoVnd(money) {
  return `${money * 23000} VND`;
}

UsdtoVnd(1);

// Bài 2: Viết hàm tính thể tích hình cầu, với tham số truyền vào là 1 số nguyên dương thể hiện bán kính của hình cầu, (số PI sử dụng Math.PI).
function Find_circle_volume(radius) {
  return Math.PI * radius * radius;
}

Find_circle_volume(2);

//Bài 3: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function calc_sum_between(min, max) {
  let sum = 0;
  for (let i = min + 1; i < max; i++) sum += i;
  return sum;
}

calc_sum_between(3, 2);

// Bài 4: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function calc_sum_divisor(number) {
  let sum = 0;
  for (i = 0; i <= number; i++) {
    if (number % i == 0) sum += i;
  }
  return sum;
}

calc_sum_divisor(2);
