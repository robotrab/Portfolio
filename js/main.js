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
  var cubeSection = $('#cubeSection');
  var cubeFace = $('.cubeFace');

	$('.leftArrow').click(function() {
  		var pageClass = cubeContainer.attr('class');
  		if(targetDeg == 90 || targetDeg%360 == 90 || targetDeg%360 == -270) {
  			targetDeg += 180;
  		}
  		else {
  			targetBottom = 0;
  			targetDeg += 90;
  		}
  		$('.'+pageClass).css({
  			'-webkit-transform': 'translateZ(-100px) rotateY('+targetDeg+'deg)',
  			'-moz-transform': 'translateZ(-100px) rotateY('+targetDeg+'deg)',
  			'-o-transform': 'translateZ(-100px) rotateY('+targetDeg+'deg)',
  			'transform': 'translateZ(-100px) rotateY('+targetDeg+'deg)'
  			});
      if(targetDeg == 90 || targetDeg%360 == 90 || targetDeg%360 == -270) {
        cubeSection.css('height', '600px');
        cubeFace.css('height', '600px');
      }
      else if(targetDeg == -90 || targetDeg%360 == 270) {
        cubeSection.css('height', '1000px');
        cubeFace.css('height', '1000px');
      }
      else if(targetDeg%360 == 0) {
        cubeSection.css('height', '600px');
        cubeFace.css('height', '600px');
      }
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
  		$('.'+pageClass).css({
  			'-webkit-transform': 'translateZ(-100px) rotateY('+targetDeg+'deg)',
  			'-moz-transform': 'translateZ(-100px) rotateY('+targetDeg+'deg)',
  			'-o-transform': 'translateZ(-100px) rotateY('+targetDeg+'deg)',
  			'transform': 'translateZ(-100px) rotateY('+targetDeg+'deg)'
  			});
      if(targetDeg == -90 || targetDeg%360 == -90 || targetDeg%360 == 270) {
        cubeSection.css('height', '1000px');
        cubeFace.css('height', '1000px');
      }
      else if(targetDeg == 90 || targetDeg%360 == -270) {
        cubeSection.css('height', '600px');
        cubeFace.css('height', '600px');
      }
      else if(targetDeg%360 == 0) {
        cubeSection.css('height', '600px');
        cubeFace.css('height', '600px');
      }
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
  		$('.'+pageClass).css({
  			'-webkit-transform': 'translateZ(-100px) rotateX('+targetBottom+'deg)',
  			'-moz-transform': 'translateZ(-100px) rotateX('+targetBottom+'deg)',
  			'-o-transform': 'translateZ(-100px) rotateX('+targetBottom+'deg)',
  			'transform': 'translateZ(-100px) rotateX('+targetBottom+'deg)'
  			});
      if(targetBottom == 90 || targetBottom%360 == 90 || targetBottom%360 == -270) {
        cubeSection.css('height', '1200px');
        cubeFace.css('height', '1200px');
      }
      else {
        cubeSection.css('height', '600px');
        cubeFace.css('height', '600px');
      }
	});
});