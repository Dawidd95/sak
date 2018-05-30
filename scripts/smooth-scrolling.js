$(function() { // DOMContentLoaded
	$(".arrow-down").on("click", function() {  //event listener
    	$("html, body").animate({
      		scrollTop: $(".about-us").offset().top //dopisujac -300 bedzie do klasy odjac 300px
    	}, 2000);
  	});

  	$(".navbar-links__home").on("click", function() {  //event listener
    	$("html, body").animate({
      		scrollTop: $(".container").offset().top 
    	}, 1500);
  	});

  	$(".navbar-links__about-us").on("click", function() {  //event listener
    	$("html, body").animate({
      		scrollTop: $(".about-us").offset().top 
    	}, 1500);
  	});

  	$(".navbar-links__offer").on("click", function() {  //event listener
    	$("html, body").animate({
      		scrollTop: $(".offer").offset().top //dopisujac -300 bedzie do klasy odjac 300px
    	}, 1500);
  	});

  	$(".navbar-links__portfolio").on("click", function() {  //event listener
    	$("html, body").animate({
      		scrollTop: $(".portfolio").offset().top //dopisujac -300 bedzie do klasy odjac 300px
    	}, 1500);
  	});

  	$(".navbar-links__contact").on("click", function() {  //event listener
    	$("html, body").animate({
      		scrollTop: $(".contact").offset().top //dopisujac -300 bedzie do klasy odjac 300px
    	}, 1500);
  	});
});