// Viết chương trình cho phép nhập 2 số, tính tổng 2 số đó
let a = +prompt("Nhập số thứ 1:", "");
let b = +prompt("Nhập số thứ 2:", "");

alert(`tổng 2 số là ${a + b}`);

// Viết chương trình cho phép nhập 2 số, in ra kết quả của tất cả các phép tính số học giữa 2 số đó

let a = +prompt("Nhập số thứ 1:", "");
let b = +prompt("Nhập số thứ 2:", "");
alert(`tổng 2 số là ${a + b}`);
alert(`hiệu 2 số là ${a - b}`);
alert(`chia 2 số là ${a / b}`);
alert(`nhân 2 số là ${a * b}`);

// Viết chương trình cho phép nhập chiều dài và rộng của hình chữ nhật, tính ra chu vi của nó
let a = +prompt("Nhập chiều dài hcn:", "");
let b = +prompt("Nhập chiều rộng hcn:", "");

alert(`chu vi hình chữ nhật là ${(a + b) * 2}`);

// Viết chương trình cho phép nhập chiều dài và rộng của hình chữ nhật, tính ra diện tích của nó
let a = +prompt("Nhập chiều dài hcn:", "");
let b = +prompt("Nhập chiều rộng hcn:", "");

alert(`diện tích hình chữ nhật là ${a * b}`);

// Viết chương trình cho phép nhập vào bán kính hình tròn, in ra kết quả đường kính, chu vi và diện tích của nó
let a = +prompt("Nhập bán kính hình tròn:", "");

alert(`đường kính hình tròn là ${a * 2}`);
alert(`chu vi hình tròn là ${a * Math.PI * 2}`);
alert(`diện tích hình tròn là ${a ** 2 * Math.PI}`);

// Viết chương trình cho phép nhập vào 1 số ở đơn vị cm, chuyển đổi và in ra giá trị ở đơn vị m và km
let a = +prompt("Nhập số đơn vị cm:", "");

alert(`đơn vị m là ${a / 100} m`);
alert(`đơn vị km là ${a / 100000} km`);

//  Viết chương trình cho phép nhập nhiệt độ có đơn vị Celsius, in ra nhiệt độ Fahrenheit
let a = +prompt("Nhập số đơn vị Celsius:", "");

alert(`đổi sang đơn vị fahrenheit là ${a / 33.8} m`);

// Cấu trúc điều khiển
// Viết chương trình cho phép nhập 2 số, tìm số lớn nhất trong 2 số
let a = +prompt("Nhập số thứ 1:", "");
let b = +prompt("Nhập số thứ 2:", "");

if (a >= b) {
  alert(`số lớn nhất là ${a}`);
} else {
  alert(`số lớn nhất là ${b}`);
}

// Viết chương trình cho phép nhập 3 số, tìm số lớn nhất trong 3 số
let a = +prompt("Nhập số thứ 1:", "");
let b = +prompt("Nhập số thứ 2:", "");
let c = +prompt("Nhập số thứ 3:", "");

if (a >= b && a >= c) {
  alert(`số lớn nhất là ${a}`);
} else if (b >= a && b >= c) {
  alert(`số lớn nhất là ${b}`);
} else {
  alert(`số lớn nhất là ${c}`);
}

// Viết chương trình cho phép nhập 1 số, kiểm tra xem một số là số âm, dương, hay bằng 0
let a = +prompt("Nhập số:", "");

if (a > 0) {
  alert(`số dương`);
} else if (a < 0) {
  alert(`số âm`);
} else {
  alert(`a==0`);
}

// Viết chương trình cho phép nhập 1 số, kiểm tra số đó có chia hết cho 5 và 11 hay không
let a = +prompt("Nhập số:", "");

if (a % 5 == 0 && a % 11 == 0) {
  alert(`${a} có chia hết cho 5 và 11`);
} else {
  alert(`${a} không chia hết cho 5 và 11`);
}

//  Viết chương trình cho phép nhập 1 số, kiểm tra số đó là chẵn hay lẻ
let a = +prompt("Nhập số:", "");
if (a % 2 == 0) {
  alert(`${a} là số chẵn`);
} else {
  alert(`${a} là số lẻ`);
}

// Viết chương trình cho phép nhập 1 năm, kiểm tra số đó là năm nhuận hay không
let a = +prompt("Nhập năm:", "");

if (a % 4 == 0) {
  alert(`${a} là năm nhuận`);
} else {
  alert(`${a} không phải là năm nhuận`);
}

// Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó có thuộc bảng alphabe hay không (a-zA-Z)
let a = prompt("Nhập kí tự:", "");

if ((a >= "a" && a <= "z") || (a >= "A" && a <= "Z")) {
  alert(`ký tự ${a} có thuộc bảng alphabet`);
} else {
  alert(`ký tự ${a} không thuộc bảng alphabet`);
}

// Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là nguyên âm hay phụ âm
let a = prompt("Nhập kí tự:", "");

if (a == "a" || a == "e" || a == "o" || a == "i" || a == "u") {
  alert(`ký tự ${a} là nguyên âm`);
} else {
  alert(`ký tự ${a} là phụ âm`);
}
//  Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là chữ thường hay chữ hoa
let a = prompt("Nhập kí tự:", "");
if (a >= "a" && a <= "z") {
  alert(`${a} là chữ thường`);
} else if (a >= "A" && a <= "Z") {
  alert(`${a} là chữ hoa`);
} else {
  alert(`ký tự ${a} không thuộc bảng alphabet`);
}

// Viết chương trình cho phép nhập 1 tháng, in ra số ngày trong tháng
let a = +prompt("Nhập tháng:", "");

switch (a) {
  case 1:
    alert(`tháng ${a} có 31 ngày`);
    break;
  case 2:
    alert(`tháng ${a} có 29 ngày`);
    break;
  case 3:
    alert(`tháng ${a} có 31 ngày`);
    break;
  case 4:
    alert(`tháng ${a} có 30 ngày`);
    break;
  case 5:
    alert(`tháng ${a} có 31 ngày`);
    break;
  case 6:
    alert(`tháng ${a} có 30 ngày`);
    break;
  case 7:
    alert(`tháng ${a} có 31 ngày`);
    break;
  case 8:
    alert(`tháng ${a} có 31 ngày`);
    break;
  case 9:
    alert(`tháng ${a} có 30 ngày`);
    break;
  case 10:
    alert(`tháng ${a} có 31 ngày`);
    break;
  case 11:
    alert(`tháng ${a} có 30 ngày`);
    break;
  case 12:
    alert(`tháng ${a} có 31 ngày`);
    break;
}

// Viết chương trình cho phép nhập 3 số a b c, in ra nghiệm phương trình bậc 2 tương ứng
let a = +prompt("Nhập số thứ 1:", "");
let b = +prompt("Nhập số thứ 2:", "");
let c = +prompt("Nhập số thứ 3:", "");

let d = b ** 2 - 4 * a * c;

if (d > 0) {
  alert(`nghiệm thứ 1 là: ${(-b - Math.sqrt(d)) / (2 * a)}`);
  alert(`nghiệm thứ 2 là: ${(-b + Math.sqrt(d)) / (2 * a)}`);
} else if (d == 0) {
  alert(`phương trình có 2 nghiệm là: ${-b / (2 * a)}`);
} else {
  alert(`phuong trình vô nghiệm`);
}

// Viết chương trình đổi điểm từ hệ số 10 sang hệ chữ cho sinh viên, điểm nhập từ bàn phím
let a = +prompt("Nhập điểm:", "");

if (a < 4) {
  alert(`F`);
} else if (a >= 4 && a < 5.5) {
  alert(`D`);
} else if (a >= 5.5 && a < 7) {
  alert(`C`);
} else if (a >= 7 && a < 8.5) {
  alert(`B`);
} else if (a >= 8.5 && a <= 10) {
  alert(`A`);
}

// Viết chương trình cho phép nhập lương cơ bản, tính tổng lương của nhân viên theo công thức: Lương = Lương cơ bản + HRA + DA
let a = +prompt("Nhập lương cơ bản:", "");

if (a < 2000000) {
  alert(`tổng lương là ${a + (a * 20) / 100 + (a * 80) / 100} vnd`);
} else if (a >= 2000000 && a < 5000000) {
  alert(`tổng lương là ${a + (a * 25) / 100 + (a * 90) / 100} vnd`);
} else {
  alert(`tổng lương là ${a * 2 + (a * 30) / 100} vnd`);
}
