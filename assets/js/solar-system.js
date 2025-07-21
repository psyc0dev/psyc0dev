// Enhanced 3D Solar System Background with Meteors
document.addEventListener('DOMContentLoaded', function() {
  const solarSystem = document.createElement('div');
  solarSystem.className = 'solar-system';
  document.body.appendChild(solarSystem);

  // Create sun
  const sun = document.createElement('div');
  sun.className = 'sun';
  solarSystem.appendChild(sun);

  // Create planets
  const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn'];
  planets.forEach(planet => {
    const orbit = document.createElement('div');
    orbit.className = `orbit ${planet}-orbit`;
    
    const planetEl = document.createElement('div');
    planetEl.className = `planet ${planet}`;
    
    // Add planet glow
    const planetGlow = document.createElement('div');
    planetGlow.className = 'planet-glow';
    planetEl.appendChild(planetGlow);
    
    orbit.appendChild(planetEl);
    solarSystem.appendChild(orbit);
  });

  // Add more stars (200 instead of 100)
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 10}s`;
    
    // Vary star sizes
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Add pulsing effect to some stars
    if (Math.random() > 0.7) {
      star.classList.add('pulsing');
    }
    
    solarSystem.appendChild(star);
  }
  
  // Create meteors that continuously fly across the screen
  function createMeteor() {
    const meteor = document.createElement('div');
    meteor.className = 'meteor';
    
    // Random starting position at top of screen
    const startX = Math.random() * 100;
    meteor.style.top = '-5%';
    meteor.style.left = `${startX}%`;
    
    // Random size
    const size = Math.random() * 40 + 20;
    meteor.style.width = `${size}px`;
    
    // Random speed
    const duration = Math.random() * 2 + 1;
    meteor.style.animationDuration = `${duration}s`;
    
    solarSystem.appendChild(meteor);
    
    // Remove meteor after animation completes
    setTimeout(() => {
      meteor.remove();
    }, duration * 1000);
  }
  
  // Create meteors at random intervals
  setInterval(createMeteor, 2000);
  
  // Create a few meteors immediately
  for (let i = 0; i < 3; i++) {
    setTimeout(createMeteor, i * 500);
  }
});