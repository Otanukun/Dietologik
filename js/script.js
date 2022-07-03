window.addEventListener('DOMContentLoaded', function(){
	const tabs = require('./modules/tabs');
	const timer = require('./modules/timer');
	const modal = require('./modules/modal');
	const slider = require('./modules/slider');
	const cards = require('./modules/cards');
	const calc = require('./modules/calc');
	const forms = require('./modules/forms');

	tabs();
	timer();
	modal();
	forms();
	slider();
	cards();
	calc();
	
});





