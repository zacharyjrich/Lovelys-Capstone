function initMap() {
  var uluru = {lat: 45.552859575384886, lng: -122.67584502696991};
  var map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$(document).ready(function(){
  // Page scrolling of nav buttons
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  // Back to top arrow
  $(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('#go-top').fadeIn(200);
		} else {
			$('#go-top').fadeOut(200);
		}
	});
});
