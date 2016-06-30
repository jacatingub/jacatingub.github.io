(function() {
    'use strict';

    angular
        .module('KnightmareBaskervilleApp')
        .directive('navigation', navigationDirective);

    function navigationDirective() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "static/templates/navigation.tpl.html",
            controller: NavigationController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {}
        };
    }

    // DEPENDENCY INJECTIONS
    var DEPENDENCIES = [];
    NavigationController.$inject = DEPENDENCIES;

    // CONTROLLER FUNCTIONS
    function NavigationController() {
        var vm = this;
        var NAV_BUTTON = $('#NavMasterButton');

        function initialize() {
            vm.EVENTS = EVENTS;
            vm.isNavInitialized = false;
            vm.isNavOpen = false;
            vm.navMaster = { label: "Home", link: "#", hovering: false, class:'fa fa-home fa-3x' };
            vm.navs = [
                { label: "About", link: "#", hovering: false, class:'fa fa-info-circle fa-3x' },
                { label: "Home", link: "#", hovering: false, class:'fa fa-home fa-3x' },
                { label: "Projects", link: "#", hovering: false, class:'fa fa-archive fa-3x' },
                { label: "Blog", link: "#", hovering: false, class: 'fa fa-rss fa-3x' },
                { label: "Facebook", link: "#", hovering: false, class:'fa fa-facebook-square fa-3x' },
                { label: "Contact", link: "#", hovering: false, class:'fa fa-envelope fa-3x' }
            ];
            NAV_BUTTON.addClass('animated fadeInDown');
        }

        var EVENTS = (function() {
            var onClick = (function(){
                return {
                    toggleNav: function(){
                        vm.isNavInitialized = true;
                        vm.isNavOpen = !vm.isNavOpen;
                        vm.navMaster = (vm.isNavOpen) ?
                        { label: "Close", link: "#", hovering: false, class:'fa fa-times fa-3x' } :
                        { label: "Home", link: "#", hovering: false, class:'fa fa-home fa-3x' };
                    },
                    nav: function(index) {
                        console.log(vm.navs[index]);
                    }
                };
            }());

            return {
                onClick: onClick,
                retrieveNavButtonClass: function(index) {
                    if (vm.isNavOpen) {
                        return 'nav-button-open-' + index;
                    } else {
                        return 'nav-button-close-' + index;
                    }
                },
                onHover: function(index) {
                    vm.navs[index].hovering = !vm.navs[index].hovering;
                }
            };
        }());

        initialize();
    }

})();