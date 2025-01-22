$(function(){
	$('.owl-carousel').owlCarousel({
	loop: false,
	margin: 30,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		750: {
			items: 2
		},
		1250: {
			items: 3
		},
		1550: {
			items: 4
		}
		
	}
})
});