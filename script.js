// Typed.js
const typed = new Typed("#typed", {
  strings: ["Computer Science Student.", "Data Scientist.", "Machine Learning Enthusiast.", "Software Developer."],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// AOS init
AOS.init({
  duration: 1000,
  once: true
});

//Dynamic Sidebar Visibility 
const header = document.querySelector('.sidebar-header');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
const heroBottom = heroSection.getBoundingClientRect().bottom;

if (heroBottom <= 0) {
  header.classList.remove('hidden'); // Show sidebar
} else {
  header.classList.add('hidden'); // Hide sidebar
}
});

//Back to Top Button 
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const contactSection = document.getElementById('contact');
  const contactTop = contactSection.offsetTop;

  if (scrollY + window.innerHeight > contactTop + 100) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

//animation when travel back to About Me Section
document.querySelector('.scroll-prompt').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ 
    behavior: 'smooth'
  });
});

//animation when travel back to Home Section 
document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth'
  });
});



