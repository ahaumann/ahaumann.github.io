var distance = $('nav').offset().top;

$(window).scroll(function() {
	if( $(this).scrollTop() >= distance ) {
		$('nav').attr('id','nav-scrolled');
	}
	else {
		$('nav').removeAttr('id','nav-scrolled');
	}
	
})