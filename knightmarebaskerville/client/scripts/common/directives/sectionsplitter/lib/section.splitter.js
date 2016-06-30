(function() {
    'use strict';

    angular
        .module('KnightmareBaskervilleApp')
        .directive('sectionSplitter', sectionSplitterDirective);

    function sectionSplitterDirective() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "static/templates/section.splitter.tpl.html",
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                direction : '=',
                content : '='
            }
        };
    }

    // DEPENDENCY INJECTIONS
    var DEPENDENCIES = [];
    Controller.$inject = DEPENDENCIES;

    // CONTROLLER FUNCTIONS
    function Controller() {
        var vm = this;
        var SPLITTER_TITLE = $('.splitter-title');

        SPLITTER_TITLE.addClass('animated fadeInDown');
        //$('#SplitterTitle').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', console.log("Animation Done!"));
    }

})();