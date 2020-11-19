// Viết chương trình in ra màn hình nếu số chia hết cho 3 thì in “Fizz”, số chia hết cho 5 thì in ra “Buzz”, nếu chia hết cho cả 3 và 5 thì in “FizzBuzz”, nếu không chia hết cho cả 2 thì in “BuzzFizz” trong khoảng từ 0 đến 100
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0) console.log(`${i} Fizz`);
  else if (i % 5 == 0) console.log(`${i} Buzz`);
  else console.log(`${i} BuzzFizz`);
}

// Viết chương trình tính tổng tất cả bội chung của 3 và 5 trong khoảng từ 0 đến 1000
let sum = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) sum += i;
}

console.log(sum);

//  Viết chương cho phép nhập một số, kiểm tra số đó có phải số nguyên tố hay không từ 0 đến 100

for (let i = 0; i <= 100; i++) {
  let count = 0;
  for (let x = 1; x <= i; x++) {
    if (i % x == 0) count++;
  }
  if (count == 2) console.log(i);
}

//Viết chương trình cho phép nhập một số “n”, in ra tất cả số nguyên tố trong khoảng từ 0 đến “n”
let a = prompt("Nhập số giới hạn", "");

for (let i = 0; i <= a; i++) {
  let count = 0;
  for (let x = 1; x <= i; x++) {
    if (i % x == 0) count++;
  }
  if (count == 2) console.log(i);
}

//  Viết chương trình cho phép nhập một hai số a b, tính tổng tất cả số nguyên tố trong khoảng từ a đến b
let a = prompt("Nhập số giới hạn đầu", "");
let b = prompt("Nhập số giới hạn cuối", "");

let sum = 0;
for (let i = a; i <= b; i++) {
  let count = 0;
  for (let x = 1; x <= i; x++) {
    if (i % x == 0) {
      count++;
    }
  }
  if (count == 2) {
    sum += i;
  }
}
console.log(sum);

//Viết chương trình in ra bảng cửu chương ngược (từ 10 về 1)
for (let i = 10; i >= 1; i--) {
  let a = " ";
  for (let j = 10; j >= 1; j--) {
    a += i * j + " ";
  }
  console.log(a);
}

// Viết chương trình cho phép nhập vào một số, in ra số đầu tiên và cuối cùng của số đó (VD: 12345 => 15)
let a = +prompt("Nhập chữ số cần tìm:", "");
let b = a;
let last_text = " ";
let first_text = " ";

do {
  if (a == b) last_text += a % 10;
  if (a / 10 <= 1) first_text += a;
  a = (a - (a % 10)) / 10;
} while (a >= 1);

console.log(`${first_text} ${last_text}`);

// Viết chương trình cho phép nhập một số, kiểm tra xem số đó có phải là số Palindrome hay không (Số Palindrome là số đối xứng) (VD: 141 => true, 123 => false)
let num = 121;
let r = 0;
let sum = 0;
let temp = num;
for (; num != 0; num = num / 10) {
  r = num % 10;
  sum = sum * 10 + r;
}
if (temp == sum) console.log("palindrom");
else console.log("not a palindrom");

//  Viết chương trình cho phép nhập một số, tính giai thừa của số đó
let a = +prompt("Nhập số cần tìm", "");
let b = 1;

for (let i = 1; i <= a; i++) {
  b *= i;
}

console.log(b);

// Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Armstrong hay không (Số Armstrong là số bằng tổng lập phương của tất cả các chữ số của nó) (VD: 371 = 3*3 + 7*3 + 1*3 => true, 123 != 1*3 + 2*3 + 3*3 => false)
let a = prompt("Nhập số cần tìm", "");
let b = 0;

for (let i = 0; i < a.length; i++) {
  b += a[i] ** 3;
}

if (b == a) console.log("Armstrong");
else console.log("Not Armstrong");

// Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Perfect hay không (Số n là số Perfect nếu n bằng tổng tất cả các số từ 1 đến n / 2) (VD: 6 = 1 + 2 + 3 => true)
let a = prompt("Nhập số cần tìm", "");
let b = 0;

for (let i = 1; i <= a / 2; i++) {
  b += i;
}

if (b == a) console.log("Perfect");
else console.log("Not Perfect");

// Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Strong hay không (Số Strong là số bằng tổng giai thừa các chữ số của nó) (VD: 145 = 1! + 4! + 5! => true)

let a = prompt("Nhập số cần tìm", "");
let c = 0;

for (let x = 0; x < a.length; x++) {
  let b = 1;
  for (let i = 1; i <= a[x]; i++) {
    b *= i;
  }
  c += b;
}

if (c == a) console.log("Strong");
else console.log("Not Strong");

// Viết chương trình cho phép nhập một số n, in ra dãy số Fibonacci trong khoảng từ 0 đến n (Dãy Fibonacci có số bắt đầu là 0, 1 hoặc 1, 1 và các số sau có tổng bằng 2 số trước đó cộng lại)
