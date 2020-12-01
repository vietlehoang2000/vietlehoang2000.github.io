// Nhân đôi giá trị trong object
let a = +prompt("Nhap so cho object a", "");

let object_a = { number: a };

function double(obj) {
  for (var key in obj) {
    if (typeof obj[key] == "number") obj[key] = obj[key] * obj[key];
  }
}

double(object_a);
console.log(object_a.number);

// Sao chép đối tượng
function copy(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
}

let target = {};
let source = {
  number: 123,
};

copy(target, source);
console.log(target);
// Tạo một object user chứa các thông tin "name","age"
let user = {
  name: "Vivian",
  age: 20,
};
// Thêm một phương thức hi() cho user, in ra câu chào dạng "Hello, my name is,..."
user.hi = function () {
  console.log(`Hello, my name is ${this.name}. My age is ${this.age} `);
};
// Thêm phương thức getKeys() in ra toàn bộ key của user
user.getKeys = function () {
  for (var key in this) console.log(key);
};
// Thêm phương thức getValue() in ra toàn bộ value của user
user.getValue = function () {
  for (var key in this) console.log(this[key]);
};

user.hi();
user.getKeys();
user.getValue();

// tái sử dụng
function Person(Name) {
  this.name = name;
  this.hi = function () {
    console.log(this.name);
  };
}

let Vivian = Person("Vivian");
// Constructor
// Viết hàm tạo Player với các thông tin "name" -string, "level"-number, "baseDamage"-number, Player có các phương thức attack() in ra màn hình lượng gây ra = baseDamage*level
function Player(name, level, baseDamage) {
  this.name = name;
  this.level = level;
  this.baseDamage = baseDamage;
  this.attack = function () {
    console.log(this.baseDamage * this.level);
  };
}

let Vivian = new Player("Vivian", 10, 50);
let Vincent = new Player("Vincent", 15, 80);
Vivian.attack();
Vincent.attack();
// Viết hàm tạo một số ngẫu nhiên từ 0 đến n. VD rand(10) => 8
let a = prompt("nhập");

function random_number(n) {
  console.log(Math.floor(Math.random() * n++));
}
random_number(a);
// Viết hàm chuyển đổi một số từ hệ cơ số này sang hệ cơ số khác

// Viết hàm tạo một số ngẫu nhiên trong khoảng từ a -> b
function random_min_max(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let min = prompt("Min", "");
let max = prompt("Max", "");

random_min_max(min, max);

// Viết hàm tạo mã màu HEX ngẫu nhiên
function getHexColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(getHexColor());

// Viêt hàm chuôi từ vị trí đầu tiên, tới vị trí chỉ định. VD: "abcd" ,2=>"abc"
"abcd".slice(0, 3);

// Viết hàm chuyển đổi 1 tên thành tên viết tắt VD:"BA Nguyễn" =>"Ba N"
function abbr(str) {
  var i = str.lastIndexOf(" ");
  return str.slice(0, i + 2) + ".";
}

let str = "Vivian Leans saasd";

console.log(abbr(str));

// Viết hàm ẩn địa chỉ email. VD: “banguyen@techmaster.vn” => “ba…@techmaster.vn”
function hide_email(str) {
  var i = str.lastIndexOf("@");
  var x = str.slice(0, 2) + "..." + str.slice(i);
  return x;
}

let str = "Vivian@gmail.com";

console.log(hide_email(str));

// Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD: “hello world” => “Hello World”

function capitalize(str) {
  var strArr = str.split(" ");
  console.log(strArr);
  for (var i = 0; i < strArr.length; i++) {
    var charArr = strArr[i].split("");
    charArr[0] = charArr[0].toUpperCase();
    strArr[i] = charArr.join("");
  }
  return strArr.join(" ");
}
let str = "vivian le";
console.log(capitalize(str));

// Viết hàm chuyển đổi một chuỗi thành dạng paramaterize. VD “Hello World” => “hello-world”
function parramaterize(str) {
  var strArr = str.split(" ");
  for (var i = 0; i < strArr.length - 1; i++) {
    strArr[i] = strArr[i] + "-";
  }
  return strArr.join("");
}
let str = "vivian le";
console.log(parramaterize(str));

// Viết hàm loại bỏ khoảng trắng ở đầu, cuối, và rút gọn khoảng trắng ở giữa các từ trong chuỗi. VD: “Hello     world   !   ” => “Hello world !”

// ARRAY
// Cho một mảng số nguyên, viết hàm tính tổng tât cả phần tử trong mảng

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log(sum);

// Cho một mảng sô, viết hàm tính trung bình cộng tât cả phần tử trong mảng

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log(sum / a.length);

// Cho một mảng số, viêt hàm tìm index số trong mảng
let a = [1, 2, 32, 4, 5, 6, 7, 8, 9, 10];
let b = prompt("Index cần tìm", "");
for (let i = 0; i < a.length; i++) {
  if (b == a[i]) {
    console.log(`${a[i - 1]} là số cần tìm`);
    break;
  }
}
