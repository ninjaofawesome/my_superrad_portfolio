'use strict';

describe('Controller: AmyrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('mySuperradPortfolioApp'));

  var AmyrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AmyrouteCtrl = $controller('AmyrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
