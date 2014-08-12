'use strict';

describe('Controller: TechwayCtrl', function () {

  // load the controller's module
  beforeEach(module('mySuperradPortfolioApp'));

  var TechwayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechwayCtrl = $controller('TechwayCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
