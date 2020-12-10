let x = 0;

function openNav() {
  var mediaQuery = window.matchMedia("(max-width: 500px)");
  if (mediaQuery.matches && x % 2 == 0) {
    document.getElementById("header").style.height = "210px";
    document.getElementsByClassName("middle-header")[0].style.display = "block";
    document.getElementsByClassName("right-header")[0].style.display = "block";
  }
  if (
    mediaQuery.matches &&
    document.getElementById("header").style.height == "210px" &&
    x % 2 != 0
  ) {
    document.getElementById("header").style.height = "50px";
    document.getElementsByClassName("middle-header")[0].style.display = "none";
    document.getElementsByClassName("right-header")[0].style.display = "none";
  }
  x++;
}

function checkScreen() {
  var mediaQuery = window.matchMedia("(max-width: 500px)");
  if (mediaQuery.matches) {
    document.getElementById("header").style.height = "50px";
    document.getElementsByClassName("middle-header")[0].style.display = "none";
    document.getElementsByClassName("right-header")[0].style.display = "none";
  } else {
    document.getElementById("header").style.height = "50px";
    document.getElementsByClassName("middle-header")[0].style.display = "flex";
    document.getElementsByClassName("right-header")[0].style.display = "flex";
  }
}

document.body.onresize = function () {
  checkScreen();
};
