// Menu List
jQuery(function($) {

$('.menu-categories-style').click( function() {
  var active_item = $('.active-page');
  var active_item_id = active_item.attr('data-id');
  $ ('.container-inner-' + active_item_id).removeClass('active-inner');
  var item_id = $(this).attr('data-id');
    active_item.removeClass('active-page');
    $(this).addClass('active-page');
  
 $('.container-inner-' + item_id).addClass('active-inner');
   });


// Gallery Slider

  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

// Specialities Slider

  $('.specialties').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots:true,
  });
  });

 
// Contact Form Validation

(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();