'use strict';

/* define the app */
var app = angular
	.module("BingoApp", ['ngResource'])
	.controller('Bingo',function($scope, BingoItems, BingoList){
		$scope.label = "Start";
		$scope.items = BingoItems;
		$scope.btn = "";

		$scope.nextItem = function() {
			$scope.label = "Next Item";
			var id = Math.floor(Math.random() * $scope.items.remaining.length),
				itemsLeft = $scope.items.remaining.length,
				active = {};

			// if there are items left
			if(itemsLeft > 0) {

				// if there's an active item, move it to the used list
				if($scope.items.active.name) {
					$scope.items.used.unshift($scope.items.active);
				}

				// get an item from the remaining list and make it active
				active = $scope.items.remaining.splice(id,1);
				$scope.items.active = active[0];
			}
			else {
				$scope.label = "All done";
				$scope.btn = "disabled";
			}
		};

	})
	.filter('path', function() {
		return function(input){
			if(input) {
				console.log(input);
				return '/img/'+input;
			}
		}
	})