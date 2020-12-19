let x = 0;

function openNav() {
    var mediaQuery = window.matchMedia("(max-width: 510px)");
    if (mediaQuery.matches && x % 2 == 0) {
      document.getElementsByClassName("headerRightBlock")[0].style.display =
        "none";
    } else
      document.getElementsByClassName("headerRightBlock")[0].style.display =
        "block";
    x++;
}


function checkScreen() {
    var mediaQuery = window.matchMedia("(min-width: 510px)");
    if (mediaQuery.matches) {
        document.getElementsByClassName("headerRightBlock")[0].style.display =
          "block";
    }
}


document.body.onresize = function () { checkScreen() };