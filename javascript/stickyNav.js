const navbar = document.querySelector('.nav');
const sticky = navbar.offsetTop -80;
const stickySmall = navbar.offsetTop -3;

window.onscroll = function() {
  stickyNav()
};



if ($(window).width() >= 630) {

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('nav__list-sticky');
    } else {
      navbar.classList.remove('nav__list-sticky');
    }
  }

} else {
    
  function stickyNav() {
    if (window.pageYOffset >= stickySmall) {
      navbar.classList.add('nav__list-sticky');
    } else {
      navbar.classList.remove('nav__list-sticky');
    }
  }

}