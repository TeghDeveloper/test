$(".owl-carousel.slider-wraper").owlCarousel({
	items:1,
	loop:true,
	nav:true,
	video:true,
	autoplay:true,
	autoplayTimeout:7000,
	autoplayHoverPause:true
});

/* text slider*/
$(document).ready(function() {
  //carousel options
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,nav:true,
  });
});


/* half and half*/
$(window).scroll(function(){				 
	$('.container p').each(function(){
    	var scrollTop     = $(window).scrollTop(),
        	elementOffset = $(this).offset().top,
       		distance      = (elementOffset - scrollTop),
			    windowHeight  = $(window).height(),
			    breakPoint    = windowHeight*0.9;

			if(distance > breakPoint) {
				$(this).addClass("more-padding");	
			}  if(distance < breakPoint) {
				$(this).removeClass("more-padding");	
			}
	});
});





