'use strict';

angular.module('materialSwitchApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ngAria',
  'ngRoute',
  'ngMaterial'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
