'use strict';

/**
 * @ngdoc function
 * @name mySuperradPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mySuperradPortfolioApp
 */
angular.module('mySuperradPortfolioApp')
  .controller('MainCtrl', function($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.schools = [
      { name: 'Flatiron School',
        program: 'Full Stack Web Development Fellowship',
        graduation: 'March 2014'
      }, { 
        name: 'Fashion Institute of Technology',
        program: 'Museum Studies, Costume & Textiles (Incomplete)',
        graduation: 'September 2000-June 2001'
      }, { 
        name: 'Pratt Institute',
        program: 'BFA(Fashion Design)',
        graduation: 'May 2000'
      }
    ];

    $scope.works = [  
      { 'name': 'The Maki Fund', 
        'href': 'http://www.makifund.com/',      
      },{
        'name': 'Wizard Development', 
        'href': 'http://www.wizarddevelopment.com/',      
      },{
        'name': 'Nifty Thrifty', 
        'href': 'http://niftythrifty.com/',      
      }
    ];

    

  });

