KnightmareBaskervilleApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider.when('/home', {
            templateUrl: 'static/templates/home.tpl.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        });
    }
]);