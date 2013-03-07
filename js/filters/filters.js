'use strict';

/* Filters */

angular.module('filters', []).

/* prepends image file names from service with server path */
	filter('imgPath',function(){
		return function(input){
			if(input) {
				return '/img/'+input;
			}
		};
	});