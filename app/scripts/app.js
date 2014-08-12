'use strict';

/**
 * @ngdoc overview
 * @name mySuperradPortfolioApp
 * @description
 * # mySuperradPortfolioApp
 *
 * Main module of the application.
 */
var mySuperradPortfolioApp = angular.module('mySuperradPortfolioApp', [
  'ngRoute'
  ]);

mySuperradPortfolioApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cinna', {
        templateUrl: 'views/cinna.html',
        controller: 'cinnaCtrl'
      })
      .when('/amy', {
        templateUrl: 'views/amy.html',
        controller: 'AmyCtrl'
      })
      .when('/oldfashioned', {
        templateUrl: 'views/oldfashioned.html',
        controller: 'OldfashionedCtrl'
      })
      .when('/techway', {
        templateUrl: 'views/techway.html',
        controller: 'TechwayCtrl'
      })
      .otherwise({
        redirectTo: '/hi'
      });
    }]);