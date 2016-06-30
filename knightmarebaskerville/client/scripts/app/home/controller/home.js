(function() {
    'use strict';

    angular
        .module('KnightmareBaskervilleApp')
        .controller('homeCtrl', HomeCtrl);

    var DEPENDENCIES = [];
    HomeCtrl.$inject = DEPENDENCIES;

    function HomeCtrl() {
        var vm = this;

        vm.content = {
            left: {
                title: "Left Content",
                body: "LEFT - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod tortor ut diam euismod mattis. Integer ex nisi, volutpat ac sodales id, porttitor auctor justo. Duis eleifend rutrum lacus, in rhoncus lectus pellentesque vitae. Nunc tempor sem sed ex tempus, sit amet commodo ipsum consectetur. Morbi tortor lorem, suscipit pharetra tellus a, laoreet cursus nisl. Vestibulum id egestas turpis. Donec vel nunc velit. Proin semper massa a eros dictum, at auctor nulla euismod. Suspendisse potenti. In et maximus ligula. Proin non orci commodo, ultrices tellus non, dictum ante."
            },
            right: {
                title: "Right Content",
                body: "RIGHT - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod tortor ut diam euismod mattis. Integer ex nisi, volutpat ac sodales id, porttitor auctor justo. Duis eleifend rutrum lacus, in rhoncus lectus pellentesque vitae. Nunc tempor sem sed ex tempus, sit amet commodo ipsum consectetur. Morbi tortor lorem, suscipit pharetra tellus a, laoreet cursus nisl. Vestibulum id egestas turpis. Donec vel nunc velit. Proin semper massa a eros dictum, at auctor nulla euismod. Suspendisse potenti. In et maximus ligula. Proin non orci commodo, ultrices tellus non, dictum ante."
            }

        }
    }

})();
