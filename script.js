
// Navigation Menu Toggle

const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle('active');
}

function hideMenu() {
  nav.classList.remove('active');
  menuIcon.classList.remove('active');
}

// slide show --------------------------------
let currentImageIndex = 0;
const images = document.querySelectorAll('.slide');

function switchImage() {
  images[currentImageIndex].classList.remove('active')
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(switchImage,5000);

// Banner text animation -------------------

const bannerContent = document.getElementById('bannercontent');
let messageHTML = '<span class="contact-message">Contact Me at zakariahaddad@proton.me - I\'am here to make your wbesite better! </span>';
let repeatedMessage = messageHTML.repeat(10);

// set the repeated message as the content
bannerContent.innerHTML = repeatedMessage + repeatedMessage;


// Houdini Worklet
CSS.paintWorklet.addModule('https://unpkg.com/parallelowow@0.1.5/parallelowow.js');

// Scroller - skills

const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
  }
  
function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}




