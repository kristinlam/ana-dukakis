// $(document).ready( function() {

// $('.grid').isotope({
            
//   itemSelector: '.grid-item',
//   sortBy: 'random'
// });

// // filter items on button click
// $('.filter-button-group').on( 'click', 'li', function() {
//   var filterValue = $(this).attr('data-filter');
// 	  $('.grid').isotope({ filter: filterValue });
// 	  $('.filter-button-group li').removeClass('active');
// 	  $(this).addClass('active');
// });

// })



$(document).ready(function(){


	// Isotope messes up in Chrome because it initiates before everything has loaded

	// This ensures everything has loaded before applying

	$(window).load(function() {

		$("theselector isotope is on").isotope('reLayout');

		$('.grid').isotope({
            
  itemSelector: '.grid-item',
  sortBy: 'random'
});

// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
	  $('.grid').isotope({ filter: filterValue });
	  $('.filter-button-group li').removeClass('active');
	  $(this).addClass('active');
});


	});


});

