'use strict';

angular.module('myApp.controllers', [])


.controller('view1Ctrl', ['$scope','ViewService', function($scope, ViewService) {

	ViewService.name = undefined;

	$scope.changeName = function(){
		ViewService.name = $scope.name;
	}
}]);