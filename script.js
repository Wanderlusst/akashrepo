// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.navLinks');
  
//     hamburger.addEventListener('click', () => {
//       navLinks.classList.toggle('show');
//     });
  
//     // Check viewport width on page load or resize
//     function checkViewportWidth() {
//       if (window.innerWidth <= 360) {
//         hamburger.style.display = 'block';
//       } else {
//         hamburger.style.display = 'none';
//         navLinks.classList.remove('show');
//       }
//     }
  
//     // Call the function on page load and whenever the window is resized
//     checkViewportWidth(); // Call it immediately on page load
//     window.addEventListener('resize', checkViewportWidth);
//   });
  