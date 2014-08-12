'use strict';

describe('Controller: CinnaCtrl', function () {

  // load the controller's module
  beforeEach(module('mySuperradPortfolioApp'));

  var CinnaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CinnaCtrl = $controller('CinnaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
