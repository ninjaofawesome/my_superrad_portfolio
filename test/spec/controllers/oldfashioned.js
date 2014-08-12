'use strict';

describe('Controller: OldfashionedCtrl', function () {

  // load the controller's module
  beforeEach(module('mySuperradPortfolioApp'));

  var OldfashionedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OldfashionedCtrl = $controller('OldfashionedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
