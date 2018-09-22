var faqHeight = function() {
	$('#faq .panel').css('height', '');
	var faqHeight = 0;
	faqHeight = Math.min($('#FAQ_Col').width(), 350);
	var padding = faqHeight / 6;

	
	$('#faq .panel').css('height', faqHeight);
	$('.FAQ_bubble').css('padding-top', padding + 10);
	$('.FAQ_bubble .FAQ_hover_text').css('padding-bottom', padding);
	$('.FAQ_bubble').css('padding-left', padding / 1.5);
	$('.FAQ_bubble').css('padding-right', padding / 1.5);
};

var affixNav = function() {
	$('#nav').affix({
		offset: {
			top: $('header').height()
		}
	});
	$('#nav-wrapper').css('height', $('#nav').height());
};

$(window).on('resize', function() {
	faqHeight();
	$('#nav').affix('checkPosition');
});

faqHeight();
affixNav();

$('.FAQ_bubble_orig').click(function(){
	var obj = $(this);
	obj.css('display', 'none');
	obj.next().css('display', 'block');
});

$('.FAQ_bubble_click').click(function(){
	var obj = $(this);
	obj.css('display', 'none');
	obj.prev().css('display', 'block');
});