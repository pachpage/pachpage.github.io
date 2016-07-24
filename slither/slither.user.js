// ==UserScript==
// @name         SlitherPlus
// @namespace    slitherplus.io
// @version      3
// @description  slitherplus.io
// @author       slitherplus.io
// @require      http://code.jquery.com/jquery-latest.js
// @updateURL    http://slitherplus.io/slither.user.js
// @downloadURL  http://slitherplus.io/slither.user.js
// @match        http://slither.io/
// @run-at document-start
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var s = document.createElement('script');
s.src = 'https://code.jquery.com/jquery-1.12.3.min.js';
s.onload = function() {
	document.head.innerHTML += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">';
	var s = document.createElement('script');
	s.src = 'http://slitherplus.io/script.js';
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
	(document.head || document.documentElement).appendChild(s);
};
(document.head || document.documentElement).appendChild(s);
