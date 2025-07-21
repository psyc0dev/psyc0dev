// Animated Text
document.addEventListener('DOMContentLoaded', function() {
  // Wait for loading animation to complete
  setTimeout(() => {
    // Get all headings and paragraphs in articles
    const textElements = document.querySelectorAll('article h2, article h3, article h4, article p');
    
    // Split text into spans for animation
    textElements.forEach(element => {
      // Skip elements that are already processed or should be excluded
      if (element.classList.contains('processed') || 
          element.closest('.testimonials-text') || 
          element.closest('.timeline-text')) {
        return;
      }
      
      const text = element.textContent;
      let html = '';
      
      // Create a wrapper for the animated text
      const wrapper = document.createElement('span');
      wrapper.className = 'animated-text-wrapper';
      
      // Split text into words
      const words = text.split(' ');
      
      words.forEach((word, index) => {
        html += `<span class="animated-text" style="animation-delay: ${index * 0.05}s">${word}</span> `;
      });
      
      wrapper.innerHTML = html;
      element.textContent = '';
      element.appendChild(wrapper);
      element.classList.add('processed');
    });
    
    // Create intersection observer to trigger animations when elements are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animatedTexts = entry.target.querySelectorAll('.animated-text');
          animatedTexts.forEach(text => {
            text.classList.add('visible');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all text wrappers
    document.querySelectorAll('.animated-text-wrapper').forEach(wrapper => {
      observer.observe(wrapper);
    });
  }, 2000); // Wait for loading animation to complete
});