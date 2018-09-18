$( document ).ready(function() {
    var windowHeight = $(window).height() - 20;
    var windowWidth = $(window).width();
    $("#color-sections").css("height", windowHeight);
    $("#girl").css("height", windowHeight);
    $("#down-triangle").css("top", windowHeight+20);
    $("#down-triangle-mobile").css("top", windowHeight+20);
    $("#about-section").css("height", windowHeight);
    $("#about-section").css("top", windowHeight+20);
    $("#schedule-section").css("height", windowHeight);
    $("#schedule-section").css("top", 2*windowHeight);
    $("#sponsors-section").css("height", windowHeight);
    $("#sponsors-section").css("top", 3*windowHeight);
	if (windowWidth < 950 && windowWidth > 700){
		$("#schedule-section").css("top", (2*windowHeight)+150);
	} else if (700 > windowWidth) {
		$("#schedule-section").css("top", (2*windowHeight)+600);
	} else {
		$("#schedule-section").css("top", 2*windowHeight);
	}

    $(window).scroll(function () {
	    if ($(this).scrollTop() > windowHeight+20) {
	        $("#down-triangle").css('position', 'fixed');
	        $("#down-triangle").css('top', 0);
	        $("#down-triangle-mobile").css('position', 'fixed');
	        $("#down-triangle-mobile").css('top', 0);
	    }
	    if ($(this).scrollTop() > windowHeight-60) {
	    	if (windowWidth > 1100) {
	    		$("#girl").css('top', (windowHeight*-1) + 60);
	    	} else {
	    		$("#girl").css('top', (windowHeight*-1) + 50);
	    	}
	        $("#girl").css('position', 'fixed');
	        $(".tagline").hide();
	        $(".down-carrot").hide();
	    } else {
	    	$("#girl").css('top', 0);
	        $("#girl").css('position', 'absolute');
	        $("#down-triangle").css('position', 'absolute');
	        $("#down-triangle").css('top', windowHeight+20);
	        $("#down-triangle-mobile").css('position', 'absolute');
	        $("#down-triangle-mobile").css('top', windowHeight+20);
	        $(".tagline").show();
	        $(".down-carrot").show();
	    }
	});

	$(window).resize(function () {
		if (windowHeight != $(window).height()) {
			windowHeight = $(window).height() - 20;
			$("#color-sections").css("height", windowHeight);
		    $("#girl").css("height", windowHeight);
		    $("#down-triangle").css("top", windowHeight+20);
		    $("#down-triangle-mobile").css("top", windowHeight+20);
		    $("#about-section").css("height", windowHeight);
		    $("#about-section").css("top", windowHeight+20);
		    $("#schedule-section").css("height", windowHeight);
		    $("#schedule-section").css("top", 2*windowHeight);
		    $("#sponsors-section").css("height", windowHeight);
		    $("#sponsors-section").css("top", 3*windowHeight);
		}
		if (windowWidth != $(window).width()) {
			windowWidth = $(window).width();
			if (windowWidth > 1100) {
	    		$("#girl").css('top', (windowHeight*-1) + 60);
	    	} else if (windowWidth < 950 && windowWidth > 700){
	    		$("#schedule-section").css("top", (2*windowHeight)+150);
				$("#girl").css('top', (windowHeight*-1) + 50);
			} else if (700 > windowWidth) {
				$("#schedule-section").css("top", (2*windowHeight)+600);
			} else {
				$("#schedule-section").css("top", 2*windowHeight);
				$("#girl").css('top', (windowHeight*-1) + 50);
			}
	    }
	});

	$("#register").click(function () {
		$('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top + 32
	    }, 400);
	});
	$("#schedule").click(function () {
		$('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top + 32
	    }, 400);
	});


});

function pinkGirl() {
	$("#girl").animate({
	    "background-color": "#f492a7"
	  }, 700 );
	$(".hair").attr("fill", "#f44780");
	$(".shape").attr("fill", "#f44780");
	$("em").css("color", "#f44780");
	$("strong").css("color", "#f492a7");
}

function redGirl() {
	$("#girl").animate({
	    "background-color": "#ff7a65"
	  }, 700 );
	$(".hair").attr("fill", "#b73023");
	$(".shape").attr("fill", "#b73023");
	$("em").css("color", "#ff7a65");
	$("strong").css("color", "#b73023");
	var hair = $(".hair");
	/*animate(0, 1500, function (val) {
	    hair.attr({
	        fill: "#ffffff"
	    });
	}, 3000);*/
}
function orangeGirl() {
	$("#girl").animate({
	    "background-color": "#ffb35c"
	  }, 700 );
	$(".hair").attr("fill", "#ff8700");
	$(".shape").attr("fill", "#ff8700");
	$("em").css("color", "#ff8700");
	$("strong").css("color", "#ffb35c");
}
function yellowGirl() {
	$("#girl").animate({
	    "background-color": "#FFE06C"
	  }, 700 );
	$(".hair").attr("fill", "#FCD100");
	$(".shape").attr("fill", "#FCD100");
	$("em").css("color", "#FCD100");
	$("strong").css("color", "#FFE06C");
}
function greenGirl() {
	$("#girl").animate({
	    "background-color": "#00B50D"
	  }, 700 );
	$(".hair").attr("fill", "#086108");
	$(".shape").attr("fill", "#086108");
	$("em").css("color", "#086108");
	$("strong").css("color", "#00B50D");
}
function turquoiseGirl() {
	$("#girl").animate({
	    "background-color": "#08B5EE"
	  }, 700 );
	$(".hair").attr("fill", "#00DCB4");
	$(".shape").attr("fill", "#00DCB4");
	$("em").css("color", "#08B5EE");
	$("strong").css("color", "#00DCB4");
}
function blueGirl() {
	$("#girl").animate({
	    "background-color": "#0b31aa"
	  }, 700 );
	$(".hair").attr("fill", "#3291F9");
	$(".shape").attr("fill", "#3291F9");
	$("em").css("color", "#0b31aa");
	$("strong").css("color", "#3291F9");
}
function purpleGirl() {
	$("#girl").animate({
	    "background-color": "#462959"
	  }, 700 );
	$(".hair").attr("fill", "#a27994");
	$(".shape").attr("fill", "#a27994");
	$("em").css("color", "#462959");
	$("strong").css("color", "#a27994");
}
function lightsOn() {
	$("#girl").css("background-color", "#fff");
	$(".hair").attr("fill", "#000");
	$(".shape").attr("fill", "#a27994");
}
function lightsOff() {
	$("#girl").css("background-color", "#000");
	$(".hair").attr("fill", "#fff");
	$(".shape").attr("fill", "#fff");
}
/*
animate = function (from, to, setter, ms, easing, callback) {
    if (typeof easing == "function" && !easing.length) {
        callback = easing;
        easing = mina.linear;
    }
    var now = mina.time(),
        anim = mina(from, to, now, now + ms, mina.time, setter, easing);
    callback && eve.once("mina.finish." + anim.id, callback);
    return anim;
};*/