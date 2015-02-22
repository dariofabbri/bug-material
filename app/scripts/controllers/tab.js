'use strict';

/**
 * @ngdoc function
 * @name bugMaterialApp.controller:TabCtrl
 * @description
 * # TabCtrl
 * Controller of the bugMaterialApp
 */
angular.module('bugMaterialApp')
  .controller('TabCtrl', function ($scope, $location) {
		
		$scope.data = {};

		$scope.$watch('data.selectedIndex', function(current) {

			switch(current) {
				case 0: $location.url('/main'); break;
				case 1: $location.url('/projects'); break;
				case 2: $location.url('/about'); break;
			}
		});
  });
