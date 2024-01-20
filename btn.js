if (window.location.hash) {
    setTimeout(function(){
      window.scrollTo(0, 0);
    }, 1);
  }

function response1(){
	if (window.innerWidth > 1279){
		$(document).ready(function() {
			let count = $('.hot_coffe > div').length,
				start = 11,
				show = 4;
		
			$('.hot_coffe > div').addClass('d-none');
			$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_1').click(function(e) {
				e.preventDefault()
		
				start = (start + show <= count) ? start + show : count;
		
					$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.hot_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.cold_coffe > div').length,
				start = 5,
				show = 4;
		
			$('.cold_coffe > div').addClass('d-none');
			$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_2').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.cold_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.raf > div').length,
				start = 8,
				show = 4;
		
			$('.raf > div').addClass('d-none');
			$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_3').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.raf > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.waffles > div').length,
				start = 10,
				show = 4;
		
			$('.waffles > div').addClass('d-none');
			$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_4').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.waffles > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.sandwiches > div').length,
				start = 14,
				show = 4;
		
			$('.sandwiches > div').addClass('d-none');
			$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_5').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.sandwiches > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.tea > div').length,
				start = 12,
				show = 4;
		
			$('.tea > div').addClass('d-none');
			$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_6').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.tea > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.milkshakes > div').length,
				start = 13,
				show = 4;
		
			$('.milkshakes > div').addClass('d-none');
			$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_7').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.milkshakes > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.limonades > div').length,
				start = 15,
				show = 4;
		
			$('.limonades > div').addClass('d-none');
			$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_8').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.limonades > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
			});
	}
}

response1()


function response2(){
	if (window.innerWidth <= 1279 && window.innerWidth > 999){
		$(document).ready(function() {
			let count = $('.hot_coffe > div').length,
				start = 10,
				show = 10;
		
			$('.hot_coffe > div').addClass('d-none');
			$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_1').click(function(e) {
				e.preventDefault()
		
				start = (start + show <= count) ? start + show : count;
		
					$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.hot_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.cold_coffe > div').length,
				start = 5,
				show = 4;
		
			$('.cold_coffe > div').addClass('d-none');
			$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_2').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.cold_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.raf > div').length,
				start = 8,
				show = 4;
		
			$('.raf > div').addClass('d-none');
			$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_3').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.raf > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.waffles > div').length,
				start = 10,
				show = 4;
		
			$('.waffles > div').addClass('d-none');
			$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_4').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.waffles > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.sandwiches > div').length,
				start = 14,
				show = 4;
		
			$('.sandwiches > div').addClass('d-none');
			$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_5').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.sandwiches > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.tea > div').length,
				start = 10,
				show = 10;
		
			$('.tea > div').addClass('d-none');
			$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_6').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.tea > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.milkshakes > div').length,
				start = 13,
				show = 4;
		
			$('.milkshakes > div').addClass('d-none');
			$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_7').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.milkshakes > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.limonades > div').length,
				start = 15,
				show = 4;
		
			$('.limonades > div').addClass('d-none');
			$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_8').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.limonades > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
			});
	}
}

response2()

function response3(){
	if (window.innerWidth <= 999 && window.innerWidth > 767){
		$(document).ready(function() {
			let count = $('.hot_coffe > div').length,
				start = 8,
				show = 10;
		
			$('.hot_coffe > div').addClass('d-none');
			$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_1').click(function(e) {
				e.preventDefault()
		
				start = (start + show <= count) ? start + show : count;
		
					$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.hot_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.cold_coffe > div').length,
				start = 5,
				show = 4;
		
			$('.cold_coffe > div').addClass('d-none');
			$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_2').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.cold_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.raf > div').length,
				start = 8,
				show = 4;
		
			$('.raf > div').addClass('d-none');
			$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_3').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.raf > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.waffles > div').length,
				start = 8,
				show = 4;
		
			$('.waffles > div').addClass('d-none');
			$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_4').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.waffles > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.sandwiches > div').length,
				start = 14,
				show = 4;
		
			$('.sandwiches > div').addClass('d-none');
			$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_5').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.sandwiches > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.tea > div').length,
				start = 8,
				show = 10;
		
			$('.tea > div').addClass('d-none');
			$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_6').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.tea > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.milkshakes > div').length,
				start = 13,
				show = 4;
		
			$('.milkshakes > div').addClass('d-none');
			$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_7').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.milkshakes > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.limonades > div').length,
				start = 15,
				show = 4;
		
			$('.limonades > div').addClass('d-none');
			$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_8').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.limonades > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
			});
	}
}

response3()


function response4(){
	if (window.innerWidth <= 767 && window.innerWidth > 479){
		$(document).ready(function() {
			let count = $('.hot_coffe > div').length,
				start = 6,
				show = 10;
		
			$('.hot_coffe > div').addClass('d-none');
			$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_1').click(function(e) {
				e.preventDefault()
		
				start = (start + show <= count) ? start + show : count;
		
					$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.hot_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.cold_coffe > div').length,
				start = 5,
				show = 10;
		
			$('.cold_coffe > div').addClass('d-none');
			$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_2').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.cold_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.raf > div').length,
				start = 6,
				show = 10;
		
			$('.raf > div').addClass('d-none');
			$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_3').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.raf > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.waffles > div').length,
				start = 6,
				show = 10;
		
			$('.waffles > div').addClass('d-none');
			$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_4').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.waffles > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.sandwiches > div').length,
				start = 6,
				show = 10;
		
			$('.sandwiches > div').addClass('d-none');
			$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_5').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.sandwiches > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.tea > div').length,
				start = 6,
				show = 10;
		
			$('.tea > div').addClass('d-none');
			$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_6').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.tea > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.milkshakes > div').length,
				start = 13,
				show = 4;
		
			$('.milkshakes > div').addClass('d-none');
			$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_7').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.milkshakes > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.limonades > div').length,
				start = 6,
				show = 10;
		
			$('.limonades > div').addClass('d-none');
			$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_8').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.limonades > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
			});
	}
}

response4()






function response5(){
	if (window.innerWidth <= 479 && window.innerWidth > 359){
		$(document).ready(function() {
			let count = $('.hot_coffe > div').length,
				start = 4,
				show = 10;
		
			$('.hot_coffe > div').addClass('d-none');
			$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_1').click(function(e) {
				e.preventDefault()
		
				start = (start + show <= count) ? start + show : count;
		
					$('.hot_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.hot_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.cold_coffe > div').length,
				start = 4,
				show = 10;
		
			$('.cold_coffe > div').addClass('d-none');
			$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_2').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.cold_coffe > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.cold_coffe > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.raf > div').length,
				start = 4,
				show = 10;
		
			$('.raf > div').addClass('d-none');
			$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_3').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.raf > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.raf > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.waffles > div').length,
				start = 4,
				show = 10;
		
			$('.waffles > div').addClass('d-none');
			$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_4').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.waffles > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.waffles > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.sandwiches > div').length,
				start = 4,
				show = 10;
		
			$('.sandwiches > div').addClass('d-none');
			$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_5').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.sandwiches > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.sandwiches > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.tea > div').length,
				start = 4,
				show = 10;
		
			$('.tea > div').addClass('d-none');
			$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_6').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.tea > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.tea > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.milkshakes > div').length,
				start = 4,
				show = 10;
		
			$('.milkshakes > div').addClass('d-none');
			$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_7').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.milkshakes > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.milkshakes > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
		
		});
		
		$(document).ready(function() {
			let count = $('.limonades > div').length,
				start = 4,
				show = 10;
		
			$('.limonades > div').addClass('d-none');
			$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
			$('.show-more_8').click(function(e) {
				e.preventDefault();
		
				start = (start + show <= count) ? start + show : count;
		
					$('.limonades > div:lt(' + start + ')').removeClass('d-none');
		
					if ($('.limonades > div:not(.d-none)').length == count) {
						$(this).parent().remove();
					}
		
			});
			});
	}
}

response5()

