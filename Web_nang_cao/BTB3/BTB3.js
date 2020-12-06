// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
function capitalizeString(string) {
  string = string.toLowerCase();
  let arr = string.split(" ");
  for (i = 0; i < arr.length; i++) {
    let subarr = arr[i].split("");
    subarr[0] = subarr[0].toUpperCase();
    arr[i] = subarr.join("");
  }
  string = arr.join(" ");
  return string;
}

capitalizeString("HelLo world");

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function spinalizeString(string) {
  string = string.toLowerCase();
  let arr = string.split(" ");
  string = arr.join("-");
  return string;
}

spinalizeString("HELLO world");

// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
function checkSymetricalString(string) {
  string = string.replace(/\s+/g, "");
  string = string.toLowerCase();
  let arr = string.split("");
  let synarr = "";
  for (i = arr.length - 1; i >= 0; i--) {
    synarr += arr[i];
  }
  return synarr == string;
}

checkSymetricalString("Race car");
