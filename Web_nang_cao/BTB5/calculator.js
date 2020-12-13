let strOnScr = "";
let strCalc = "";
let times = 0;
function displayOnScreen(str) {
  if (strOnScr.length < 20) {
    strOnScr += str;
    strCalc += str;
  }
  strCalc = strCalc
    .replaceAll(`÷`, `/`)
    .replaceAll(`×`, `*`)
    .replaceAll(`^`, `**`)
    .replaceAll(`^2`, `**2`);
  document.getElementsByClassName("screen")[0].innerText = strOnScr;
}

function calculate() {
  document.getElementsByClassName("screen")[0].innerText = eval(strCalc);
  let num = eval(strCalc);
  strCalc = num.toString();
  strOnScr = num.toString();
}

function calculateSquare() {
  let num = Math.sqrt(strCalc);
  document.getElementsByClassName("screen")[0].innerText = num;
  strCalc = num.toString();
  strOnScr = num.toString();
}

function calculateFactorial() {
    let a = parseInt(strCalc);
    let b = 1;
    for (i = 1; i <= a; i++){
        b *= i;
    }

  document.getElementsByClassName("screen")[0].innerText = b;
  strCalc = b.toString();
  strOnScr = b.toString();
}

function deleteScr() {
  strOnScr = "";
  strCalc = "";
  document.getElementsByClassName("screen")[0].innerText = strOnScr;
}

function removeLastChar() {
  strOnScr = strOnScr.slice(0, strOnScr.length - 1);
  strCalc = strCalc.slice(0, strCalc.length - 1);
  document.getElementsByClassName("screen")[0].innerText = strOnScr;
}

function displayCalPlus() {
  if (times % 2 == 0) {
    document.getElementsByClassName("cal")[0].style.height = "680px";
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName("row")[i].style.height = "12%";
    }
    document.getElementById("calPlus").style.display = "block";
    document.getElementById("plus").style.top = "630";
  } else {
    document.getElementById("calPlus").style.display = "none";
    document.getElementsByClassName("cal")[0].style.height = "650px";
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName("row")[i].style.height = "15%";
    }
    document.getElementById("plus").style.top = "610";
  }
  times++;
}
