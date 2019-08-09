import "./sass/main.scss";

function scrollPositionCheck() {
  if (window.scrollY < 10) {
    document.querySelector(".hero .navbar").classList.remove("detached");
  } else {
    document.querySelector(".hero .navbar").classList.add("detached");
  }
}

document.addEventListener(
  "DOMContentLoaded",
  function(event) {
    scrollPositionCheck();
  },
  false
);

window.addEventListener("scroll", function() {
  scrollPositionCheck();
});

