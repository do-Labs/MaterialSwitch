'use strict';

angular.module('materialSwitchApp')
  .factory('Device', ['$resource',
    function($resource){
      return $resource('api/devices/:deviceId', {deviceId: '@_id'}, {
        query: {method: 'GET', isArray: true},
        update: {method:'PUT'}
      });
    }]);
