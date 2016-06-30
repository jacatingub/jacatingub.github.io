(function() {
    'use strict';

    angular
        .module('KnightmareBaskervilleApp')
        .directive('loader', loaderDirective);

    function loaderDirective() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "static/templates/loader.tpl.html",
            controller: LoaderController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {}
        };
    }

    // DEPENDENCY INJECTIONS
    var DEPENDENCIES = [];
    LoaderController.$inject = DEPENDENCIES;

    // CONTROLLER FUNCTIONS
    function LoaderController() {
        var vm = this;

        var count = 0;
        vm.ellipseCount = ".";
        setInterval(function(){
            count++;
            document.getElementById('LoadingEllipse').innerHTML = "Loading." + new Array(count % 5).join('.');
        }, 750);
    }

})();