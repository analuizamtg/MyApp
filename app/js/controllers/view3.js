'use strict';

angular.module('myApp.controllers')

.controller('view3Ctrl', ['$scope', function($scope) {

	$scope.changeSum = function(){
		$scope.input4 = $scope.input1 + $scope.input2 + $scope.input3;
	}
	
	$scope.changeInput4 = function(){
		var splitValue = $scope.input4/3;
		if (splitValue % 2 === 0 ){
			$scope.input1 = splitValue;
			$scope.input2 = splitValue;
			$scope.input3 = splitValue;
		} else {
			splitValue = $scope.input4/2
			$scope.input1 = splitValue;
			$scope.input2 = splitValue/2;
			$scope.input3 = splitValue/2;

		}
	}	

}]);