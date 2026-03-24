

$(".toggle-btn").on("click", function () {
    $("body").toggleClass("open");
  });

  $("#nav a").on("click", function () {
    $("header").toggleClass("open");
  });

gsap.to(".catch-copy", {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  duration: 2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".catch_copy",
    start: "top 80%"
  }
});


$(function() {
  $('#nav li a').on('click', function(e) {
    e.preventDefault(); // navになるliを・クリックしたとき

    var target = $(this).attr('href'); // #○○○○までスクールする
    var position = $(target).offset().top; // topから

    $('html, body').animate({
      scrollTop: position
    }, 600); // 6秒かけてスルスル動く
  });
});




  $(".new-products").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });



  $(".limited-item").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 2,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });
		

