function loading() {
  var tl = gsap.timeline()

  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });
  tl.from(
    ".yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.5,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    ".loader h1",
    {
      delay: 0.5,
      duration: 0.5,
      color: "black",
    },
    "anim"
  );
  tl.to(".loader", {
    opacity: 0
  });

  tl.to(".loader", {
    display: "none",
  });
}
loading();

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
  });
  // bottom arrow

  document.querySelector(".arrow-img").addEventListener("click", () =>{
      scroll.scrollTo(0)
  })
  document.querySelector(".scroll-btn").addEventListener("click", () =>{
      scroll.scrollTo(0)
  })
  // top arrow
  document.querySelector(".top-arrow-img").addEventListener("click", () =>{
      scroll.scrollTo(703)
  })
  // Top 2 Arrow
  document.querySelector(".top-arrow-img2").addEventListener("click", () =>{
      scroll.scrollTo(1420)
  })
  
  
  
  // const scroll1 = new LocomotiveScroll({
  //   el: document.querySelector('.page3'),
  //   smooth: true
  // });
  
  var elems = document.querySelectorAll(".elem")
  var page2 = document.querySelector(".page2")
  elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
      var bgimg = ele.getAttribute("data-img")
       page2.style.backgroundImage = `url(${bgimg})`
    })
  })
}
loco();

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

// const curso = document.querySelector(".maincursor");
// var timeout;

// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;

//   maincursor.style.top = y + 'px';
//   maincursor.style.left = x + 'px';
//   maincursor.style.display = + 'block';
    
//   function mouseStopped() {
//     maincursor.style.display = 'none';
//   }

// clearTimeout(timeout);
// timeout = setTimeout(mouseStopped, 1000)

// })


// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

// neonCursor({
//   el: document.getElementById('app'),
//   shaderPoints: 16,
//   curvePoints: 80,
//   curveLerp: 0.5,
//   radius1: 5,
//   radius2: 30,
//   velocityTreshold: 10,
//   sleepRadiusX: 100,
//   sleepRadiusY: 100,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025
// })