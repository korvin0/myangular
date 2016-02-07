'use strict';

/* Controllers */

var myControllers = angular.module('myControllers', []);

myControllers.controller('page1Controller', ['$scope',
  function($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;

    $scope.googleUrl = 'http://google.com';
  }]
);
