'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'ngAnimate',
  'myApp.directives',
  'myApp.services',
  'myApp.controllers',
  'myApp.version',
]).
config(['$locationProvider', '$routeProvider','$stateProvider', '$urlRouterProvider', function($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
	
  $stateProvider.state('view1', {
		url: '/:param1?param2',
    controllerProvider: function($stateParams){
      return $stateParams.param1 + "Ctrl";
    },
    templateUrl: function($stateParams){
      return '/views/' + $stateParams.param1 + '.html'
    } 
  });

  $urlRouterProvider.otherwise('/view1');

}]);
