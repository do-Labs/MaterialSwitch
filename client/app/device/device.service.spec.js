'use strict';

describe('Device service', function() {
  var MockDeviceResource;
  var $httpBackend;

  var mockDevice = {
    _id: 'MOCK_DEVICE'
  };

  beforeEach(angular.mock.module('materialSwitchApp'));

  beforeEach(function() {
    angular.mock.inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      MockDeviceResource = $injector.get('Device');
    });
  });

  describe('guery', function() {
    it('should call GET api/devices', function() {
      $httpBackend
        .expectGET('api/devices')
        .respond([mockDevice]);

      MockDeviceResource.query();
      $httpBackend.flush();
    });
  });

  describe('get', function() {
    it('should call GET api/devices/:deviceId', function() {
      $httpBackend
        .expectGET('api/devices/' + mockDevice._id)
        .respond(mockDevice);

      MockDeviceResource.get({deviceId: mockDevice._id});
      $httpBackend.flush();
    });
  });

  describe('save', function() {
    it('should call POST api/devices/', function() {
      $httpBackend
        .expectPOST('api/devices')
        .respond(mockDevice);

      MockDeviceResource.save();
      $httpBackend.flush();
    });
  });

  describe('update', function() {
    it('should call PUT api/devices/:deviceId', function() {
      $httpBackend
        .expectPUT('api/devices/' + mockDevice._id)
        .respond(mockDevice);

      MockDeviceResource.update(mockDevice);
      $httpBackend.flush();
    });
  });

  describe('remove', function() {
    it('should call DELETE api/devices/:deviceId', function() {
      $httpBackend
        .expectDELETE('api/devices/' + mockDevice._id)
        .respond();

      MockDeviceResource.remove({deviceId: mockDevice._id});
      $httpBackend.flush();
    });
  });
});
