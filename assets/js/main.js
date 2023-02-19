function backToTop() {
  document.getElementById("back-to-top").addEventListener("click", function () {
    document.getElementById("back-to-top").classList.add("hide");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
}
backToTop();

function scrollTopBtn() {
  let scrollToTop = document.getElementById("back-to-top"),
    scroll = window.scrollTop();
  if (scroll >= 50) {
    scrollToTop.fadeIn();
  } else {
    scrollToTop.fadeOut();
  }
}
scrollTopBtn();
