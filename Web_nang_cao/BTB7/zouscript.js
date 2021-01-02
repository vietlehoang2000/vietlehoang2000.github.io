$(document).ready(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow: ".prevArrow",
    nextArrow: ".nextArrow",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

function closeMenu() {
  document.getElementsByClassName("menuOverlay")[0].style.display = "none";
  document.getElementsByClassName("menu")[0].style.display = "none";
}

function openMenu() {
  document.getElementsByClassName("menuOverlay")[0].style.display = "block";
  document.getElementsByClassName("menu")[0].style.display = "block";
}

function bgBlock(nth) {
  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("selectorsBLock")[i].style.background =
      "#66bb6a";
    document.getElementsByClassName("selectorsBLock")[i].style.transition =
      "0.5s";
  }
  switch (nth) {
    case 0:
      document.getElementById("changeColorh4").style.color = "#e2efd2";
      document.getElementById("changeColorFirsth4").style.color = "#e2efd2";
      document.getElementById("changeColorh5").style.color = "white";
      document.getElementById("changeColorh5").style.transition = "0.5s";
      break;
    case 1:
      document.getElementById("changeColorh5").style.color = "#e2efd2";
      document.getElementById("changeColorFirsth4").style.color = "#e2efd2";
      document.getElementById("changeColorh4").style.color = "white";
      document.getElementById("changeColorh4").style.transition = "0.5s";
      break;
    case 2:
      document.getElementById("changeColorh5").style.color = "#e2efd2";
      document.getElementById("changeColorh4").style.color = "#e2efd2";
      document.getElementById("changeColorFirsth4").style.color = "white";
      document.getElementById("changeColorFirsth4").style.transition = "0.5s";
      break;
    case 3:
      document.getElementById("changeColorFirsth4").style.color = "white";
      document.getElementById("changeColorh5").style.color = "white";
      document.getElementById("changeColorh4").style.color = "white";
      break;
  }
  document.getElementsByClassName("selectorsBLock")[nth].style.background =
    "white";
}
