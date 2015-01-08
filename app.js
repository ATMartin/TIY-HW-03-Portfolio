$(document).ready(function() {

  $('.intro-button').on('click', function() {
    console.log("b");
    $('.layer').removeClass('secondInStack sendToBack bringToFront');
    $('.about').addClass('secondInStack');
    $('.intro').addClass('sendToBack');
  });

  $('.about-button').on('click', function() {
    $('.layer').removeClass('secondInStack sendToBack bringToFront');
    $('.projects').addClass('secondInStack');
    $('.about').addClass('sendToBack');
  });

  $('.projects-button').on('click', function() {
    $('.layer').removeClass('secondInStack sendToBack bringToFront');
    $('.contact').addClass('secondInStack');
    $('.projects').addClass('sendToBack');
  });

  $('.contact-button').on('click', function() {
    $('.intro').addClass('bringToFront');
    setTimeout(function() {
      $('.layer').removeClass('secondInStack sendToBack bringToFront');
    }, 2010);
  });
});
