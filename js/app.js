var myApp = angular.module('annivApp', [
	'ngRoute'])

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/kevynanniv/intro', {templateUrl: 'html/main-intro.html'});
		$routeProvider.when('/kevynanniv/message', {templateUrl: 'html/main-message.html'});
		$routeProvider.when('/kevynanniv/poem', {templateUrl: 'html/main-poem.html'});
		$routeProvider.otherwise({templateUrl: 'html/main-intro.html'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}]);

myApp.controller('ViewController', ['$scope', '$location', function($scope, $location) {
	$scope.changeView = function(view) {
		$location.path(view);
	}
}]);