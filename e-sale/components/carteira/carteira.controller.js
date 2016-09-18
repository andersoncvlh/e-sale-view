(function() {
'use strict';

    angular
        .module('esale.carteira')
        .controller('CarteiraController', CarteiraController);

    CarteiraController.$inject = ['$state'];
    function CarteiraController($state) {
        var vm = this;
        vm.title = "Carteira";
        vm.lista = ['teste 1','teste 2'];
        activate();

        ////////////////

        function activate() {
            vm.save = save;
        }

        function save(carteira) {
            vm.lista.push(angular.copy(carteira));
            delete vm.carteira;
        }

        
    }
})();