'use strict';

angular.module('myApp.controllers')

.controller('view4Ctrl', ['$scope','$stateParams', function($scope, $stateParams) {

	$scope.param2 = $stateParams.param2;

}]);