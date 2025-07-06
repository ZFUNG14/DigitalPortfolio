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
  once: false
});

//Back to Top Button 
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const contactSection = document.getElementById('about');
  const contactTop = contactSection.offsetTop;

  if (scrollY + window.innerHeight > contactTop + 100) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

//animation when travel to About Me Section
document.querySelector('.scroll-prompt').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ 
    behavior: 'smooth'
  });
});

//animation when travel back to hero Section 
document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth'
  });
});







