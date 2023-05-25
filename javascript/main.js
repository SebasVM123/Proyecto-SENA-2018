$(document).ready(function(){

	//Fixed Header
	$(window).on('scroll', function() {
		if( $(window).scrollTop() ) {
			$('nav').addClass('black');
		}
		else {
			$('nav').removeClass('black');
		}
	})

	$(window).on('scroll', function() {
		if( $(window).scrollTop() ) {
			$( "#icono" ).attr('src', 'Imágenes/Otros/icono2.png');
		}
		else {
			$( "#icono" ).attr('src', 'Imágenes/Otros/icono.png');
		}
	});
	
})