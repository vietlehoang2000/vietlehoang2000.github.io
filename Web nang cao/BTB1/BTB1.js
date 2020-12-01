// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.

function ConvertTemp(a) {
  if (Number.isInteger(a) == true) console.log(`${a * 1.8 + 32}`);
  else console.log("Không phải số nguyên");
}

let a = +prompt("Nhiệt độ cần chuyển đổi", "");
ConvertTemp(a);

// Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.

function FindNum(a) {
  if (a.length > 2) {
    for (let i = 0; i < a.length; i++) {
      let temp = 0;
      for (let x = 0; x < a.length; x++) {
        if (a[i] < a[x]) {
          temp = a[x];
          a[x] = a[i];
          a[i] = temp;
        }
      }
    }
    return a[a.length - 2];
  } else return `Not an appropriate array number`;
}

let a = [1, 2, 3, 5, 4];
FindNum(a);

//  Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.
function make_random_string(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function find_longest_string(string) {
  let a = 0;
  let temp;
  let temp2;
  for (let i = 0; i < string.length; i++) {
    temp = string[i];
    for (let x = 0; x < string.length; x++) {
      temp2 = string[x];
      if (temp.length < temp2.length) a = x;
    }
  }
  return string[a];
}

let string = [
  make_random_string(Math.floor(Math.random() * 10)),
  make_random_string(Math.floor(Math.random() * 10)),
  make_random_string(Math.floor(Math.random() * 10)),
];

console.log(string);

console.log(find_longest_string(string));

// Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.

function reverse_string(string) {
  return string.split("").reverse().join("");
}

function find_target_on_string(string, target) {
  if (string.length < target.length) return false;
  else {
    let temp = reverse_string(string);
    let temp2 = reverse_string(target);
    for (i = 0; i < target.length; i++) {
      if (temp[i] != temp2[i]) return false;
    }
    return true;
  }
}

let string = "helloworld";
let target = "world";

find_target_on_string(string, target);

//  Bài 5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp).

let array = ["hi", 2, true];

function Find_duplicate(array) {
  for (i = 0; i < array.length; i++) {
    for (x = 0; x < array.length; x++) {
      if (array[x] == array[i]) return false;
    }
  }
  return true;
}

Find_duplicate(array);
