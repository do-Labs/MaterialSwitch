'use strict';

describe('DevicesCtrl', function () {
  var $q;
  var $rootScope;
  var $scope;
  var mockDeviceService  = {};

  var mockDevices = [
    {
      _id: 'MOCK_DEVICE_1'
    }
  ];

  beforeEach(module('materialSwitchApp'));

  beforeEach(inject(function (_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function ($controller) {
    $scope = $rootScope.$new();

    mockDeviceService.query = jasmine.createSpy().andCallFake(function(){
      return mockDevices;
    });

    $controller('DevicesCtrl', {
      '$scope': $scope,
      'Device': mockDeviceService
    });
  }));

  beforeEach(function () {
    $rootScope.$apply();
  });

  describe('initialization', function () {
    it('should call query in Device service', function () {
      expect(mockDeviceService.query).toHaveBeenCalled();
    });

    it('should set devices to scope', function () {
      expect($scope.devices).toEqual(mockDevices);
    });
  });
});
