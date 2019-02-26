// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector('.nav');

// Get the offset position of the navbar
var sticky = navbar.offsetTop -80;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('nav__list-sticky');
  } else {
    navbar.classList.remove('nav__list-sticky');
  }
}