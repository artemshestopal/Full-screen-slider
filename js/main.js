;(function($){
	$(function(){
		var $fullScreenSlider = $('.ba-slider');
		$fullScreenSlider.slick({
			dots: true,
			infinite: false,
			swipe: false,
			responsive:[
			{
				breakpoint: 768,
				settings: {
					swipe: true
				}
			}]

		});

	})


})(jQuery);
