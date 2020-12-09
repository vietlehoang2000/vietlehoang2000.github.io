// B1 function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.

function changeColor() {
  document.getElementById("heading").style.color = "green";
  document.getElementById("heading2").style.color = "yellow";
  document.getElementById("paragraph").style.color = "red";
}

// B2 function changeBgColor(color): Thay đổi màu nền của trang thành màu color.

function changeBgColor(color) {
  document.body.style.background = color;
}

changeBgColor("red");
changeBgColor("white");

// B3 function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).


function copyContent(paragraph1, paragraph2) {
  let stringHeading;
  let stringHeading2;
  stringHeading = document.getElementById(paragraph1).innerText;
  stringHeading2 = document.getElementById(paragraph2).innerText;
  document.getElementById(paragraph1).innerText = stringHeading2;
  document.getElementById(paragraph2).innerText = stringHeading;
}

// B4 function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).

function changeFontSize(x) {
  document.getElementById("heading").style.fontSize = x;
  document.getElementById("heading2").style.fontSize = x;
  document.getElementById("paragraph").style.fontSize = x;
}

changeFontSize(30);

// B5 function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).

function increaseFontSize(paragraph) {
  let fontSizeArr;
  fontSizeArr = document.getElementById(paragraph).style.fontSize.split("p");
  if (fontSizeArr[0] < 30)
    document.getElementById(paragraph).style.fontSize = +fontSizeArr[0] + 1;

  return document.getElementById(paragraph).style.fontSize;
}

// B6 function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.
function decreaseFontSize(paragraph) {
  let fontSizeArr;
  fontSizeArr = document.getElementById(paragraph).style.fontSize.split("p");
  if (fontSizeArr[0] > 10)
    document.getElementById(paragraph).style.fontSize = +fontSizeArr[0] - 1;

  return document.getElementById(paragraph).style.fontSize;
}
