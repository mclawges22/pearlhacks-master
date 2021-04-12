$( document ).ready(function() {
	$("#down-triangle").css("top", 0);
	$("#down-triangle").css("position", "fixed");
	$("#down-triangle-mobile").css("top", 0);
	$("#down-triangle-mobile").css("position", "absolute");
	$("#youtube").attr("width", $(".youtube").width());
	$("#youtube").attr("height", $(".youtube").width() * 0.5625);

	$(window).resize(function () {
		$("#youtube").attr("width", $(".youtube").width());
		$("#youtube").attr("height", $(".youtube").width() * 0.5625);
	});
});