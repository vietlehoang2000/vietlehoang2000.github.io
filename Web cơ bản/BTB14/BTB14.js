//  Viết function cho phép nhập vào key và value tương ứng, gán key và value vào một object. Cho phép nhập số lượng key và value tùy ý, chỉ dừng khi nào người dùng bấm cancel hoặc nhập giá trị rỗng

let Object_test = {};
let a = "";
let b = "";
do {
  a = prompt("nhập giá trị key", "");
  if (a == "") break;
  b = prompt("nhập giá trị value", "");
  Object_test[a] = b;
} while (a != "" || b != "");

// Thêm vào bài tập trên, sau khi nhập thông tin của object, in toàn bộ thông tin ra màn hình console
console.log(Object_test);

// Viết hàm lấy liệt kê toàn bộ key của object
function print(obj) {
  for (let key in obj) console.log(key);
}

// Viết hàm nhận 2 tham số, một là object, 2 là key, nếu key có tồn tại thì trả về giá trị của key đó, nếu không, trả về false. Sau đó, in ra màn hình giá trị trả về, nếu không có in ra “Không có ‘key’”.

function check_key(key_check, obj) {
  let check = 0;
  for (let key in obj) {
    if (key == key_check) {
      console.log(obj[key]);
      check++;
    } else console.log("false");
  }
  if (check == 0) console.log("Không có ‘key’");
}

// Viết hàm để xóa một key trong object, hàm sẽ nhận 2 tham số, 1 là object, 2 là key cần xóa, hàm trả về giá trị của key sau khi xóa, hoặc false nếu key không tồn tại. In ra giá trị của key bị xóa, nếu không tồn tại, in ra “Không có key”
function delete_key(key_delete, obj) {
  let check = 0;
  for (let key in obj) {
    if (key == key_delete) {
      delete obj[key];
      console.log(`${key_delete} has been successfully deleted`);
      check++;
    } else console.log("false");
  }
  if (check == 0) console.log("Không có ‘key’");
}

print(Object_test);
let key_check = prompt("key cần check", "");
check_key(key_check, Object_test);
let key_delete = prompt("key cần delete", "");
delete_key(key_delete, Object_test);
console.log(Object_test);
