'use strict';

angular.module('materialSwitchApp')
  .controller('DevicesCtrl', function ($scope, $timeout, $mdSidenav, $mdToast, Device) {
    $scope.devices = Device.query(); // [{_id: 1, name:'test', isOn: false, group:1, device: 1}]

    $scope.selectDevice = function (device) {
      $scope.selectedDevice = device;
      $mdSidenav('device').open();
    };

    $scope.addNew = function () {
      var newDevice = {
        group: 1,
        device: 1,
        isOn: false
      };

      $scope.selectDevice(newDevice);
    };


    $scope.deselectDevice = function () {
      $mdSidenav('device').close().then(function () {
          $scope.deviceForm.$setUntouched();
        }
      );
    };

    function showError(error) {
      $mdToast.show(
        $mdToast.simple()
          .content(error.statusText || 'An error occurred!')
          .theme('error')
          .position('bottom right')
          .hideDelay(3000)
      );
    }

    $scope.toggleDeviceState = function (device) {
      device.isOn = !device.isOn;
      device.$update({}, angular.noop, showError);
    };

    $scope.saveDevice = function (device) {
      if ($scope.deviceForm.$valid) {
        $scope.deselectDevice();

        if (device._id) {
          device.$update({}, angular.noop, showError);
        } else {
          device = new Device(device);
          device.$save({}, function () {
            $scope.devices.push(device);
          }, showError);
        }
      }
    };

    $scope.removeDevice = function (device) {
      device.$remove({}, function success() {
        $scope.devices.splice($scope.devices.indexOf(device), 1);
        $scope.deselectDevice();
      }, showError);
    };
  });
