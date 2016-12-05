'use strict';

angular.module('myApp.controllers')

.controller('view2Ctrl', ['$scope', 'ViewService','PeopleService', function($scope, ViewService, PeopleService) {

	$scope.name = ViewService.name;

	$scope.nameCheckbox = false;

	$scope.ageCheckbox = false;

	$scope.peopleList = PeopleService.list;

}]);