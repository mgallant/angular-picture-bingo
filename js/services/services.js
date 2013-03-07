'use strict';

/* Services */

app
	.factory('BingoList', function($resource){
		return $resource('/bingo-items.json', {}, {
			query: {method:'GET', params: {}, isArray:true}
		});
	})
	.factory('BingoItems', function(BingoList) {
		return {
			active: {},
			used: [],
			remaining: BingoList.query()
		};
	});
