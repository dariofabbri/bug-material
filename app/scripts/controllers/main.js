'use strict';

/**
 * @ngdoc function
 * @name bugMaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bugMaterialApp
 */
angular.module('bugMaterialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
