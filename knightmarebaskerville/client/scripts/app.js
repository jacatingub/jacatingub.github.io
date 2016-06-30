/**
 * Created by aspen on 6/13/16.
 */
var KnightmareBaskervilleApp = angular.module('KnightmareBaskervilleApp', [
    'ngRoute'
]);

KnightmareBaskervilleApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
        redirectTo: '/home'
    });

    $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);

// URL Configurations
/*KnightmareBaskervilleApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //$routeProvider.when('/kevynanniv/intro', {templateUrl: 'html/main-intro.html'});
    //$routeProvider.when('/kevynanniv/message', {templateUrl: 'html/main-message.html'});
    //$routeProvider.when('/kevynanniv/poem', {templateUrl: 'html/main-poem.html'});
    $routeProvider.otherwise({templateUrl: 'templates/home.tpl.html'});

    $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);*/

// Controller
KnightmareBaskervilleApp.controller('MainCtrl', ['$location', 'jquery', function($location, jquery) {
}]);