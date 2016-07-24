var s = document.createElement('script');
s.src = 'https://pachpage.github.io/slither/jquery-1.12.3.min.js';
s.onload = function() {
	document.head.innerHTML += '<link rel="stylesheet" href="https://pachpage.github.io/slither/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">';
	var s = document.createElement('script');
	s.src = 'https://pachpage.github.io/slither/script.js';
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
	(document.head || document.documentElement).appendChild(s);
};
(document.head || document.documentElement).appendChild(s);
