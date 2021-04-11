$( document ).ready(function() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    
    $("#girl").css("min-height", windowHeight);
    $("#color-sections").css("height", $("#girl").height()-100);

    $(window).scroll(function () {
	    if ($(this).scrollTop() > windowHeight) {
	    	$("#down-triangle").css("position", "fixed");
    		$("#down-triangle").css('top', 0);
	        $("#down-triangle-mobile").css('position', 'fixed');
	        $("#down-triangle-mobile").css('top', 0);
    	}else {
    		$("#down-triangle").css("position", "relative");
	        $("#down-triangle-mobile").css('position', 'relative');
    	}
    });

    $(window).resize(function () {
    	windowHeight = $(window).height();
    	windowWidth = $(window).width();
    	$("#girl").css("min-height", windowHeight);
    	$("#color-sections").css("height", $("#girl").height());
    });
});

var COLORS = [
	{"color" : "pink",
		"back" : "#f492a7",
		"hair" : "#f44780" },
	{"color" : "red",
		"back" : "#ff7a65",
		"hair" : "#b73023" },
	{"color" : "orange",
		"back" : "#ffb35c",
		"hair" : "#ff8700" },
	{"color" : "yellow",
		"back" : "#FFE06C",
		"hair" : "#FCD100" },
	{"color" : "green",
		"back" : "#00B50D",
		"hair" : "#086108" },
	{"color" : "turquoise",
		"back" : "#08B5EE",
		"hair" : "#00DCB4" },
	{"color" : "blue",
		"back" : "#0b31aa",
		"hair" : "#3291F9" },
	{"color" : "purple",
		"back" : "#462959",
		"hair" : "#a27994" }
];

function pinkGirl() {
	$("#girl").animate({
	    "background-color": "#f492a7"
	  }, 700 );
	$("#menu-wrapper").animate({
	    "background-color": "#f492a7"
	  }, 700 );
	$(".hair").attr("fill", "#f44780");
	$(".shape").attr("fill", "#f44780");
	$("em").css("color", "#f44780");
	$(".question").css("color", "#f44780");
	$("strong").css("color", "#f492a7");
}

function redGirl() {
	$("#girl").animate({
	    "background-color": "#ff7a65"
	  }, 700 );
	$("#menu-wrapper").animate({
	    "background-color": "#ff7a65"
	  }, 700 );
	$(".hair").attr("fill", "#b73023");
	$(".shape").attr("fill", "#b73023");
	$("em").css("color", "#ff7a65");
	$(".question").css("color", "#ff7a65");
	$("strong").css("color", "#b73023");
}
function orangeGirl() {
	$("#girl").animate({
	    "background-color": "#ffb35c"
	  }, 700 );
	$("#menu-wrapper").animate({
	    "background-color": "#ffb35c"
	  }, 700 );
	$(".hair").attr("fill", "#ff8700");
	$(".shape").attr("fill", "#ff8700");
	$("em").css("color", "#ff8700");
	$(".question").css("color", "#ff8700");
	$("strong").css("color", "#ffb35c");
}
function yellowGirl() {
	$("#girl").animate({
	    "background-color": "#FFE06C"
	  }, 700 );
	$("#menu-wrapper").animate({
	    "background-color": "#FFE06C"
	  }, 700 );
	$(".hair").attr("fill", "#FCD100");
	$(".shape").attr("fill", "#FCD100");
	$("em").css("color", "#FCD100");
	$(".question").css("color", "#FCD100");
	$("strong").css("color", "#FFE06C");
}
function greenGirl() {
	$("#girl").animate({
	    "background-color": "#00B50D"
	  }, 700 );
	$("#menu-wrapper").animate({
	    "background-color": "#00B50D"
	  }, 700 );
	$(".hair").attr("fill", "#086108");
	$(".shape").attr("fill", "#086108");
	$("em").css("color", "#086108");
	$(".question").css("color", "#086108");
	$("strong").css("color", "#00B50D");
}
function turquoiseGirl() {
	$("#girl").animate({
	    "background-color": "#08B5EE"
	  }, 700 );
	$("#menu-wrapper").animate({
	    "background-color": "#08B5EE"
	  }, 700 );
	$(".hair").attr("fill", "#00DCB4");
	$(".shape").attr("fill", "#00DCB4");
	$("em").css("color", "#08B5EE");
	$(".question").css("color", "#08B5EE");
	$("strong").css("color", "#00DCB4");
}
function blueGirl() {
	$("#girl").animate({
	    "background-color": "#0b31aa"
	  }, 700 );
	$("#menu-wrapper").animate({
	    "background-color": "#0b31aa"
	  }, 700 );
	$(".hair").attr("fill", "#3291F9");
	$(".shape").attr("fill", "#3291F9");
	$("em").css("color", "#0b31aa");
	$(".question").css("color", "#0b31aa");
	$("strong").css("color", "#3291F9");
}
function purpleGirl() {
	$("#girl").animate({
	    "background-color": "#462959"
	  }, 700 );
	$("#menu-wrapper").animate({
	    "background-color": "#462959"
	  }, 700 );
	$(".hair").attr("fill", "#a27994");
	$(".shape").attr("fill", "#a27994");
	$("em").css("color", "#462959");
	$(".question").css("color", "#462959");
	$("strong").css("color", "#a27994");
}
