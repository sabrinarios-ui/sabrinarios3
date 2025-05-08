// ✅ JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Hamburger Menu Functionality
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  // Open/close the menu when the hamburger is clicked
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  // Close the menu if clicking outside of it
  document.addEventListener('click', function (event) {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
      navLinks.classList.remove('active');
    }
  });

  // Close menu when a nav link is clicked
  const navLinkItems = document.querySelectorAll('#nav-links a');
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // FAQ Toggle Functionality
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      // Toggle visibility
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });

  // Social Media Click Events (for testing purposes)
  document.querySelector('.instagram').addEventListener('click', function () {
    console.log('Instagram icon clicked!');
  });

  document.querySelector('.linkedin').addEventListener('click', function () {
    console.log('LinkedIn icon clicked!');
  });

  // Dark/Light Mode Toggle Functionality
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;

 

  // Toggle dark/light mode on button click
  themeToggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // Save the current theme to localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Check if dark mode is saved in localStorage, if so, apply dark mode
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleButton.checked = true; // set switch to "on"
  } else {
    body.classList.remove('dark-mode');
    themeToggleButton.checked = false; // set switch to "off"
  }
    
});
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const icons = document.querySelectorAll('.theme-icon');
  icons.forEach(img => {
    const newSrc = document.body.classList.contains('dark-mode') 
      ? img.getAttribute('data-dark') 
      : img.getAttribute('data-light');
    img.setAttribute('src', newSrc);
  });
}



document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');

  // Open the lightbox when an image is clicked
  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src; // Set the image source to the clicked image
      lightboxImg.alt = img.alt || 'Expanded image'; // Set alt text for the lightbox image
    });
  });

  // Close the lightbox when the close button is clicked
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = ''; // Clear the image source when closing
  });

  // Optional: Close the lightbox when clicking outside the image
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxImg.src = ''; // Clear the image source when closing
    }
  });
});





