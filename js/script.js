// ✅ JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  
    // Close menu if you click outside
    document.addEventListener('click', function (event) {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);
  
      if (!isClickInsideMenu && !isClickOnHamburger) {
        navLinks.classList.remove('active');
      }
    });
  });document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");
  
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling;
  
        // Toggle visibility
        if (answer.style.display === "block") {
          answer.style.display = "none";
        } else {
          answer.style.display = "block";
        }
      });
    });
  });
// Example: Add a click event listener to Instagram icon
document.querySelector('.instagram').addEventListener('click', function () {
    console.log('Instagram icon clicked!');
});

// Example: Add a click event listener to LinkedIn icon
document.querySelector('.linkedin').addEventListener('click', function () {
    console.log('LinkedIn icon clicked!');
});
  
  
  