$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

function sendmail() {
  var name = $("#Name").val();
  var email = $("#Email").val();
  var subject = $("#Subject").val();
  var message = $("#Message").val();

  var Body =
    "Name: " +
    name +
    "<br>Email: " +
    email +
    "<br>Subject: " +
    subject +
    "<br>Message: " +
    message;

  Email.send({
    SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
    To: "mishrayash0607@gmail.com",
    From: "message@gmail.com",
    Subject: "New message on contact from " + name,
    Body: Body,
  }).then((message) => {
    if (message == "OK") {
      alert("Your mail has been send. Thank you for connecting.");
    } else {
      alert("There is error at sending message. ");
    }
  });

  window.open("thankyou.html");
  
  setTimeout(function(){
    window.location.reload();
  },100)
  
  window.prevent.default();
 
  
}
