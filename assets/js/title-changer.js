// Simple title changer with direct swap
document.addEventListener('DOMContentLoaded', function() {
  const titleElement = document.querySelector('.changing-title');
  if (!titleElement) return;
  
  // Iron Man titles
  const titles = [
    "Гений",
    "Миллиардер",
    "Плейбой",
    "Филантроп"
  ];
  
  // Set initial text
  titleElement.textContent = titles[0];
  
  let currentIndex = 0;
  
  // Direct swap without animation
  function swapTitle() {
    // Move to next title
    currentIndex = (currentIndex + 1) % titles.length;
    
    // Directly change text
    titleElement.textContent = titles[currentIndex];
  }
  
  // Change title every 2 seconds
  setInterval(swapTitle, 1000);
});