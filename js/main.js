var targetDeg = 0;
var targetBottom = 0;

$(function() {
	function getRotationDegrees(obj) {
	    var matrix = obj.css("-webkit-transform") ||
	    obj.css("-moz-transform")    ||
	    obj.css("-ms-transform")     ||
	    obj.css("-o-transform")      ||
	    obj.css("transform");
	    if(matrix !== 'none') {
	        var values = matrix.split('(')[1].split(')')[0].split(',');
	        var a = values[0];
	        var b = values[1];
	        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
	    } else { var angle = 0; }
	    return angle;
	}

	var cubeContainer = $('#cubeContainer');

	$('.leftArrow').click(function() {
  		var pageClass = cubeContainer.attr('class');
  		if(targetDeg == 90 || targetDeg%360 == 90 || targetDeg%360 == -270) {
  			targetDeg += 180;
  		}
  		else {
  			targetBottom = 0;
  			targetDeg += 90;
  		}
  		console.log('Left' + targetDeg);
  		$('.'+pageClass).css('-webkit-transform', 'rotateY('+targetDeg+'deg)');
	});
	$('.rightArrow').click(function() {
		var pageClass = cubeContainer.attr('class');
  		if(targetDeg == -90 || targetDeg%360 == -90 || targetDeg%360 == 270) {
  			targetDeg -= 180;
  		}
  		else {
  			targetBottom = 0;
  			targetDeg -= 90;
  		}
  		console.log('Right' + targetDeg);
  		$('.'+pageClass).css('-webkit-transform', 'rotateY('+targetDeg+'deg)');
	});
	$('.bottomArrow').click(function() {
		var pageClass = cubeContainer.attr('class');
  		if(targetBottom == 90 || targetBottom%360 == 90 || targetBottom%360 == -270) {
  			targetBottom += 270;
  		}
  		else {
  			targetDeg = 0;
  			targetBottom += 90;
  		}
  		console.log('Bottom' + targetBottom);
  		$('.'+pageClass).css('-webkit-transform', 'rotateX('+targetBottom+'deg)');
	});
});