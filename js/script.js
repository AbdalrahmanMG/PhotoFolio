$(document).ready(function () {
  $(window).scroll(function () {
    $("#nav").toggleClass("scrolled", $(this).scrollTop() > 50);
  });

  $(window).resize(navHidShow);
  $(window).ready(navHidShow);

  function navHidShow() {
    if ($(window).innerWidth() < 980) {
      $(".nav-icons").addClass("hidden");
      $(".nav-anchor").addClass("hidden");
    } else {
      $(".nav-icons").removeClass("hidden");
      $(".nav-anchor").removeClass("hidden");
    }
  }

  $(window).ready(set2colInsta);
  $(window).resize(set2colInsta);

  function set2colInsta() {
    if ($(window).innerWidth() < 800) {
      $(".insta-imgs img").removeClass("instacol");
      $(".insta-imgs img").addClass("insta2col");
    } else {
      $(".insta-imgs img").removeClass("insta2col");
      $(".insta-imgs img").addClass("instacol");
    }
  }

  $(window).ready(set1img);
  $(window).resize(set1img);

  function set1img() {
    if ($(window).innerWidth() < 480) {
      $(".insta-imgs img").removeClass("insta2col");
      $(".insta-imgs img").addClass("set1img");
    } else {
      $(".insta-imgs img").removeClass("set1img");
      $(".insta-imgs img").addClass("insta2col");
    }
  }

  $(".leftBtn").on("click", $(".eden"), hidEden);
  $(".rightBtn").on("click", $(".anna"), hidAnna);

  function hidEden() {
    if (!$(".eden").hasClass("d-none")) {
      $(".eden").addClass("d-none");
      $(".anna").removeClass("d-none");
      $(".leftBtn").removeClass("iColored").addClass("notFunc");
        $(".rightBtn").removeClass('notFunc').addClass("iColored");
    }
  }

  function hidAnna() {
    if (!$(".anna").hasClass("d-none")) {
      $(".anna").addClass("d-none");
      $(".eden").removeClass("d-none");
      $(".rightBtn").removeClass("iColored").addClass("notFunc");
      if (!$(".leftBtn").hasClass("iColored")) {
        $(".leftBtn").removeClass('notFunc').addClass("iColored");
      }
    }
  }
});
