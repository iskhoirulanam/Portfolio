$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 500) {
    	$('.navbar').addClass('change');
    }
    else {
    $('.navbar').removeClass('change');
    }
  });
});
