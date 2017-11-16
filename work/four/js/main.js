

$(document).ready(function() {

	$('a[href^="#"]').click(function () { 
	    elementClick = $(this).attr("href");
	    destination = $(elementClick).offset().top;
	    $('body').animate( { scrollTop: destination }, 900 );
    });


	/*var pContainerHeight = $('.head').height();

    $(window).scroll(function() {

	    var wScroll = $(this).scrollTop;
	    var a = $('.logo');
		// a.css({
		//     'transform' : 'translate(0px, '+ wScroll /4 +'%)'
		// });
		a.css('transform', 'translate(0px, '+ wScroll /20 +'%)');
	});*/



	$('.program__link').on('click', function(event) {
		event.preventDefault();

		var programItem = $(this).closest('.program__item');
		var programContent = $('.program-content');
		var indexItem = programItem.index();

		programItem.addClass('program__item_active')
		.siblings().removeClass('program__item_active');

		programContent.eq(indexItem).addClass('program-content_active')
		.siblings().removeClass('program-content_active');

	});





	$('.slider').slick({
		autoplay: false,
		autoplaySpeed: 2000,
		speed: 1000,
		prevArrow: '.gallery-slider-prev',
		nextArrow: '.gallery-slider-next',
		dots: false,
		adaptiveHeight: true,
		infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 3
	});

	$('.testimonials-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		prevArrow: '.testimonials-slider-prev',
		nextArrow: '.testimonials-slider-next',
		infinite: true,
		dots: true
	});

	$('.partners-slider').slick({
		autoplay: true,
		autoplaySpeed: 700,
		speed: 700,
		prevArrow: '.partners-slider-prev',
		nextArrow: '.partners-slider-next',
		infinite: true,
		dots: false,
		slidesToShow: 6,
	  	slidesToScroll: 1
	});
});