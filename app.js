
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    } else {
      entry.target.classList.remove('animated');
    }
  });
}, observerOptions);

const sections = document.querySelectorAll('.content-section');
sections.forEach(section => observer.observe(section));