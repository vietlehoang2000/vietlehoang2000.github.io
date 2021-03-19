function open_nav() {
  document.getElementsByClassName(
    "header--burgermenu-expand"
  )[0].style.display = "block";
  document.getElementsByClassName("header--menu")[0].style.display = "none";
  document.getElementsByClassName("header icon-close")[0].style.display =
    "block";
}

function close_nav() {
  document.getElementsByClassName(
    "header--burgermenu-expand"
  )[0].style.display = "none";
  document.getElementsByClassName("header icon-close")[0].style.display =
    "none";
  document.getElementsByClassName("header--menu")[0].style.display = "flex";
}

function open_log() {
  document.getElementsByClassName("header--container-login")[0].style.display =
    "block";
}

// close login
document.addEventListener("mouseup", function (e) {
  var container = document.getElementsByClassName("login-wrapper")[0];
  var wrapper = document.getElementsByClassName("header--container-login")[0];
  if (!container.contains(e.target)) {
    wrapper.style.display = "none";
  }
});

// close regis
document.addEventListener("mouseup", function (e) {
  var container = document.getElementsByClassName("login-wrapper")[1];
  var wrapper = document.getElementsByClassName("header--container-regis")[0];
  if (!container.contains(e.target)) {
    wrapper.style.display = "none";
  }
});

function open_regis() {
  document.getElementsByClassName("header--container-regis")[0].style.display =
    "block";
  document.getElementsByClassName("header--container-login")[0].style.display =
    "none";
}

//open search
let search;
$(".icon--search").click(function () {
  $(".header--container-search").slideDown(1000);
  $(".header--container-search").css("display", "block");
  $(".fa-search").css("color", "red");
});

//close search
$(document).mouseup(function (e) {
  var container = $(".search-wrapper");

  // if the target of the click isn't the container nor a descendant of the container
  if ((search = true)) {
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".header--container-search").slideUp(1000);
    }
  }
  search = false;
  $(".fa-search").css("color", "white");
});
