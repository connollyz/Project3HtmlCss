

$(function() {

			console.log('Oven is ready');

			$('.about-slides, .project-slides').flickity({
			  // options
			  cellAlign: 'center',
			  pageDots: true,
			  contain: true,
			  wrapAround: true,
			  autoPlay:3000,
			});

			$('a').smoothScroll(
			);

			$('.menu-toggle').click(function(){
  
  			$('nav').toggleClass('site-nav--open');

  			$(this).toggleClass('open');
  				});

		});