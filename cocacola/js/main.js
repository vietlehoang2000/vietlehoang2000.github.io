
function open_nav() {
    document.getElementsByClassName("header--burgermenu-expand")[0].style.display = "block";
    document.getElementsByClassName("header--menu")[0].style.display = "none";
    document.getElementsByClassName("header icon-close")[0].style.display =
      "block";
}

function close_nav() {
    document.getElementsByClassName("header--burgermenu-expand")[0].style.display = "none";
    document.getElementsByClassName("header icon-close")[0].style.display = "none";
    document.getElementsByClassName("header--menu")[0].style.display = "flex";
}

function open_find() {
    document.getElementById("search--input").style.display = "block";
    document.getElementsByClassName("header--icon")[0].style.width ="20%";
}

window.addEventListener("click", function (e) {
  if (document.getElementsByClassName("search-open")[0].contains(e.target)) {
    document.getElementById("search--input").style.display = "block";
      document.getElementsByClassName("header--icon")[0].style.width = "20%";
      document.getElementsByClassName("fa-search")[0].style.color = "red";
  } else {
    document.getElementById("search--input").style.display = "none";
      document.getElementsByClassName("header--icon")[0].style.width = "10%";
      document.getElementsByClassName("fa-search")[0].style.color = "white";
  }
});