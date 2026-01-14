
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

