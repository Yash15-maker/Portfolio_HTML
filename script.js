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
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Designer", "Developer"],
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

//External Link
function cp() {
  window.open("https://www.codechef.com/users/naruto_nova");
}

function port() {
  window.open("https://affidavit-portfolio.netlify.app/");
}

function kiit() {
  window.open("https://kiit.ac.in");
}

function gmail() {
  window.open("mailto:mishrayash0607@gmail.com");
}

function insta() {
  window.open("https://www.instagram.com/yash____152000/");
}

function linkedin() {
  window.open("https://www.linkedin.com/in/yash-mishra-1847aa1aa/");
}

function fb() {
  window.open("https://www.facebook.com/profile.php?id=100038585474727");
}

function hack() {
  window.open("https://www.hackerrank.com/mishrayash0607");
}


function message() {
  window.open("https://message-contact.netlify.app/");
}


//Rest -API

  

function init()
{
    var url="https://api.github.com/users/Yash15-maker/repos";
    $.get(url,function(data){
        console.log(data);

        data=`
        <td>${data.name}</td>
        
        `
        $("#data").html(data);
    })

  
}
