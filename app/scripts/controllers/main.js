'use strict';

/**
 * @ngdoc function
 * @name mySuperradPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mySuperradPortfolioApp
 */
angular.module('mySuperradPortfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
