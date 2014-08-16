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
        controller: 'MainCtrl'
      })
      .when('/amy', {
        templateUrl: 'views/amy.html',
        controller: 'MainCtrl'
      })
      .when('/oldfashioned', {
        templateUrl: 'views/oldfashioned.html',
        controller: 'MainCtrl'
      })
      .when('/techway', {
        templateUrl: 'views/techway.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    }]);