'use strict';

angular.module('materialSwitchApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/devices/devices.html',
        controller: 'DevicesCtrl'
      });
  });
