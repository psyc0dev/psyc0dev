// Loading Animation Script
document.addEventListener('DOMContentLoaded', function() {
  // Create loader elements
  const loaderContainer = document.createElement('div');
  loaderContainer.className = 'loader-container';
  
  const loader = document.createElement('div');
  loader.className = 'loader';
  
  // Create three circles for the spinner
  for (let i = 0; i < 3; i++) {
    const circle = document.createElement('div');
    circle.className = 'loader-circle';
    loader.appendChild(circle);
  }
  
  // Add loading text
  const loaderText = document.createElement('div');
  loaderText.className = 'loader-text';
  loaderText.textContent = 'Loading';
  loader.appendChild(loaderText);
  
  loaderContainer.appendChild(loader);
  document.body.appendChild(loaderContainer);
  
  // Add loading dots animation
  let dots = 0;
  const loadingInterval = setInterval(() => {
    dots = (dots + 1) % 4;
    loaderText.textContent = 'Loading' + '.'.repeat(dots);
  }, 300);
  
  // Hide loader after page is fully loaded
  window.addEventListener('load', function() {
    // Add a small delay for visual effect
    setTimeout(() => {
      loaderContainer.classList.add('hidden');
      clearInterval(loadingInterval);
      
      // Add fade-in class to main content
      document.querySelector('main').classList.add('fade-in');
      
      // Remove loader from DOM after transition
      setTimeout(() => {
        loaderContainer.remove();
      }, 500);
    }, 1000);
  });
});