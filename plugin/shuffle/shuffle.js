function Shuffled () {
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;
	 	while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	}
	var shuffled = [];
	for (var i = 1; i != Reveal.getTotalSlides(); ++i) shuffled.push(i)
	
	shuffle(shuffled);
	var currentIndex = -1;

	this.next = function() {
		currentIndex += 1;
		Reveal.slide(shuffled[currentIndex]);
	}

	this.previous = function () {
		currentIndex -= 1;
		Reveal.slide(shuffled[currentIndex]);
	}
}


var shuffled = new Shuffled();


Reveal.configure({
		keyboard: {
		13: function() { // enter
				shuffled.next();
			},
		32: function() { // space
				shuffled.next();
			},
		37: function() { // left
				shuffled.previous();
		},
		39: function() { // right
				shuffled.next();
		}

  }
});


// p, page up
				// case 80: case 33: navigatePrev(); break;
				// // n, page down
				// case 78: case 34: navigateNext(); break;
				// // h, left
				// case 72: case 37: navigateLeft(); break;
				// // l, right
				// case 76: case 39: navigateRight(); break;
				// // k, up
				// case 75: case 38: navigateUp(); break;
				// // j, down
				// case 74: case 40: navigateDown(); break;
				// // home
				// case 36: slide( 0 ); break;
				// // end
				// case 35: slide( Number.MAX_VALUE ); break;
				// // space
				// case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// // return
				// case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// // two-spot, semicolon, b, period, Logitech presenter tools "black screen" button
				// case 58: case 59: case 66: case 190: case 191: togglePause(); break;
				// // f
				// case 70: enterFullscreen(); break;
				// // a
				// case 65: if ( config.autoSlideStoppable ) toggleAutoSlide( autoSlideWasPaused ); break;