
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

function open_log() {
    document.getElementsByClassName("header--container-login")[0].style.display="block";
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
    document.getElementsByClassName("header--container-login")[0].style.display = "none";
}