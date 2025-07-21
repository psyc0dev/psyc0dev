// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('article section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});