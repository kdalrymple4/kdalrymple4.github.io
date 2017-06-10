$(document).ready(function() {
  $(window).on('scroll', function() {
    if ($(window).scrollTop() < $('#aboutMe').offset().top) {
      $('.navbar li').removeClass('active');
      $('.navbar-home').addClass('active');
    }
    if ($(window).scrollTop() >= $('#aboutMe').offset().top) {
      $('.navbar li').removeClass('active');
      $('.navbar-about-me').addClass('active');
    }
    if ($(window).scrollTop() >= $('#skills').offset().top) {
      $('.navbar li').removeClass('active');
      $('.navbar-skills').addClass('active');
    }
    if ($(window).scrollTop() >= $('#projects').offset().top) {
      $('.navbar li').removeClass('active');
      $('.navbar-projects').addClass('active');
    }
    if ($(window).scrollTop() >= $('#contactMe').offset().top) {
      $('.navbar li').removeClass('active');
      $('.navbar-contact-me').addClass('active');
    }
  });
});
