'use strict';

/* Filters */

angular.module('phonecatFilters', []).
	filter('checkmark', function(){
		return function(input) {
			//Unicode characters for True or False
			return input ? '\u2713' : '\u2718';
		};
});
