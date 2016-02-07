'use strict';

var myApp = angular.module('MyAngular', ['ngRoute', 'ngMaterial', 'myControllers']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/page1', {
        templateUrl: 'partials/page1.html',
        controller: 'page1Controller'
      }).
      otherwise({
        redirectTo: '/page1'
      });
}]);