function Shuffled () {

	var options = Reveal.getConfig().shuffle || {};
	options.keepFirsts = options.keepFirsts || 0;
	options.keepLasts = options.keepLasts || 0;

	console.log(options.keepFirsts);
	console.log(options.keepLasts);

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
	for (var i = 1 + options.keepFirsts; i != (Reveal.getTotalSlides() - options.keepLasts); ++i) shuffled.push(i)
	
	shuffle(shuffled);

	for (var i = options.keepFirsts; i >= 0; i--) {
		shuffled.unshift(i);
	}

	for (var i = Reveal.getTotalSlides() - options.keepLasts; i != Reveal.getTotalSlides(); i++) {
		shuffled.push(i);
	}

	console.log(shuffled);
	var currentIndex = 0;

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