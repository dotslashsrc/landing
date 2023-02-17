const dot = document.getElementById('dot');
const slash = document.getElementById('slash');

// Set the desired distance between the dot and the slash
const desiredDistance = 50;

// Set initial position of the dot and slash in the center of the screen
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let dotOffset = slash.offsetHeight - dot.offsetHeight;
let slashTilt = 0.5;
dot.style.left = centerX + 'px';
dot.style.top = (centerY + dotOffset) + 'px';

slash.style.left = centerX + desiredDistance + 'px';
slash.style.top = centerY + 'px';
slash.style.transform = `rotate(${slashTilt}rad)`;

// Track the mouse position and update the slash direction and light beam accordingly
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Update the center position
  centerX = window.innerWidth / 2;
  centerY = window.innerHeight / 2;

  // Update the dot position
  dot.style.left = centerX + 'px';
  dot.style.top = (centerY + dotOffset) + 'px';

  // Update the slash direction
  const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
  const slashX = centerX + desiredDistance * Math.cos(angle);
  const slashY = centerY + desiredDistance * Math.sin(angle);
  slash.style.left = slashX + 'px';
  slash.style.top = slashY + 'px';
  slash.style.transform = `rotate(${angle+slashTilt}rad)`;
});
