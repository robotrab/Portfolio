$(function() {
	var cubeContainer = $('#cubeContainer');

	$('.leftArrow').click(function() {
		var pageClass = cubeContainer.attr('class');
		cubeContainer.removeClass( pageClass );
		var targetPage;
		if(pageClass == 'showPortfolio') { targetPage = 'showConnect' };
		if(pageClass == 'showConnect') { targetPage = 'showAbout' };
		if(pageClass == 'showAbout') { targetPage = 'showPortfolio' };
        cubeContainer.addClass( targetPage );
	});
	$('.rightArrow').click(function() {
		var pageClass = $('#cubeContainer').attr('class');
		cubeContainer.removeClass( pageClass );
		var targetPage;
		if(pageClass == 'showPortfolio') { targetPage = 'showAbout' };
		if(pageClass == 'showAbout') { targetPage = 'showConnect' };
		if(pageClass == 'showConnect') { targetPage = 'showPortfolio' };
        cubeContainer.addClass( targetPage );
	});
	$('.bottomArrow').click(function() {
		var pageClass = $('#cubeContainer').attr('class');
		cubeContainer.removeClass( pageClass );
		var targetPage;
		if(pageClass == 'showPortfolio') { targetPage = 'showResume' };
		if(pageClass == 'showResume') { targetPage = 'showPortfolio' };
        cubeContainer.addClass( targetPage );
	});
});