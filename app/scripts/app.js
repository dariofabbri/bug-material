'use strict';

/**
 * @ngdoc overview
 * @name bugMaterialApp
 * @description
 * # bugMaterialApp
 *
 * Main module of the application.
 */
angular
  .module('bugMaterialApp', [
    'ngAria',
    'ngRoute',
		'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
